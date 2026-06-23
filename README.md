# Claude Veille 📡

Dashboard sombre, statique et hors-ligne, des capacités de Claude + flux de nouveautés.

## Lire
Double-clic sur `index.html` (fonctionne hors-ligne, aucune dépendance).

## Mettre à jour
Dans Claude Code, lance `/veille` : recherche web sur les sources officielles → met à jour `data.js` → affiche un digest. Recharge `index.html` pour voir le résultat.

## Structure
- `data.js` — source de vérité (`window.VEILLE_DATA`).
- `index.html` + `assets/` — la page.
- `.claude/commands/veille.md` — la commande de mise à jour.

## Synchroniser entre PC (GitHub)
- Récupérer sur un autre PC : `git clone <url-du-dépôt>`
- Cycle : `/veille` → `git add -A && git commit -m "maj veille" && git push` sur un PC, puis `git pull` sur l'autre.
