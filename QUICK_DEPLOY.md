# Configuration Rapide du Déploiement

## ⚡ Guide de Démarrage Rapide

Suivez ces étapes pour configurer le déploiement automatique en 5 minutes :

### 1️⃣ Générer une Clé SSH (sur votre ordinateur)

```bash
ssh-keygen -t ed25519 -C "github-deploy" -f ~/.ssh/github_deploy
```

### 2️⃣ Copier la Clé Publique sur le Serveur

```bash
ssh-copy-id -i ~/.ssh/github_deploy.pub votre-utilisateur@votre-serveur.com
```

OU manuellement :
```bash
cat ~/.ssh/github_deploy.pub
# Copiez le résultat, puis sur le serveur :
echo "COLLER_LA_CLE_ICI" >> ~/.ssh/authorized_keys
```

### 3️⃣ Configurer les Secrets GitHub

Allez sur : `https://github.com/GHOSTUSA/autism_web/settings/secrets/actions`

Créez ces 5 secrets :

| Secret | Exemple de Valeur | Comment l'obtenir |
|--------|------------------|-------------------|
| `SSH_PRIVATE_KEY` | `-----BEGIN OPENSSH PRIVATE KEY-----...` | `cat ~/.ssh/github_deploy` |
| `REMOTE_HOST` | `example.com` ou `192.168.1.100` | Adresse de votre serveur |
| `REMOTE_USER` | `deployer` ou `www-data` | Utilisateur SSH |
| `REMOTE_PORT` | `22` | Port SSH (généralement 22) |
| `REMOTE_TARGET` | `/var/www/html/autism-web` | Dossier de destination |

### 4️⃣ Créer le Dossier de Destination (sur le serveur)

```bash
sudo mkdir -p /var/www/html/autism-web
sudo chown -R $USER:$USER /var/www/html/autism-web
sudo chmod -R 755 /var/www/html/autism-web
```

### 5️⃣ Pousser sur GitHub

```bash
git push origin main
```

✅ **C'est tout !** Le déploiement se fera automatiquement à chaque push.

---

## 📱 Vérifier le Déploiement

1. Allez sur : `https://github.com/GHOSTUSA/autism_web/actions`
2. Vous verrez le workflow "Déploiement automatique" en cours
3. Cliquez dessus pour voir les logs en temps réel

---

## 🌐 Configuration du Serveur Web

### Nginx (Recommandé)

```bash
sudo nano /etc/nginx/sites-available/autism-web
```

Collez :
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

Activez :
```bash
sudo ln -s /etc/nginx/sites-available/autism-web /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Apache

```bash
sudo nano /etc/apache2/sites-available/autism-web.conf
```

Collez :
```apache
<VirtualHost *:80>
    ServerName votre-domaine.com
    DocumentRoot /var/www/html/autism-web
    
    <Directory /var/www/html/autism-web>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
        
        RewriteEngine On
        RewriteBase /
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
    </Directory>
</VirtualHost>
```

Activez :
```bash
sudo a2enmod rewrite
sudo a2ensite autism-web
sudo systemctl reload apache2
```

---

## 🔥 Commandes Utiles

### Tester la Connexion SSH
```bash
ssh -i ~/.ssh/github_deploy votre-utilisateur@votre-serveur.com
```

### Voir les Logs du Serveur Web
```bash
# Nginx
sudo tail -f /var/log/nginx/error.log

# Apache
sudo tail -f /var/log/apache2/error.log
```

### Redéployer Manuellement
```bash
git commit --allow-empty -m "Redéploiement"
git push origin main
```

---

## ❓ Problèmes Courants

### "Permission denied (publickey)"
- Vérifiez que la clé publique est dans `~/.ssh/authorized_keys` sur le serveur
- Vérifiez les permissions : `chmod 700 ~/.ssh && chmod 600 ~/.ssh/authorized_keys`

### "Connection refused"
- Vérifiez que SSH est actif : `sudo systemctl status ssh`
- Vérifiez le port SSH : `sudo grep Port /etc/ssh/sshd_config`

### Les fichiers ne s'affichent pas
- Vérifiez les permissions : `ls -la /var/www/html/autism-web`
- Vérifiez la configuration Nginx/Apache
- Consultez les logs du serveur web

---

## 📚 Documentation Complète

Pour plus de détails, consultez [DEPLOYMENT.md](./DEPLOYMENT.md)
