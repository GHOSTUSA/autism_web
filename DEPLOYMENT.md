# Configuration du Déploiement Automatique

Ce document explique comment configurer le déploiement automatique de l'application vers votre serveur.

## 📋 Prérequis

- Un serveur accessible via SSH
- Les droits d'écriture sur le dossier de destination du serveur
- Accès aux paramètres GitHub du repository (Settings > Secrets and variables > Actions)

## 🔑 Configuration des Secrets GitHub

Le workflow de déploiement nécessite la configuration des secrets suivants dans GitHub :

### 1. Accéder aux Secrets GitHub

1. Allez sur votre repository GitHub
2. Cliquez sur **Settings** (Paramètres)
3. Dans le menu de gauche, cliquez sur **Secrets and variables** > **Actions**
4. Cliquez sur **New repository secret** pour chaque secret

### 2. Secrets Requis

Créez les secrets suivants :

#### `SSH_PRIVATE_KEY`
La clé privée SSH pour se connecter au serveur.

**Comment générer une clé SSH :**
```bash
ssh-keygen -t ed25519 -C "github-deploy" -f ~/.ssh/github_deploy
```

Copiez le contenu de la clé privée :
```bash
cat ~/.ssh/github_deploy
```

Ajoutez la clé publique sur votre serveur :
```bash
cat ~/.ssh/github_deploy.pub >> ~/.ssh/authorized_keys
# Sur le serveur distant
```

**Valeur à copier dans le secret :** Le contenu complet du fichier de clé privée (incluant `-----BEGIN OPENSSH PRIVATE KEY-----` et `-----END OPENSSH PRIVATE KEY-----`)

#### `REMOTE_HOST`
L'adresse IP ou le nom de domaine de votre serveur.

**Exemple :**
```
example.com
```
ou
```
192.168.1.100
```

#### `REMOTE_USER`
Le nom d'utilisateur SSH pour se connecter au serveur.

**Exemple :**
```
deployer
```
ou
```
www-data
```

#### `REMOTE_PORT`
Le port SSH du serveur (par défaut 22).

**Exemple :**
```
22
```
ou si vous utilisez un port personnalisé :
```
2222
```

#### `REMOTE_TARGET`
Le chemin absolu du dossier de destination sur le serveur où les fichiers seront déployés.

**Exemple pour Nginx :**
```
/var/www/html/autism-web
```

**Exemple pour Apache :**
```
/var/www/autism-web
```

**Exemple pour un utilisateur :**
```
/home/deployer/www/autism-web
```

## 🚀 Déclenchement du Déploiement

Le déploiement se déclenche automatiquement à chaque push sur la branche `main`.

```bash
git add .
git commit -m "Mon changement"
git push origin main
```

## 📊 Suivi du Déploiement

1. Allez sur votre repository GitHub
2. Cliquez sur l'onglet **Actions**
3. Vous verrez l'exécution du workflow "Déploiement automatique"
4. Cliquez sur l'exécution pour voir les détails et les logs

## 🔧 Configuration Serveur

### Pour Nginx

Créez un fichier de configuration Nginx :

```nginx
server {
    listen 80;
    server_name votre-domaine.com;
    
    root /var/www/html/autism-web;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

Activez la configuration :
```bash
sudo ln -s /etc/nginx/sites-available/autism-web /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Pour Apache

Créez un fichier de configuration Apache :

```apache
<VirtualHost *:80>
    ServerName votre-domaine.com
    DocumentRoot /var/www/autism-web
    
    <Directory /var/www/autism-web>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
        
        # Pour Vue Router en mode history
        RewriteEngine On
        RewriteBase /
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
    </Directory>
</VirtualHost>
```

Activez les modules et la configuration :
```bash
sudo a2enmod rewrite
sudo a2ensite autism-web
sudo systemctl reload apache2
```

## 🛠️ Personnalisation

### Changer la Branche de Déploiement

Si vous voulez déployer depuis une autre branche que `main`, modifiez le fichier `.github/workflows/deploy.yml` :

```yaml
on:
  push:
    branches:
      - production  # Changez 'main' en 'production' ou autre
```

### Ajouter des Étapes Personnalisées

Vous pouvez ajouter des scripts avant ou après le déploiement en modifiant les sections `SCRIPT_BEFORE` et `SCRIPT_AFTER` dans le workflow.

## ❗ Dépannage

### Erreur de Connexion SSH

Vérifiez que :
- La clé privée SSH est correctement configurée dans les secrets
- La clé publique est ajoutée aux `authorized_keys` du serveur
- Le port SSH est correct
- Le pare-feu autorise les connexions SSH

### Erreur de Permissions

Assurez-vous que l'utilisateur SSH a les droits d'écriture sur le dossier de destination :

```bash
sudo chown -R deployer:deployer /var/www/html/autism-web
sudo chmod -R 755 /var/www/html/autism-web
```

### Les Fichiers ne se Mettent pas à Jour

Le workflow supprime et remplace le contenu du dossier de destination. Si les fichiers ne se mettent pas à jour :
1. Vérifiez les logs du workflow dans GitHub Actions
2. Assurez-vous que le build réussit
3. Vérifiez les permissions sur le serveur

## 📝 Notes de Sécurité

- Ne commitez **jamais** les clés privées dans le code
- Utilisez toujours les secrets GitHub pour les informations sensibles
- Limitez les permissions de l'utilisateur SSH au strict nécessaire
- Envisagez d'utiliser un utilisateur dédié pour le déploiement
- Configurez un pare-feu (UFW, iptables) pour limiter l'accès SSH

## 📚 Ressources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [SSH Deploy Action](https://github.com/easingthemes/ssh-deploy)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
