window.VEILLE_DATA = {
  lastUpdated: "2026-07-04",
  categories: [
    { id: "models-api",  label: "Modèles & API" },
    { id: "claude-code", label: "Claude Code" },
    { id: "claude-ai",   label: "Claude.ai" },
    { id: "ecosystem",   label: "Écosystème" }
  ],
  features: [
    {
      id: "ai-claude-science",
      category: "claude-ai",
      title: "Claude Science",
      summary: "Application IA (claude.com/science, bêta macOS et Linux) pour chercheurs : intègre 60+ bases de données scientifiques (génomique, protéomique, biochimie, biologie structurale, chémoinformatique), système multi-agents avec agent coordinateur, sous-agents spécialistes et agent vérificateur des citations/calculs. Chaque figure produit le code et l'environnement exacts pour une reproductibilité complète. Disponible pour Pro, Max, Team et Enterprise.",
      addedOn: "2026-07-01",
      updatedOn: "2026-07-01",
      source: "https://www.anthropic.com/news/claude-science-ai-workbench",
      tags: ["web", "science", "recherche", "multiagent"]
    },
    {
      id: "models-current",
      category: "models-api",
      title: "Famille de modèles Claude actuelle",
      summary: "Fable 5 (claude-fable-5, le plus capable, 1M tokens), Opus 4.8 (claude-opus-4-8), Sonnet 5 (claude-sonnet-5, 1M tokens), Haiku 4.5 (claude-haiku-4-5-20251001). Sonnet 4.6 et Opus 4.7/4.6 passent en legacy.",
      addedOn: "2026-06-23",
      updatedOn: "2026-07-01",
      source: "https://docs.claude.com/en/docs/about-claude/models",
      tags: ["modèles", "ids"]
    },
    {
      id: "models-sonnet-5",
      category: "models-api",
      title: "Claude Sonnet 5",
      summary: "Nouveau modèle (claude-sonnet-5) : le Sonnet le plus agentique à ce jour, performance proche d'Opus 4.8 à moindre coût. Contexte 1M tokens, sortie 128k. Tarif de lancement 2 $ / 10 $ par Mtok jusqu'au 31 août 2026 (puis 3 $ / 15 $).",
      addedOn: "2026-07-01",
      updatedOn: "2026-07-01",
      source: "https://www.anthropic.com/news/claude-sonnet-5",
      tags: ["modèles", "sonnet", "agents"]
    },
    {
      id: "prompt-caching",
      category: "models-api",
      title: "Prompt caching",
      summary: "Met en cache des préfixes de prompt réutilisés pour réduire coût et latence.",
      addedOn: "2026-06-23",
      updatedOn: "2026-06-23",
      source: "https://docs.claude.com/en/docs/build-with-claude/prompt-caching",
      tags: ["api", "coût", "latence"]
    },
    {
      id: "tool-use",
      category: "models-api",
      title: "Tool use (function calling)",
      summary: "Le modèle appelle des outils/fonctions définis par le développeur, avec sorties structurées.",
      addedOn: "2026-06-23",
      updatedOn: "2026-06-23",
      source: "https://docs.claude.com/en/docs/build-with-claude/tool-use",
      tags: ["api", "agents"]
    },
    {
      id: "cc-skills",
      category: "claude-code",
      title: "Skills",
      summary: "Modules de compétences invocables via le slash, qui chargent des instructions spécialisées. Depuis v2.1.199, les invocations peuvent être empilées (`/skill-a /skill-b do XYZ`) jusqu'à 5 skills simultanément.",
      addedOn: "2026-06-23",
      updatedOn: "2026-07-03",
      source: "https://docs.claude.com/en/docs/claude-code",
      tags: ["cli", "skills"]
    },
    {
      id: "cc-hooks",
      category: "claude-code",
      title: "Hooks",
      summary: "Scripts déclenchés automatiquement par le harness sur des événements (Stop, PreToolUse…).",
      addedOn: "2026-06-23",
      updatedOn: "2026-06-23",
      source: "https://docs.claude.com/en/docs/claude-code/hooks",
      tags: ["cli", "automatisation"]
    },
    {
      id: "cc-mcp",
      category: "claude-code",
      title: "MCP (Model Context Protocol)",
      summary: "Connexion de serveurs d'outils externes (Playwright, Context7…) à Claude Code.",
      addedOn: "2026-06-23",
      updatedOn: "2026-06-23",
      source: "https://docs.claude.com/en/docs/claude-code/mcp",
      tags: ["cli", "mcp", "intégrations"]
    },
    {
      id: "cc-subagents",
      category: "claude-code",
      title: "Sous-agents",
      summary: "Délégation de tâches à des agents spécialisés (Explore, Plan, general-purpose…).",
      addedOn: "2026-06-23",
      updatedOn: "2026-06-23",
      source: "https://docs.claude.com/en/docs/claude-code/sub-agents",
      tags: ["cli", "agents"]
    },
    {
      id: "cc-computer-use",
      category: "claude-code",
      title: "Computer use",
      summary: "Claude peut ouvrir des fichiers, lancer des outils de dev, pointer/cliquer et naviguer à l'écran depuis Claude Code (Pro/Max), sans configuration.",
      addedOn: "2026-06-23",
      updatedOn: "2026-06-23",
      source: "https://code.claude.com/docs/en/changelog",
      tags: ["cli", "computer-use"]
    },
    {
      id: "cc-destructive-cmd-guard",
      category: "claude-code",
      title: "Garde-fou commandes destructives",
      summary: "Depuis 2.1.183, Claude Code bloque automatiquement git reset --hard, git checkout -- ., git clean, git stash drop, git commit --amend non-sessionnel ainsi que terraform/pulumi/cdk destroy, sauf si explicitement demandé.",
      addedOn: "2026-06-23",
      updatedOn: "2026-06-23",
      source: "https://code.claude.com/docs/en/changelog",
      tags: ["cli", "sécurité", "git"]
    },
    {
      id: "cc-scheduled-tasks",
      category: "claude-code",
      title: "Tâches planifiées (routines cloud)",
      summary: "Exécution de jobs récurrents sur l'infrastructure cloud gérée par Anthropic, même laptop fermé (via /schedule).",
      addedOn: "2026-06-23",
      updatedOn: "2026-06-23",
      source: "https://support.claude.com/en/articles/12138966-release-notes",
      tags: ["cli", "automatisation", "cron"]
    },
    {
      id: "cc-auto-mode",
      category: "claude-code",
      title: "Auto mode",
      summary: "Remplace les invites de permission par des vérifications de sécurité en arrière-plan. Disponible sur Bedrock, Vertex et Foundry (CLAUDE_CODE_ENABLE_AUTO_MODE=1) ; le paramètre autoMode.classifyAllShell route également tous les appels Bash/PowerShell via le classificateur.",
      addedOn: "2026-06-23",
      updatedOn: "2026-06-29",
      source: "https://code.claude.com/docs/en/changelog",
      tags: ["cli", "permissions"]
    },
    {
      id: "cc-artifacts",
      category: "claude-code",
      title: "Artifacts partageables",
      summary: "Claude Code capture le travail en cours sous forme de pages visuelles live et partageables (walkthroughs de PR, dashboards, checklists), avec historique de versions.",
      addedOn: "2026-06-23",
      updatedOn: "2026-06-23",
      source: "https://code.claude.com/docs/en/changelog",
      tags: ["cli", "artifacts", "partage"]
    },
    {
      id: "cc-chrome",
      category: "claude-code",
      title: "Claude in Chrome",
      summary: "Extension Chrome permettant d'utiliser Claude directement dans le navigateur (pages web, formulaires, rédaction). Passée de bêta à disponibilité générale dans Claude Code v2.1.198 (1er juillet 2026). Les agents en arrière-plan commitent, pushent et ouvrent automatiquement une PR draft à la fin d'un travail de code.",
      addedOn: "2026-07-02",
      updatedOn: "2026-07-02",
      source: "https://code.claude.com/docs/en/changelog",
      tags: ["cli", "chrome", "extension", "navigateur"]
    },
    {
      id: "cc-mcp-login-logout",
      category: "claude-code",
      title: "Authentification MCP en ligne de commande",
      summary: "Depuis v2.1.186, `claude mcp login` authentifie un serveur MCP depuis le shell sans passer par le menu /mcp, et `claude mcp logout` efface ses tokens stockés.",
      addedOn: "2026-06-29",
      updatedOn: "2026-06-29",
      source: "https://code.claude.com/docs/en/changelog",
      tags: ["cli", "mcp", "authentification"]
    },
    {
      id: "cc-rewind",
      category: "claude-code",
      title: "/rewind – reprise avant /clear",
      summary: "La commande /rewind permet de reprendre une conversation depuis un point antérieur à l'exécution de /clear, préservant l'historique complet de la session.",
      addedOn: "2026-06-29",
      updatedOn: "2026-06-29",
      source: "https://code.claude.com/docs/en/changelog",
      tags: ["cli", "historique"]
    },
    {
      id: "cc-sandbox-credentials",
      category: "claude-code",
      title: "Paramètre sandbox.credentials",
      summary: "Le paramètre sandbox.credentials (v2.1.187) empêche les commandes exécutées en mode sandbox de lire les fichiers de credentials et les variables d'environnement secrètes.",
      addedOn: "2026-06-29",
      updatedOn: "2026-06-29",
      source: "https://code.claude.com/docs/en/changelog",
      tags: ["cli", "sécurité", "sandbox"]
    },
    {
      id: "ai-projects",
      category: "claude-ai",
      title: "Projects",
      summary: "Espaces de travail persistants avec contexte et fichiers partagés sur claude.ai.",
      addedOn: "2026-06-23",
      updatedOn: "2026-06-23",
      source: "https://www.anthropic.com/news/projects",
      tags: ["web", "contexte"]
    },
    {
      id: "ai-artifacts",
      category: "claude-ai",
      title: "Artifacts",
      summary: "Rendu live de code/UI à côté de la conversation sur claude.ai.",
      addedOn: "2026-06-23",
      updatedOn: "2026-06-23",
      source: "https://www.anthropic.com/news/artifacts",
      tags: ["web", "ui"]
    },
    {
      id: "ai-design",
      category: "claude-ai",
      title: "Claude Design",
      summary: "Outil de design (claude.ai/design) qui génère de l'UI React live à partir de prompts.",
      addedOn: "2026-06-23",
      updatedOn: "2026-06-23",
      source: "https://claude.ai/design",
      tags: ["web", "design"]
    },
    {
      id: "ai-claude-tag",
      category: "claude-ai",
      title: "Claude Tag (Slack)",
      summary: "Claude rejoint les canaux Slack comme coéquipier virtuel via @Claude. En bêta pour Team et Enterprise, il partage le contexte canal entre tous les membres et exécute des tâches de façon autonome.",
      addedOn: "2026-06-29",
      updatedOn: "2026-06-29",
      source: "https://www.anthropic.com/news/introducing-claude-tag",
      tags: ["web", "slack", "intégrations"]
    },
    {
      id: "eco-agent-sdk",
      category: "ecosystem",
      title: "Claude Agent SDK",
      summary: "SDK pour construire des agents personnalisés au-dessus de Claude.",
      addedOn: "2026-06-23",
      updatedOn: "2026-06-23",
      source: "https://docs.claude.com/en/api/agent-sdk",
      tags: ["sdk", "agents"]
    },
    {
      id: "eco-connectors",
      category: "ecosystem",
      title: "Connecteurs / intégrations",
      summary: "Intégrations tierces et connecteurs de données pour l'écosystème Claude.",
      addedOn: "2026-06-23",
      updatedOn: "2026-06-23",
      source: "https://www.anthropic.com/",
      tags: ["intégrations"]
    }
  ],
  news: [
    {
      date: "2026-07-03",
      category: "claude-code",
      title: "Claude Code v2.1.200–v2.1.201",
      summary: "v2.1.200 : mode de permission par défaut passé à « Manuel » dans toutes les interfaces (CLI, VS Code, JetBrains) — les flags --permission-mode manual et \"defaultMode\": \"manual\" sont désormais acceptés ; les dialogs AskUserQuestion ne continuent plus automatiquement par défaut (opt-in timeout via /config) ; multiples corrections de stabilité du daemon background (crash avec config malformée, sessions s'arrêtant après sleep/wake, agents ne redémarrant pas après crash avec daemon.lock stale, corruption de roster transiente) ; sous-agents : cutoff rate-limit sans texte renvoie une erreur propre au lieu d'un résultat vide ; correctifs accessibilité (lecteurs d'écran, glyphes décoratifs masqués, rendu sous tmux 3.4+, message voice dictation) ; plugin project-scoped correctement chargé depuis git worktrees. v2.1.201 : hotfix — les sessions Claude Sonnet 5 n'utilisent plus le rôle système mid-conversation pour les rappels de harnais.",
      source: "https://code.claude.com/docs/en/changelog"
    },
    {
      date: "2026-07-02",
      category: "claude-code",
      title: "Claude Code v2.1.199",
      summary: "Invocations de skills empilées jusqu'à 5 (`/skill-a /skill-b do XYZ`, plus seulement la première) ; messages d'erreur SSL/TLS immédiatement actionnables (arrêt rapide au lieu de consommer les tentatives) ; réponses partielles en streaming préservées si le serveur renvoie une erreur en milieu de flux ; sous-agents bloqués par une limite de taux remontent leur travail partiel au parent plutôt que d'échouer silencieusement. Résilience : rétentatives automatiques des 429 transitoires avec backoff pour les abonnés ; nouvelle variable CLAUDE_CODE_RETRY_WATCHDOG (300 tentatives par défaut) ; plafond de 15 sur CLAUDE_CODE_MAX_RETRIES supprimé. Principaux correctifs : daemon Linux (auto-kill toutes les ~50 s), sessions background macOS sur SSH, `claude stop` en concurrence avec redémarrage du daemon, indicateurs de progression bloqués, mémoire faible en sessions remote, panneau sous-agents, commandes `/model` et `/fast` depuis une vue sous-agent, masquage du stderr dans les hooks SessionStart/Setup/SubagentStart, Plan mode (appels navigateur en lecture seule auto-autorisés), Claude in Chrome (reconnexion en boucle), récupération de config corrompue.",
      source: "https://code.claude.com/docs/en/changelog"
    },
    {
      date: "2026-07-01",
      category: "claude-code",
      title: "Claude Code v2.1.198",
      summary: "Claude in Chrome passe en disponibilité générale (sorti de bêta) ; nouvelles notifications d'agents en arrière-plan avec types de hook agent_needs_input / agent_completed ; les agents de fond commitent, pushent et ouvrent automatiquement une PR draft à la fin du travail de code ; l'agent Explore hérite du modèle de la session principale (plafonné à Opus) ; les sous-agents et la compaction héritent de la config extended thinking ; résilience réseau améliorée (retry sur ECONNRESET sans couper la session).",
      source: "https://code.claude.com/docs/en/changelog"
    },
    {
      date: "2026-07-01",
      category: "claude-ai",
      title: "Lancement de Claude Science",
      summary: "Anthropic lance Claude Science en bêta (macOS et Linux) pour Pro, Max, Team et Enterprise : plan de travail IA intégrant 60+ bases scientifiques (génomique, protéomique, biologie structurale), système multi-agents avec vérification automatique des citations et reproductibilité totale des résultats. Programme AI for Science : bourses jusqu'à 30 000 $ de crédits, candidatures ouvertes jusqu'au 15 juillet 2026.",
      source: "https://www.anthropic.com/news/claude-science-ai-workbench"
    },
    {
      date: "2026-07-01",
      category: "models-api",
      title: "Fable 5 de retour mondialement",
      summary: "Après la suspension liée à la directive d'export du gouvernement US (12 juin), Anthropic redéploie Fable 5 pour tous les clients dans le monde à partir du 1er juillet, et propose un cadre commun d'évaluation de la gravité des jailbreaks.",
      source: "https://www.anthropic.com/news/fable-mythos-access"
    },
    {
      date: "2026-06-30",
      category: "models-api",
      title: "Lancement de Claude Sonnet 5",
      summary: "Nouveau modèle claude-sonnet-5 : le Sonnet le plus agentique (planification, usage d'outils, autonomie), performance proche d'Opus 4.8 à moindre coût, contexte 1M tokens. Tarif de lancement 2 $ / 10 $ par Mtok jusqu'au 31 août.",
      source: "https://www.anthropic.com/news/claude-sonnet-5"
    },
    {
      date: "2026-06-30",
      category: "claude-code",
      title: "Claude Code v2.1.196–2.1.197",
      summary: "Sonnet 5 devient le modèle par défaut de Claude Code avec contexte 1M natif (2.1.197) ; modèles par défaut d'organisation dans la console admin, nommage lisible des sessions, pièces jointes cliquables et durcissement sécurité MCP (2.1.196) ; watchdog d'inactivité de flux activé par défaut (abandon après 5 min).",
      source: "https://code.claude.com/docs/en/changelog"
    },
    {
      date: "2026-06-26",
      category: "claude-code",
      title: "Claude Code semaine 26 (v2.1.187–2.1.195)",
      summary: "sandbox.credentials bloque l'accès aux secrets en mode sandbox (v2.1.187) ; /rewind reprend depuis avant /clear (v2.1.191) ; autoMode.classifyAllShell route tous les shells via le classificateur (v2.1.193) ; autocomplétion live des chemins dans le mode bash ; –37 % de CPU pendant le streaming.",
      source: "https://code.claude.com/docs/en/changelog"
    },
    {
      date: "2026-06-23",
      category: "claude-ai",
      title: "Lancement de Claude Tag dans Slack",
      summary: "Anthropic et Salesforce lancent Claude Tag en bêta (Team et Enterprise) : mentionnez @Claude dans un canal Slack pour l'intégrer comme coéquipier virtuel partageant le contexte du canal entre tous les membres.",
      source: "https://www.anthropic.com/news/introducing-claude-tag"
    },
    {
      date: "2026-06-22",
      category: "claude-code",
      title: "Claude Code 2.1.186",
      summary: "Commandes d'authentification MCP (claude mcp login/logout), filtrage par statut dans /workflows, section « Skills » dans /plugin, et réponse automatique à la sortie des commandes Bash.",
      source: "https://code.claude.com/docs/en/changelog"
    },
    {
      date: "2026-06-19",
      category: "claude-code",
      title: "Claude Code 2.1.183 – blocage des commandes destructives",
      summary: "git reset --hard, git checkout -- ., git clean, terraform/pulumi/cdk destroy bloqués par défaut sauf demande explicite ; avertissements de dépréciation de modèles affichés en mode print (-p).",
      source: "https://code.claude.com/docs/en/changelog"
    },
    {
      date: "2026-06-17",
      category: "claude-code",
      title: "Claude Code 2.1.181",
      summary: "Nouvelle syntaxe /config key=value pour modifier n'importe quel réglage depuis le prompt ; runtime Bun passé à 1.4 ; retry automatique sur coupures connexion en phase de réflexion.",
      source: "https://code.claude.com/docs/en/changelog"
    },
    {
      date: "2026-06-17",
      category: "ecosystem",
      title: "Anthropic ouvre un bureau à Séoul",
      summary: "Nouveau bureau en Corée + partenariats à travers l'écosystème IA coréen, et MOU avec le ministère des Sciences et des TIC sur la sûreté de l'IA.",
      source: "https://www.anthropic.com/news/seoul-office-partnerships-korean-ai-ecosystem"
    },
    {
      date: "2026-06-12",
      category: "ecosystem",
      title: "Partenariat Anthropic × TCS",
      summary: "Tata Consultancy Services déploie Claude pour 50 000 employés dans 56 pays et construit des produits Claude pour les industries régulées.",
      source: "https://www.anthropic.com/news/tcs-anthropic-partnership"
    },
    {
      date: "2026-06-10",
      category: "models-api",
      title: "Claude Fable 5 et Mythos 5",
      summary: "Fable 5 (modèle de classe Mythos rendu sûr pour usage général) annoncé, puis suspendu pour tous les clients suite à une directive d'export du gouvernement US visant les ressortissants étrangers.",
      source: "https://www.anthropic.com/news/claude-fable-5-mythos-5"
    },
    {
      date: "2026-06-02",
      category: "ecosystem",
      title: "Expansion du Project Glasswing",
      summary: "Le partenariat de sécurité s'étend à environ 150 nouvelles organisations (industrie de la sécurité, mainteneurs open-source, gouvernement US).",
      source: "https://www.anthropic.com/news/expanding-project-glasswing"
    },
    {
      date: "2026-06-01",
      category: "ecosystem",
      title: "Anthropic dépose un projet d'IPO (S-1)",
      summary: "Dépôt confidentiel d'un formulaire S-1 auprès de la SEC en vue d'une introduction en bourse.",
      source: "https://www.anthropic.com/news/confidential-draft-s1-sec"
    }
  ]
};
