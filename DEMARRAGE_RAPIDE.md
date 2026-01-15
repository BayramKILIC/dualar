# 🚀 DÉMARRAGE RAPIDE

## ✅ Fichiers Prêts

Tous les fichiers ont été créés ! Voici ce que tu as :

```
📁 Projet complet "Sabah ve Akşam Zikirleri"
├── 📄 index.html          ✅ Page d'accueil
├── 📄 liste.html          ✅ Page des invocations
├── 📄 .htaccess           ✅ Configuration serveur
├── 📁 css/
│   └── 📄 styles.css      ✅ Tous les styles
├── 📁 js/
│   └── 📄 app.js          ✅ Toute la logique
├── 📁 data/
│   └── 📄 dualar.json     ⚠️ À REMPLIR
└── 📁 audio/
    ├── 📁 sabah/          ⚠️ À REMPLIR (MP3)
    └── 📁 aksam/          ⚠️ À REMPLIR (MP3)
```

---

## 📝 3 ÉTAPES POUR FINALISER

### ÉTAPE 1️⃣ : Remplir dualar.json

Ouvre `data/dualar.json` et remplace tous les `"BURAYA ... YAZIN"` par ton contenu.

👉 **Lis le fichier `GUIDE_REMPLISSAGE.md` pour l'aide détaillée !**

Exemple :
```json
{
  "id": 1,
  "baslik": "Ayetel Kürsi",
  "arapca": "اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ",
  "turkce": "Allah, O'ndan başka ilah yoktur",
  "fazileti": "Kim okursa korunur",
  "audio": "audio/sabah/dua_01.mp3"
}
```

### ÉTAPE 2️⃣ : Ajouter les Fichiers Audio

Ajoute tes fichiers MP3 dans :
- `audio/sabah/dua_01.mp3` à `dua_15.mp3`
- `audio/aksam/dua_01.mp3` à `dua_15.mp3`

⚠️ Les noms doivent correspondre exactement à ceux dans `dualar.json`

### ÉTAPE 3️⃣ : Tester

**Test local :**
```bash
# Ouvre un terminal dans le dossier
python -m http.server 8000
# Puis ouvre http://localhost:8000
```

**Ou avec VS Code :**
- Installe l'extension "Live Server"
- Clic droit sur `index.html` → "Open with Live Server"

---

## 🌐 DÉPLOIEMENT

### Option A : Via FTP
1. Upload tous les fichiers sur ton serveur
2. URL finale : `https://ilimdersleri.com.tr/sabah-aksam-zikirleri/`

### Option B : Via Git (Recommandé)
```bash
# Sur ta machine
git init
git add .
git commit -m "Initial commit - Sabah Akşam Zikirleri"
git push

# Sur ton serveur (via SSH)
cd /var/www/html/ilimdersleri.com.tr/
git clone [URL] sabah-aksam-zikirleri
```

---

## ✨ FONCTIONNALITÉS

✅ **Page d'accueil** avec 2 cartes (Sabah/Akşam)
✅ **Affichage complet** de toutes les invocations
✅ **Texte arabe** grande police (Amiri)
✅ **Traduction turque** pour chaque dua
✅ **Fazileti déroulant** avec les vertus
✅ **Lecteur audio** avec barre de progression
✅ **Thème clair/sombre** personnalisable
✅ **Taille de texte** ajustable
✅ **100% Responsive** (mobile, tablette, desktop)
✅ **Aucune dépendance** (Vanilla JS)

---

## 🎨 PERSONNALISATION

### Changer les couleurs

Édite `css/styles.css` lignes 2-30 :

```css
:root {
    --primary-color: #10b981;      /* Vert principal */
    --sabah-primary: #f59e0b;      /* Orange Sabah */
    --aksam-primary: #6366f1;      /* Bleu Akşam */
}
```

### Ajouter plus de 15 invocations

Dans `data/dualar.json`, copie-colle simplement un nouveau bloc avec un ID incrémenté (16, 17, etc.)

---

## 📚 DOCUMENTATION

- **README.md** : Documentation complète
- **GUIDE_REMPLISSAGE.md** : Guide détaillé pour remplir le JSON
- Ce fichier : Démarrage rapide

---

## 🔧 VÉRIFICATIONS

Avant de déployer, vérifie :

- [ ] `dualar.json` est rempli (pas de "BURAYA YAZIN")
- [ ] Tous les fichiers MP3 sont ajoutés
- [ ] Les chemins audio correspondent dans le JSON
- [ ] Le JSON est valide (teste sur https://jsonlint.com/)
- [ ] Test en local fonctionne
- [ ] `.htaccess` est uploadé

---

## 🆘 AIDE

**Problème avec le JSON ?**
→ Consulte `GUIDE_REMPLISSAGE.md`

**Les invocations ne s'affichent pas ?**
→ Ouvre la console (F12) dans le navigateur

**L'audio ne marche pas ?**
→ Vérifie les chemins dans `dualar.json`

---

## 🎯 RÉSUMÉ EN 30 SECONDES

1. Remplis `data/dualar.json` (remplace "BURAYA YAZIN")
2. Ajoute les MP3 dans `audio/sabah/` et `audio/aksam/`
3. Teste en local avec Python ou Live Server
4. Upload sur ton serveur
5. C'est prêt ! 🎉

---

**Bonne chance ! 🚀**

Si tu as besoin d'aide, consulte les fichiers de documentation ou contacte-moi.
