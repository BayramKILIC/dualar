# 📝 Guide Pratique : Comment Remplir dualar.json

## 🎯 Objectif
Ce guide t'aide à remplir correctement le fichier `data/dualar.json` avec tes invocations.

---

## 📋 Format de Base

Chaque invocation suit cette structure :

```json
{
  "id": 1,
  "baslik": "Titre de l'invocation",
  "arapca": "النص العربي",
  "turkce": "Traduction en turc",
  "fazileti": "Les vertus de cette invocation",
  "audio": "audio/sabah/dua_01.mp3"
}
```

---

## ✅ Règles Importantes

### 1. Les Guillemets
- **Toujours** utiliser des guillemets doubles `"` (pas simples `'`)
- Exemple correct : `"baslik": "Ayetel Kürsi"`
- Exemple incorrect : `'baslik': 'Ayetel Kürsi'`

### 2. Les Virgules
- Mettre une **virgule** `,` après chaque accolade fermante `}`
- **SAUF** pour la dernière invocation de la liste
- Exemple :
```json
{
  "id": 1,
  "baslik": "..."
},    ← VIRGULE ICI
{
  "id": 2,
  "baslik": "..."
},    ← VIRGULE ICI
{
  "id": 3,
  "baslik": "..."
}     ← PAS DE VIRGULE (dernier élément)
```

### 3. Les Caractères Spéciaux
- Pour les guillemets dans le texte, utilise `\"`
- Exemple : `"Il a dit \"Bonjour\""`
- Pour les retours à ligne, utilise `\n`
- Exemple : `"Première ligne\nDeuxième ligne"`

---

## 📝 Exemple Complet

```json
{
  "sabah": [
    {
      "id": 1,
      "baslik": "Ayetel Kürsi",
      "arapca": "اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ",
      "turkce": "Allah, O'ndan başka ilah yoktur. Diridir, kayyumdur. O'nu ne uyuklama tutar ne de uyku.",
      "fazileti": "Kim sabah akşam Ayetel Kürsi okursa, o kişiye hiçbir şey zarar veremez.",
      "audio": "audio/sabah/dua_01.mp3"
    },
    {
      "id": 2,
      "baslik": "İhlas Suresi",
      "arapca": "قُلْ هُوَ اللَّهُ أَحَدٌ. اللَّهُ الصَّمَدُ",
      "turkce": "De ki: O, Allah'tır, bir tektir. Allah Samed'dir (her şey O'na muhtaçtır).",
      "fazileti": "Bu sure Kur'an'ın üçte birine denktir.",
      "audio": "audio/sabah/dua_02.mp3"
    }
  ],
  "aksam": [
    {
      "id": 1,
      "baslik": "Ayetel Kürsi",
      "arapca": "اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ",
      "turkce": "Allah, O'ndan başka ilah yoktur. Diridir, kayyumdur.",
      "fazileti": "Kim akşam Ayetel Kürsi okursa, sabaha kadar korunur.",
      "audio": "audio/aksam/dua_01.mp3"
    }
  ]
}
```

---

## 🔧 Étapes pour Remplir

### Étape 1 : Ouvrir le fichier
- Ouvre `data/dualar.json` avec un éditeur de texte
- VS Code (recommandé), Notepad++, Sublime Text, etc.

### Étape 2 : Remplacer les placeholders
Remplace chaque `"BURAYA ... YAZIN"` :

**Avant :**
```json
{
  "id": 1,
  "baslik": "BURAYA BAŞLIK YAZIN",
  "arapca": "BURAYA ARAPÇA METİN YAZIN",
  "turkce": "BURAYA TÜRKÇE ÇEVIRI YAZIN",
  "fazileti": "BURAYA FAZİLETİ YAZIN",
  "audio": "audio/sabah/dua_01.mp3"
}
```

**Après :**
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

### Étape 3 : Vérifier la syntaxe
- Va sur https://jsonlint.com/
- Colle ton JSON complet
- Clique sur "Validate JSON"
- S'il y a des erreurs, elles seront indiquées

### Étape 4 : Sauvegarder
- Sauvegarde le fichier (Ctrl+S)
- Recharge la page web pour voir les changements

---

## 🎯 Cas Pratiques

### Cas 1 : Texte avec guillemets
```json
"turkce": "Allah a dit: \"Je suis proche\"",
```

### Cas 2 : Texte long sur plusieurs lignes
Tu peux écrire sur une seule ligne (recommandé) :
```json
"turkce": "Ceci est un texte très long qui continue et continue encore et encore.",
```

Ou utiliser `\n` pour les retours à ligne :
```json
"turkce": "Première ligne\nDeuxième ligne\nTroisième ligne",
```

### Cas 3 : Ajouter une 16ème invocation

1. Va à la fin de la liste "sabah" ou "aksam"
2. Ajoute une virgule après la dernière accolade `},`
3. Copie-colle ce bloc :

```json
    {
      "id": 16,
      "baslik": "TON TITRE",
      "arapca": "TON TEXTE ARABE",
      "turkce": "TA TRADUCTION",
      "fazileti": "LES VERTUS",
      "audio": "audio/sabah/dua_16.mp3"
    }
```

4. N'oublie PAS d'ajouter le fichier `audio/sabah/dua_16.mp3` !

---

## ⚠️ Erreurs Courantes

### Erreur 1 : Virgule manquante
```json
{
  "id": 1,
  "baslik": "..."
}   ← MANQUE UNE VIRGULE ICI
{
  "id": 2,
```
**Solution :** Ajouter `,` après `}`

### Erreur 2 : Virgule en trop
```json
{
  "id": 15,
  "baslik": "..."
},   ← VIRGULE EN TROP (dernier élément)
  ]
```
**Solution :** Supprimer la virgule

### Erreur 3 : Guillemets manquants
```json
"baslik": Ayetel Kürsi   ← MANQUE DES GUILLEMETS
```
**Solution :** `"baslik": "Ayetel Kürsi"`

### Erreur 4 : Mauvais chemin audio
```json
"audio": "dua_01.mp3"   ← CHEMIN INCOMPLET
```
**Solution :** `"audio": "audio/sabah/dua_01.mp3"`

---

## 🧪 Tester ton JSON

### En ligne
1. Copie tout le contenu de `dualar.json`
2. Va sur https://jsonlint.com/
3. Colle et clique "Validate JSON"
4. ✅ = Bon, ❌ = Erreur (le site indique où)

### Dans VS Code
- VS Code colore en rouge les erreurs automatiquement
- Installe l'extension "JSON" pour plus de fonctionnalités

---

## 💡 Conseils Pro

1. **Travaille par étapes** : Remplis 1-2 invocations, teste, puis continue
2. **Sauvegarde souvent** : Ctrl+S après chaque modification
3. **Fais des copies** : Duplique `dualar.json` en `dualar_backup.json` avant de modifier
4. **Utilise un bon éditeur** : VS Code est gratuit et excellent
5. **Teste dans le navigateur** : Ouvre la console (F12) pour voir les erreurs

---

## 📞 Besoin d'Aide ?

Si tu rencontres un problème :
1. Vérifie les guillemets `"` et virgules `,`
2. Valide sur https://jsonlint.com/
3. Regarde la console du navigateur (F12)
4. Compare avec l'exemple complet ci-dessus

---

**Bon courage ! 🚀**
