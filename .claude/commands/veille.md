---
description: Va chercher les nouveautés de Claude et met à jour le dashboard de veille
---

# /veille — Mise à jour de Claude Veille

Tu mets à jour la base de connaissances de **Claude Veille** (dashboard `index.html`).

## Étapes (dans l'ordre)

1. **Lire l'existant.** Lis `data.js` à la racine du projet pour connaître les `features` et `news` déjà enregistrées (note bien les `id` et les dates).

2. **Rechercher les nouveautés.** Lance plusieurs recherches web (WebSearch/WebFetch) sur les sources officielles, bornées aux 4 périmètres :
   - **Modèles & API** : `docs.claude.com`, modèles, prix, capacités API.
   - **Claude Code** : changelog/docs Claude Code (commandes, hooks, skills, MCP, sous-agents).
   - **Claude.ai** : `anthropic.com/news`, Projects/Artifacts/Design/connecteurs.
   - **Écosystème** : Agent SDK, intégrations, annonces Anthropic.
   Ne retiens que des infos **vérifiables sur une source officielle**. Pas d'invention.

3. **Diff.** Écarte ce qui est déjà dans `data.js`. Ne garde que le nouveau ou ce qui a changé.

4. **Mettre à jour `data.js` :**
   - Ajoute les nouvelles capacités durables comme `features` (`id` unique en kebab-case, `addedOn` = date du jour, `updatedOn` = date du jour, `category` parmi `models-api|claude-code|claude-ai|ecosystem`, `source` = URL officielle, `tags`).
   - Pour une capacité existante qui évolue : mets à jour son `summary` et son `updatedOn`.
   - Ajoute chaque annonce datée comme `news` **en tête** du tableau `news`.
   - Mets `lastUpdated` à la date du jour.
   - Garde le JS valide (`window.VEILLE_DATA = { ... };`).

5. **Valider.** Lance :
   `node -e "global.window={}; require('./data.js'); const d=window.VEILLE_DATA; const ids=d.categories.map(c=>c.id); d.features.forEach(f=>{if(!ids.includes(f.category))throw new Error('cat: '+f.category)}); console.log('OK',d.features.length,'features');"`

6. **Afficher le digest en français :** « Voici ce qui a changé depuis la dernière fois » + liste à puces des nouveautés (titre + 1 ligne). S'il n'y a rien de nouveau, le dire clairement.

7. **Proposer d'ouvrir** `index.html` dans le navigateur (Playwright) pour visualiser. Note : Playwright bloque `file://` — sers le dossier via `python -m http.server` puis ouvre `http://localhost:<port>/index.html`. L'utilisateur, lui, peut ouvrir `index.html` directement par double-clic.

8. **Mettre à jour** le Journal dans `CLAUDE.md` (date + résumé des ajouts).

## Règles
- Français pour l'UI et le digest.
- Jamais d'info non sourcée.
- Ne touche qu'à `data.js` (et `CLAUDE.md` pour le journal). Ne modifie pas `index.html`/CSS/JS.
