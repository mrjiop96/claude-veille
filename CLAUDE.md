# CLAUDE.md — Claude Veille

Dashboard statique de veille sur les nouveautés de Claude. HTML/CSS/JS vanilla, zéro dépendance, fonctionne en `file://`.

## Architecture
- `data.js` : `window.VEILLE_DATA` = { lastUpdated, categories, features, news }. **Seule source de données.**
- `index.html` charge `data.js` PUIS `assets/app.js` (ordre important).
- `assets/app.js` : rendu cartes/frise, recherche, filtres, badge NOUVEAU (< 30 j).
- `.claude/commands/veille.md` : `/veille` met à jour `data.js` via recherche web.

## Contraintes
- Pas de `fetch(data.json)` (bloqué en file://) → données dans `data.js` via `<script>`.
- Aucune dépendance / CDN / build.
- Français partout.

## Journal
- 2026-06-23 : genèse — design, scaffold, dashboard sombre, seed data (16 features + 6 nouveautés réelles sourcées), commande /veille, vérif Playwright (filtres/recherche/toggle OK).
- 2026-06-23 : reconstruction après suppression accidentelle des copies disque ; contenu restauré à l'identique depuis la session.

## Prochaines étapes
- Synchro GitHub entre PC (clone/push/pull).
- Possibles : tri par date, export, dédup intelligente.
