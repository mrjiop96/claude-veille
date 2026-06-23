window.VEILLE_DATA = {
  lastUpdated: "2026-06-23",
  categories: [
    { id: "models-api",  label: "Modèles & API" },
    { id: "claude-code", label: "Claude Code" },
    { id: "claude-ai",   label: "Claude.ai" },
    { id: "ecosystem",   label: "Écosystème" }
  ],
  features: [
    {
      id: "models-current",
      category: "models-api",
      title: "Famille de modèles Claude 4.x + Fable 5",
      summary: "Opus 4.8 (claude-opus-4-8), Sonnet 4.6 (claude-sonnet-4-6), Haiku 4.5 (claude-haiku-4-5-20251001), Fable 5 (claude-fable-5).",
      addedOn: "2026-06-23",
      updatedOn: "2026-06-23",
      source: "https://docs.claude.com/en/docs/about-claude/models",
      tags: ["modèles", "ids"]
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
      summary: "Modules de compétences invocables via le slash, qui chargent des instructions spécialisées.",
      addedOn: "2026-06-23",
      updatedOn: "2026-06-23",
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
      summary: "Remplace les invites de permission par des vérifications de sécurité en arrière-plan ; disponible sur Bedrock, Vertex et Foundry pour Opus 4.7/4.8 (CLAUDE_CODE_ENABLE_AUTO_MODE=1).",
      addedOn: "2026-06-23",
      updatedOn: "2026-06-23",
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
