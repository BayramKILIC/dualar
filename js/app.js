// ==================== CONFIGURATION ====================
const CONFIG = {
    dataPath: 'data/dualar.json',
    themes: ['light', 'dark'],
    textSizes: ['small', 'medium', 'large'],
    storage: {
        theme: 'zikir_theme',
        textSize: 'zikir_text_size'
    }
};

// ==================== ÉTAT GLOBAL ====================
let currentData = null;
let currentType = null;
let audioPlayers = {};

// ==================== INITIALISATION ====================
document.addEventListener('DOMContentLoaded', () => {
    initializeSettings();
    
    // Déterminer quelle page nous sommes
    const path = window.location.pathname;
    
    if (path.includes('liste.html')) {
        initializeListePage();
    } else {
        // Page d'accueil
        console.log('Page d\'accueil chargée');
    }
});

// ==================== PARAMÈTRES ====================
function initializeSettings() {
    // Charger le thème
    const savedTheme = localStorage.getItem(CONFIG.storage.theme) || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    // Charger la taille du texte
    const savedTextSize = localStorage.getItem(CONFIG.storage.textSize) || 'medium';
    document.documentElement.setAttribute('data-text-size', savedTextSize);
    
    // Événements des boutons
    const themeToggle = document.getElementById('theme-toggle');
    const textSizeToggle = document.getElementById('text-size-toggle');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    if (textSizeToggle) {
        textSizeToggle.addEventListener('click', toggleTextSize);
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem(CONFIG.storage.theme, newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('.theme-icon');
    if (icon) {
        icon.textContent = theme === 'light' ? '🌙' : '☀️';
    }
}

function toggleTextSize() {
    const currentSize = document.documentElement.getAttribute('data-text-size');
    const currentIndex = CONFIG.textSizes.indexOf(currentSize);
    const nextIndex = (currentIndex + 1) % CONFIG.textSizes.length;
    const newSize = CONFIG.textSizes[nextIndex];
    
    document.documentElement.setAttribute('data-text-size', newSize);
    localStorage.setItem(CONFIG.storage.textSize, newSize);
}

// ==================== PAGE LISTE ====================
async function initializeListePage() {
    // Récupérer le type depuis l'URL
    const urlParams = new URLSearchParams(window.location.search);
    currentType = urlParams.get('type') || 'sabah';
    
    // Mettre à jour l'interface
    updatePageHeader(currentType);
    
    // Charger les données
    try {
        await loadData();
        displayDualar();
    } catch (error) {
        console.error('Erreur lors du chargement des données:', error);
        showError();
    }
}

function updatePageHeader(type) {
    const titleIcon = document.getElementById('title-icon');
    const titleText = document.getElementById('title-text');
    
    if (type === 'sabah') {
        titleIcon.textContent = '🌅';
        titleText.textContent = 'Sabah Zikirleri';
        document.querySelector('.header').style.background = 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)';
    } else {
        titleIcon.textContent = '🌙';
        titleText.textContent = 'Akşam Zikirleri';
        document.querySelector('.header').style.background = 'linear-gradient(135deg, #818cf8 0%, #6366f1 100%)';
    }
}

async function loadData() {
    try {
        const response = await fetch(CONFIG.dataPath);
        if (!response.ok) {
            throw new Error('Erreur de chargement des données');
        }
        currentData = await response.json();
    } catch (error) {
        throw error;
    }
}

function displayDualar() {
    const container = document.getElementById('dualar-container');
    const dualar = currentData[currentType];
    
    if (!dualar || dualar.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-muted);">Henüz dua eklenmedi.</p>';
        return;
    }
    
    container.innerHTML = '';
    
    dualar.forEach((dua, index) => {
        const duaElement = createDuaElement(dua, index);
        container.appendChild(duaElement);
    });
}

function createDuaElement(dua, index) {
    const duaDiv = document.createElement('div');
    duaDiv.className = 'dua-item';
    duaDiv.style.animationDelay = `${index * 0.05}s`;
    
    duaDiv.innerHTML = `
        <div class="dua-header">
            <div class="dua-number">${index + 1}.</div>
            <h2 class="dua-title">${dua.baslik}</h2>
        </div>
        
        <div class="dua-content">
            <div class="dua-arabic">${dua.arapca}</div>
            <div class="dua-turkish">${dua.turkce}</div>
        </div>
        
        <div class="fazileti-section">
            <button class="fazileti-toggle" onclick="toggleFazileti(${index})">
                <span>📖 Bu duanın fazileti</span>
                <span class="fazileti-toggle-icon">▼</span>
            </button>
            <div class="fazileti-content" id="fazileti-${index}">
                <div class="fazileti-text">${dua.fazileti}</div>
            </div>
        </div>
        
        <div class="audio-player">
            <div class="audio-controls">
                <button class="play-button" onclick="toggleAudio(${index})">
                    <span id="play-icon-${index}">▶️</span>
                </button>
                <div class="audio-progress">
                    <div class="progress-bar" onclick="seekAudio(event, ${index})">
                        <div class="progress-fill" id="progress-${index}"></div>
                    </div>
                    <div class="time-display">
                        <span id="current-time-${index}">0:00</span>
                        <span id="duration-${index}">0:00</span>
                    </div>
                </div>
            </div>
            <audio id="audio-${index}" src="${dua.audio}" preload="metadata"></audio>
        </div>
    `;
    
    // Initialiser l'audio après l'ajout au DOM
    setTimeout(() => {
        initializeAudio(index);
    }, 100);
    
    return duaDiv;
}

// ==================== FAZILETI ====================
function toggleFazileti(index) {
    const content = document.getElementById(`fazileti-${index}`);
    const button = content.previousElementSibling;
    
    if (content.classList.contains('active')) {
        content.classList.remove('active');
        button.classList.remove('active');
    } else {
        content.classList.add('active');
        button.classList.add('active');
    }
}

// ==================== AUDIO PLAYER ====================
function initializeAudio(index) {
    const audio = document.getElementById(`audio-${index}`);
    if (!audio) return;
    
    audioPlayers[index] = {
        element: audio,
        playing: false
    };
    
    // Événements audio
    audio.addEventListener('loadedmetadata', () => {
        updateDuration(index);
    });
    
    audio.addEventListener('timeupdate', () => {
        updateProgress(index);
    });
    
    audio.addEventListener('ended', () => {
        resetAudio(index);
    });
    
    audio.addEventListener('error', (e) => {
        console.error(`Erreur audio ${index}:`, e);
        document.getElementById(`play-icon-${index}`).textContent = '⚠️';
    });
}

function toggleAudio(index) {
    const player = audioPlayers[index];
    if (!player) return;
    
    const audio = player.element;
    const playIcon = document.getElementById(`play-icon-${index}`);
    
    // Arrêter tous les autres audios
    Object.keys(audioPlayers).forEach(key => {
        if (parseInt(key) !== index && audioPlayers[key].playing) {
            stopAudio(parseInt(key));
        }
    });
    
    if (player.playing) {
        audio.pause();
        playIcon.textContent = '▶️';
        player.playing = false;
    } else {
        audio.play().catch(e => {
            console.error('Erreur de lecture:', e);
            playIcon.textContent = '⚠️';
        });
        playIcon.textContent = '⏸️';
        player.playing = true;
    }
}

function stopAudio(index) {
    const player = audioPlayers[index];
    if (!player) return;
    
    player.element.pause();
    player.element.currentTime = 0;
    document.getElementById(`play-icon-${index}`).textContent = '▶️';
    player.playing = false;
}

function resetAudio(index) {
    const player = audioPlayers[index];
    if (!player) return;
    
    player.element.currentTime = 0;
    document.getElementById(`play-icon-${index}`).textContent = '▶️';
    player.playing = false;
    document.getElementById(`progress-${index}`).style.width = '0%';
}

function updateProgress(index) {
    const audio = audioPlayers[index]?.element;
    if (!audio) return;
    
    const progress = (audio.currentTime / audio.duration) * 100;
    document.getElementById(`progress-${index}`).style.width = `${progress}%`;
    document.getElementById(`current-time-${index}`).textContent = formatTime(audio.currentTime);
}

function updateDuration(index) {
    const audio = audioPlayers[index]?.element;
    if (!audio) return;
    
    document.getElementById(`duration-${index}`).textContent = formatTime(audio.duration);
}

function seekAudio(event, index) {
    const audio = audioPlayers[index]?.element;
    if (!audio) return;
    
    const progressBar = event.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const percentage = x / rect.width;
    
    audio.currentTime = percentage * audio.duration;
}

function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// ==================== GESTION D'ERREURS ====================
function showError() {
    const container = document.getElementById('dualar-container');
    if (container) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px; color: var(--text-muted);">
                <p style="font-size: 3rem; margin-bottom: 20px;">⚠️</p>
                <p style="font-size: 1.2rem;">Veriler yüklenirken bir hata oluştu.</p>
                <p style="margin-top: 10px;">Lütfen sayfayı yenileyin.</p>
            </div>
        `;
    }
}

// ==================== RENDRE FONCTIONS GLOBALES ====================
window.toggleFazileti = toggleFazileti;
window.toggleAudio = toggleAudio;
window.seekAudio = seekAudio;
