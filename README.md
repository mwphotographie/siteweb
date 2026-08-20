# Argentique — site photographie (React + Vite)

Site vitrine 2 pages pour un photographe : **Présentation** (`/`) et **À propos** (`/a-propos`), construit avec React, React Router et Vite.

## Lancer en local

```bash
npm install
npm run dev
```
Puis ouvrir http://localhost:5173

## Structure

```
src/
  components/   Nav, Footer, ExifCaption
  pages/        Home.jsx (Présentation), About.jsx (À propos)
  styles.css    tous les styles (design tokens en haut du fichier)
```

Les photos utilisent des images de démonstration (picsum.photos) — remplacez les URLs dans `src/pages/Home.jsx` et `src/pages/About.jsx` par vos propres photos (dans `public/` ou une URL externe).

## Déployer sur GitHub puis Vercel

### 1. Pousser le code sur GitHub

Depuis ce dossier :

```bash
git init
git add .
git commit -m "Site photographie initial"
git branch -M main
git remote add origin https://github.com/<votre-utilisateur>/<votre-repo>.git
git push -u origin main
```

Si vous n'avez pas encore de dépôt : créez-en un vide sur https://github.com/new (sans README/licence, pour éviter les conflits), puis copiez l'URL qu'il vous donne dans la commande `git remote add` ci-dessus.

### 2. Déployer sur Vercel

Option la plus simple (interface web) :
1. Aller sur https://vercel.com/new
2. Importer le dépôt GitHub que vous venez de créer
3. Vercel détecte automatiquement **Vite** — les réglages par défaut (`npm run build`, dossier de sortie `dist`) conviennent, ne rien changer
4. Cliquer sur **Deploy**

Option en ligne de commande :

```bash
npm i -g vercel
vercel
```
Suivre les instructions (connexion, choix du projet), puis `vercel --prod` pour la mise en production.

À chaque `git push` sur `main`, Vercel redéploiera automatiquement le site.
