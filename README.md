# 🌟 Nom du projet : ClarityBot / AutoPilot eCom / FlowStruct


> Ce dépôt contient un site React simple conçu pour mettre en valeur une offre d'automatisation IA dédiée à un segment précis (freelances, e-commerce ou PME de services).


## 📦 Technologies utilisées


- React 18 (Vite ou CRA)
- Firebase Hosting (optionnel)
- Tailwind CSS (optionnel, pas activé par défaut)


## 🗂 Structure du projet


```
src/
├── App.js # Point d'entrée de l'app React
├── index.js # Initialisation ReactDOM
├── data/project.js # Contenu dynamique du projet (titres, textes, CTA)
├── components/ # Composants UI (Hero, Sections...)
└── pages/Home.js # Page principale
```


## 🚀 Installation locale


```bash
git clone https://github.com/votre-utilisateur/nom-du-projet.git
cd nom-du-projet
npm install
npm start
```


Puis ouvrez [http://localhost:3000](http://localhost:3000)


## ☁️ Déploiement Firebase Hosting


```bash
npm run build
firebase login
firebase init
firebase deploy
```


⚠️ Lors de `firebase init`, sélectionnez :
- `Hosting`
- dossier de build : `build/`
- répondre NON à *single-page app override* si déjà géré


## ✏️ Personnalisation


- Modifiez le contenu dans `src/data/project.js`
- Modifiez la police / couleurs directement dans les composants ou dans un fichier CSS global


## 📄 Licence


Projet libre pour usage personnel ou professionnel. Attribution appréciée mais non requise.


---


> Créé avec ❤️ pour l’expérimentation et le déploiement rapide d’offres IA.
