# Instructions de déploiement

## Build de production

Pour créer le build de production optimisé pour le sous-répertoire `/manuel-numerique/` :

```bash
npm run build
```

## Structure du build

Le build sera généré dans le dossier `dist/` avec la structure suivante :
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── ...
└── vite.svg
```

## Configuration du serveur web

### Apache (.htaccess)

Créez un fichier `.htaccess` dans le dossier `/manuel-numerique/` de votre serveur :

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /manuel-numerique/
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /manuel-numerique/index.html [L]
</IfModule>
```

### Nginx

Ajoutez cette configuration dans votre fichier de configuration Nginx :

```nginx
location /manuel-numerique {
    alias /chemin/vers/votre/dist;
    try_files $uri $uri/ /manuel-numerique/index.html;
}
```

## Déploiement

1. Exécutez `npm run build`
2. Copiez le contenu du dossier `dist/` vers `/manuel-numerique/` sur votre serveur
3. Configurez votre serveur web selon les instructions ci-dessus
4. L'application sera accessible à : `https://votredomaine.com/manuel-numerique/`

## Vérification

Après le déploiement, vérifiez que :
- La page d'accueil se charge correctement
- La navigation entre les sections fonctionne
- Les assets (CSS, JS, images) se chargent correctement
- Les routes directes (ex: `/manuel-numerique/prerequisites`) fonctionnent
