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
- 2026-07-01 : veille — +1 feature (models-sonnet-5), màj models-current (famille : + Sonnet 5, Sonnet 4.6/Opus 4.7 en legacy), +3 news (Fable 5 de retour 01/07, lancement Sonnet 5 30/06, Claude Code v2.1.196–197 avec Sonnet 5 par défaut) → 22 features, 13 news.
- 2026-07-01 : veille auto — +1 feature (ai-claude-science), +1 news (lancement Claude Science bêta pour chercheurs, 60+ bases scientifiques, multi-agents) → 23 features, 14 news.
- 2026-07-02 : veille auto — +1 feature (cc-chrome : Claude in Chrome GA), +1 news (Claude Code v2.1.198 : Chrome GA, notifications agents bg, auto-PR draft, héritage modèle/extended-thinking, résilience réseau) → 24 features, 15 news.
- 2026-07-03 : veille auto — +1 news (Claude Code v2.1.199 : skills empilées ×5, erreurs SSL actionnables, réponses partielles préservées, résilience 429 transitoires, nombreux correctifs), màj feature cc-skills (invocations empilées) → 24 features, 16 news.
- 2026-07-04 : veille auto — +1 news (Claude Code v2.1.200–v2.1.201 : permission mode par défaut → Manuel, AskUserQuestion sans auto-continuation, stabilité daemon background, hotfix rôle système Sonnet 5) → 24 features, 17 news.
- 2026-07-06 : veille auto — +1 feature (cc-apps-gateway : passerelle enterprise auto-hébergée pour Bedrock/GCP/Foundry avec SSO OIDC, RBAC, limites de dépense, télémétrie OTLP, disponible depuis v2.1.195), +1 news (lancement Claude apps gateway, 29 juin) → 25 features, 18 news.
- 2026-07-06 : veille auto (2e passe) — +1 news (Fable 5 safeguards cybersécurité : classifieur 4 catégories + cadre CJS 0-4 avec Amazon/Microsoft/Google/Glasswing, 2 juil.) → 25 features, 19 news.
- 2026-07-07 : veille auto — +2 news (Fable 5 fin inclusion abonnement/passage crédits d'usage au 7 juil., Claude Code v2.1.202 : workflow size config, OTel workflow attrs, /review passe unique, 15 correctifs), màj feature models-current (Fable 5 nécessite crédits d'usage) → 25 features, 21 news.
- 2026-07-08 : veille auto — +2 features (ai-cowork : Claude Cowork extension web/mobile + M365, ai-claude-gov : Claude for Government bêta FedRAMP High), +2 news (Cowork web/mobile 7 juil., Claude for Government 7 juil.) → 27 features, 23 news.
- 2026-07-09 : veille auto — +1 feature (cc-doctor : /doctor diagnostic & réparation auto depuis v2.1.205), +1 news (Claude Code v2.1.203–v2.1.205 : alerte expiration login, badge ⏸ mode Manuel, MCP roots/list, /doctor, auto mode anti-tampering transcripts, streaming downloads, vue agents améliorée), màj feature models-current (Opus 4.1 déprécié → retraite 5 août 2026) → 28 features, 24 news.
- 2026-07-10 : veille auto — +1 feature (ai-reflect : Reflect with Claude bêta, dashboard usage dans Paramètres), màj feature cc-doctor (check CLAUDE.md trimming v2.1.206), +3 news (Claude Code v2.1.206 : /doctor CLAUDE.md trimming, /cd suggestions, /commit-push-pr gateway, vue agents largeur complète, 20+ correctifs ; lancement Reflect with Claude bêta 9 juil. ; Ben Bernanke rejoint le LTBT d'Anthropic 9 juil.) → 29 features, 27 news.
- 2026-07-11 : veille auto — màj feature cc-auto-mode (Auto mode GA sans opt-in sur Bedrock/Vertex/Foundry depuis v2.1.207), +1 news (Claude Code v2.1.207 : Auto mode GA, Bedrock/Vertex défaut Opus 4.8, correctif sécurité injection shell hooks plugins, /doctor launchers externes, nombreux correctifs stabilité/streaming) → 29 features, 28 news.
- 2026-07-12 : veille auto — +1 feature (cc-desktop-browser : navigateur intégré au Desktop depuis v2.1.202, semaine 28), màj feature models-current (date fin inclusion Fable 5 corrigée : 12 juil. au lieu de 7 juil., contexte Haiku 200k), +1 news (Fable 5 fin définitive inclusion abonnement 12 juil. 23h59 PT, accès via crédits uniquement) → 30 features, 29 news.
- 2026-07-13 : veille auto — +2 features (cc-desktop-linux : Desktop Linux bêta Ubuntu/Debian via apt ; cc-radio : /radio ouvre Claude FM lofi radio), màj features (cc-subagents : sous-agents en arrière-plan par défaut depuis v2.1.198 ; cc-artifacts : GA inclus Pro/Max depuis semaine 27), +2 news (Claude Desktop Linux bêta 1 juil. ; Artifacts GA Pro/Max 1 juil.) → 32 features, 31 news.
- 2026-07-14 : veille auto — +1 news (Claude Code v2.1.208 : mode lecteur d'écran, vimInsertModeRemaps, CLAUDE_CODE_PROCESS_WRAPPER, clic souris plein écran, nombreux correctifs stabilité/streaming) → 32 features, 32 news.
- 2026-07-15 : veille auto — +1 news (Claude Code v2.1.209–v2.1.210 : correctif dialogues mode agents, compteur temps écoulé, avertissement règles Write/NotebookEdit/Glob, durcissement Agent anti-injection prompt, mode auto classifier → Sonnet 5, 25+ correctifs), màj feature cc-auto-mode (classifier Sonnet 5 sessions externes) → 32 features, 33 news.
- 2026-07-16 : veille auto — +2 features (ai-claude-teachers : Claude for Teachers accès gratuit K-12 US, standards alignés, intégrations éducatives, FERPA ; eco-claude-corps : fellowship $150M Claude Corps, 1 000 fellows, associations US), +3 news (Claude Code v2.1.211 : 30+ correctifs sécurité/reporting/caching, 16 juil. ; lancement Claude for Teachers 14 juil. ; lancement Claude Corps 11 juin) → 34 features, 36 news.
- 2026-07-17 : veille auto — +1 news (Claude Code v2.1.212 : /subtask délégation in-session, /fork → session fond, auto-mode reset, limites WebSearch/sous-agents, MCP auto-bg >2 min, /resume picker, correctifs sécurité/UI), màj feature cc-subagents (/subtask et /fork depuis v2.1.212) → 34 features, 37 news.
- 2026-07-18 : veille auto — +1 news (Claude Code v2.1.214 : outil EndConversation anti-jailbreak, correctifs sécurité permissions dir/** / PowerShell / Bash / docker, OTel uuid+request_id, heartbeat outils longs, correctifs proxy Windows), màj feature cc-artifacts (connecteurs MCP en direct, liens partage public, rôles éditeur Team/Enterprise, artifacts depuis Claude Tag) → 34 features, 38 news.

## Mise en ligne
- Repo GitHub **public** : https://github.com/mrjiop96/claude-veille
- **GitHub Pages** actif (branche `master`, racine) → https://mrjiop96.github.io/claude-veille/
- **Le site en ligne se met à jour à chaque `git push`** (Pages rebuild auto ~1 min). Workflow : `/veille` réécrit `data.js` → commit → push → site à jour.
- **Veille automatique** : routine cloud quotidienne (8h04 Paris / `0 6 * * *` UTC) `trig_013TFiqanwfbv7aNoPCtKzT5` exécute `/veille` dans le cloud et push (ne commite que s'il y a du nouveau). Gestion : https://claude.ai/code/routines/trig_013TFiqanwfbv7aNoPCtKzT5
- Aucun secret dans le repo (vérifié avant passage en public).

## Prochaines étapes
- Synchro GitHub entre PC (clone/push/pull).
- Possibles : tri par date, export, dédup intelligente.
- Optionnel : ajouter un `favicon.ico` (404 bénin actuel).
