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
- 2026-06-23 : veille hebdo — +1 feature (cc-destructive-cmd-guard), +2 news (Claude Code 2.1.183 blocage commandes destructives, Claude Code 2.1.181 /config key=value + Bun 1.4) → 17 features, 8 news.
- 2026-06-29 : veille hebdo — +4 features (cc-mcp-login-logout, cc-rewind, cc-sandbox-credentials, ai-claude-tag), +1 màj feature (cc-auto-mode : autoMode.classifyAllShell), +2 news (Claude Code semaine 26 v2.1.187–2.1.195, lancement Claude Tag dans Slack) → 21 features, 10 news.

## Mise en ligne
- Repo GitHub **public** : https://github.com/mrjiop96/claude-veille
- **GitHub Pages** actif (branche `master`, racine) → https://mrjiop96.github.io/claude-veille/
- **Le site en ligne se met à jour à chaque `git push`** (Pages rebuild auto ~1 min). Workflow : `/veille` réécrit `data.js` → commit → push → site à jour.
- Aucun secret dans le repo (vérifié avant passage en public).

## Prochaines étapes
- Synchro GitHub entre PC (clone/push/pull).
- Possibles : tri par date, export, dédup intelligente.
- Optionnel : ajouter un `favicon.ico` (404 bénin actuel).
