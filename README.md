# Autism Web

Application web Vue 3 avec TypeScript, Vue Router, Pinia et des outils de développement modernes.

## 🚀 Technologies

- **Vue 3** - Framework JavaScript progressif
- **TypeScript** - Typage statique pour JavaScript
- **Vite** - Outil de build rapide
- **Vue Router** - Routage côté client
- **Pinia** - Gestion d'état pour Vue 3
- **Vitest** - Framework de tests unitaires
- **Playwright** - Tests end-to-end
- **ESLint** - Linting du code
- **Prettier** - Formatage du code

## 📋 Prérequis

- Node.js 20.19.0+ ou 22.12.0+
- npm 10+

## 🛠️ Installation

Cloner le projet et installer les dépendances :

```bash
npm install
```

## 📝 Commandes de base

### Développement

Lancer le serveur de développement avec hot-reload :

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

### Production

Construire l'application pour la production :

```bash
npm run build
```

Prévisualiser la version de production :

```bash
npm run preview
```

### Tests

Lancer les tests unitaires :

```bash
npm run test:unit
```

Lancer les tests unitaires en mode watch :

```bash
npm run test:unit -- --watch
```

Installer les navigateurs pour les tests E2E (première fois uniquement) :

```bash
npx playwright install
```

Lancer les tests E2E :

```bash
npm run test:e2e
```

Lancer les tests E2E en mode debug :

```bash
npm run test:e2e -- --debug
```

### Qualité du code

Vérifier et corriger le code avec ESLint :

```bash
npm run lint
```

Formater le code avec Prettier :

```bash
npm run format
```

Vérifier les types TypeScript :

```bash
npm run type-check
```

## 🔧 Configuration IDE recommandée

- [VS Code](https://code.visualstudio.com/)
- [Extension Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (désactiver Vetur si installé)

## 🌐 Extensions navigateur recommandées

- [Vue.js DevTools](https://devtools.vuejs.org/) - Outils de développement pour Vue

## 🚢 Déploiement

Le projet est configuré pour un déploiement automatique via GitHub Actions. 

### 🚀 Configuration Rapide

Pour configurer le déploiement en 5 minutes, consultez le guide [QUICK_DEPLOY.md](./QUICK_DEPLOY.md).

### 📖 Documentation Complète

Pour des instructions détaillées et la configuration avancée, consultez [DEPLOYMENT.md](./DEPLOYMENT.md).

### Déploiement en 3 Étapes

1. Configurez les secrets GitHub requis (SSH_PRIVATE_KEY, REMOTE_HOST, REMOTE_USER, REMOTE_PORT, REMOTE_TARGET)
2. Poussez vos changements sur la branche `main`
3. Le déploiement se fait automatiquement !

## 📚 Documentation

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Vue Router](https://router.vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Guide de Déploiement](./DEPLOYMENT.md)

## 📄 Licence

Ce projet est sous licence privée.
