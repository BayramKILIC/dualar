# 🤲 Sabah ve Akşam Zikirleri

Application web pour faciliter la lecture des invocations du matin et du soir.

## 📂 Structure du Projet

```
sabah-aksam-zikirleri/
├── index.html              # Page d'accueil (choix Sabah/Akşam)
├── liste.html              # Page affichant toutes les invocations
├── .htaccess              # Configuration serveur Apache
├── css/
│   └── styles.css         # Tous les styles
├── js/
│   └── app.js            # Logique JavaScript
├── data/
│   └── dualar.json       # Base de données (À REMPLIR)
└── audio/
    ├── sabah/
    │   ├── dua_01.mp3    # Fichiers audio sabah (À AJOUTER)
    │   ├── dua_02.mp3
    │   └── ... (jusqu'à dua_15.mp3)
    └── aksam/
        ├── dua_01.mp3    # Fichiers audio akşam (À AJOUTER)
        ├── dua_02.mp3
        └── ... (jusqu'à dua_15.mp3)
```

## ✅ Étapes pour Compléter le Projet

### 1. Remplir le fichier `data/dualar.json`

Ouvrez le fichier `data/dualar.json` et remplacez tous les `"BURAYA ... YAZIN"` par le contenu réel :

```json
{
  "id": 1,
  "baslik": "Ayetel Kürsi",
  "arapca": "اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ...",
  "turkce": "Allah, O'ndan başka ilah yoktur. Diridir, kayyumdur...",
  "fazileti": "Kim sabah akşam Ayetel Kürsi okursa...",
  "audio": "audio/sabah/dua_01.mp3"
}
```

**Conseils :**
- Utilisez un éditeur de texte (VS Code, Notepad++, Sublime Text)
- Faites attention aux guillemets et virgules
- Validez le JSON sur https://jsonlint.com/ après modification
- Pour ajouter plus de 15 invocations, copiez-collez un bloc complet et incrémentez l'ID

### 2. Ajouter les Fichiers Audio

Ajoutez vos fichiers MP3 dans les dossiers :
- `audio/sabah/dua_01.mp3` à `dua_15.mp3`
- `audio/aksam/dua_01.mp3` à `dua_15.mp3`

**Important :** Les noms de fichiers dans `dualar.json` doivent correspondre exactement aux noms réels.

### 3. Test Local

**Option A - Python :**
```bash
# Ouvrir un terminal dans le dossier du projet
python -m http.server 8000
# Ouvrir http://localhost:8000 dans le navigateur
```

**Option B - VS Code :**
- Installer l'extension "Live Server"
- Clic droit sur `index.html` → "Open with Live Server"

### 4. Déploiement sur Serveur

**Via FTP/SFTP :**
1. Uploader tous les fichiers sur votre serveur
2. Vérifier que `.htaccess` est bien présent
3. Tester l'URL : `https://ilimdersleri.com.tr/sabah-aksam-zikirleri/`

**Via Git (recommandé) :**
```bash
# Sur votre machine locale
git init
git add .
git commit -m "Initial commit"
git remote add origin [URL_DU_REPO]
git push -u origin main

# Sur le serveur (via SSH)
cd /var/www/html/ilimdersleri.com.tr/
git clone [URL_DU_REPO] sabah-aksam-zikirleri
```

## 🎨 Personnalisation

### Changer les Couleurs

Éditez `css/styles.css` ligne 2-30 (section `:root`) :

```css
:root {
    --primary-color: #10b981;      /* Couleur principale */
    --sabah-primary: #f59e0b;      /* Couleur Sabah */
    --aksam-primary: #6366f1;      /* Couleur Akşam */
}
```

### Ajouter Plus de 15 Invocations

Dans `data/dualar.json`, ajoutez simplement un nouveau bloc :

```json
    {
      "id": 16,
      "baslik": "NOUVEAU TITRE",
      "arapca": "NOUVEAU TEXTE ARABE",
      "turkce": "NOUVELLE TRADUCTION",
      "fazileti": "NOUVELLE FAZILETI",
      "audio": "audio/sabah/dua_16.mp3"
    }
```

⚠️ N'oubliez pas la virgule après l'accolade fermante (sauf pour le dernier élément) !

## 🔧 Fonctionnalités

- ✅ **2 sections** : Sabah Zikirleri / Akşam Zikirleri
- ✅ **Affichage complet** : Toutes les invocations sur une seule page
- ✅ **Texte arabe** : Grande police, bien lisible (police Amiri)
- ✅ **Traduction turque** : Pour chaque invocation
- ✅ **Fazileti** : Menu déroulant avec les vertus de chaque invocation
- ✅ **Lecteur audio** : Pour écouter la prononciation arabe
- ✅ **Thème clair/sombre** : Personnalisable
- ✅ **Taille de texte** : Ajustable (petit/moyen/grand)
- ✅ **Responsive** : Fonctionne sur mobile, tablette, desktop
- ✅ **Aucune dépendance** : Vanilla JavaScript, pas de framework

## 📱 Responsive

- **Desktop** : Affichage optimal avec sidebar
- **Tablette** : Layout adapté
- **Mobile** : Interface simplifiée, boutons plus grands

## 🌐 Navigateurs Supportés

- Chrome / Edge (dernières versions)
- Firefox (dernières versions)
- Safari (iOS 12+)
- Opera

## 🔒 Sécurité

- Force HTTPS via `.htaccess`
- Headers de sécurité configurés
- Pas de listing des répertoires
- Validation JSON côté client

## 📊 Performance

- **Cache 30 jours** : CSS, JS, MP3
- **Compression GZIP** : Textes compressés
- **Animations optimisées** : 60 FPS
- **Chargement progressif** : Audio en `preload="metadata"`

## 🐛 Dépannage

### Les invocations ne s'affichent pas
- Vérifiez que `dualar.json` est valide (https://jsonlint.com/)
- Ouvrez la console du navigateur (F12) pour voir les erreurs

### L'audio ne fonctionne pas
- Vérifiez que les fichiers MP3 existent dans `audio/sabah/` et `audio/aksam/`
- Vérifiez les chemins dans `dualar.json`
- Testez sur HTTPS (requis pour l'autoplay sur certains navigateurs)

### Le style ne s'applique pas
- Videz le cache du navigateur (Ctrl+F5)
- Vérifiez que `css/styles.css` est bien uploadé

## 📝 Licence

Ce projet est libre d'utilisation pour des fins éducatives et religieuses.

## 🤝 Contribution

Pour signaler un bug ou proposer une amélioration, contactez l'administrateur du site.

---

**Fait avec ❤️ pour faciliter l'apprentissage des zikirleri**
