# 👋 À lire par Claude Code

Bonjour Claude ! Ta personne vient de récupérer ce dépôt **claude-veille** et aimerait que tu t'occupes de tout. Voici ta mission, étape par étape.

## C'est quoi ce projet ?
Un **dashboard statique** des nouveautés et capacités de Claude. HTML/CSS/JS pur, **zéro dépendance, zéro build, zéro serveur**. Ça fonctionne hors-ligne en ouvrant directement le fichier (`file://`).

- `data.js` → la **seule source de données** (`window.VEILLE_DATA`).
- `index.html` + `assets/` → la page.
- `.claude/commands/veille.md` → la commande `/veille` qui met à jour les données.

## Ce que tu dois faire

### 1. Ouvrir le dashboard (le « lancer »)
Il n'y a rien à compiler ni à installer. Ouvre simplement `index.html` dans le navigateur par défaut :

- **Windows** : `start index.html`
- **macOS** : `open index.html`
- **Linux** : `xdg-open index.html`

(ou indique-lui juste de double-cliquer sur `index.html`).

### 2. Mettre à jour la veille
Quand elle veut rafraîchir le contenu, lance la commande :

```
/veille
```

Elle fait une recherche web sur les sources officielles, met à jour `data.js`, puis affiche un digest. Il suffit ensuite de recharger `index.html`.

### 3. Récupérer les mises à jour de l'auteur
Ce dépôt est synchronisé via GitHub. Pour récupérer les dernières versions publiées par mrjiop96 :

```
git pull
```

## ⚠️ Contraintes à respecter (ne pas casser)
- **Pas de `fetch()` sur un `.json`** : bloqué en `file://`. Les données restent dans `data.js` chargé via `<script>`.
- **Aucune dépendance / CDN / build** : garder le projet 100 % autonome et hors-ligne.
- **Français partout** dans l'interface et les contenus.

## En résumé pour elle
1. `git pull` (pour être à jour)
2. Ouvrir `index.html`
3. `/veille` quand elle veut rafraîchir

C'est tout — bon courage ! 🚀
