export const competencies = `
<section>
  <h2>1) Compétences transversales principales (communes aux 4 métiers)</h2>
  <ul>
    <li><strong>Piloter un projet</strong>, en définissant objectifs, ressources et planning tout en respectant coûts/délais/qualité.
      <ul>
        <li>Commentaire : pilotage multi-projets (formation, SI, web) avec jalons, risques et KPI. <span class="tag ok">(check)</span></li>
        <li>Preuve : gestion de projet pour déploiement d’ERP via prestataire + refonte de processus et APIs. <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : formaliser un PMO léger et standardiser templates (charte, RAID, REX). <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Coordonner les parties prenantes</strong>, en fédérant équipes internes, experts et prestataires autour d’un objectif commun.
      <ul>
        <li>Commentaire : coordination DSI, métiers, enseignants, prestataires éditeurs/intégrateurs. <span class="tag ok">(check)</span></li>
        <li>Preuve : orchestration des acteurs sur l’ERP maison et sur projets Moodle (plugins, WS). <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : instaurer RACI systématique et briefings hebdo normalisés. <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Communiquer efficacement</strong>, en adaptant le discours aux interlocuteurs (techniques, direction, clients, apprenants, utilisateurs).
      <ul>
        <li>Commentaire : vulgarisation technique, synthèses exécutives, documentation utilisateurs. <span class="tag ok">(check)</span></li>
        <li>Preuve : présentations &amp; REX de projets (ERP, SPOC, automatisations) à la direction et équipes. <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : systématiser des one‑pagers KPI et infographies d’impact. <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Gérer la conduite du changement</strong>, en accompagnant les bénéficiaires dans l’adoption de nouvelles pratiques et outils.
      <ul>
        <li>Commentaire : parcours d’accompagnement + formation de formateurs + tutoriels multimédias. <span class="tag ok">(check)</span></li>
        <li>Preuve : SPOC prépa concours + tutoriels vidéo + tutorat applicatif métier (utilisateurs finaux). <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : déployer mesure d’adoption (NPS, taux d’usage, heatmaps d’aide en ligne). <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Appliquer des méthodologies agiles et de gestion de projet</strong>, pour organiser et ajuster le déroulement (itérations, rituels, priorisation).
      <ul>
        <li>Commentaire : sprints, backlog, démonstrations, arbitrages MOA/MOE documentés. <span class="tag ok">(check)</span></li>
        <li>Preuve : développement d’applications web (PHP/SQL, Angular/Node/MongoDB) avec Kanban/Scrum simple. <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : introduire OKR trimestriels alignés avec roadmap et financement. <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Analyser les performances et proposer des améliorations</strong>, en exploitant indicateurs, feedbacks et évaluations.
      <ul>
        <li>Commentaire : mise en place de KPI usage/qualité + tableaux de bord décisionnels. <span class="tag ok">(check)</span></li>
        <li>Preuve : simulation de base de données de vente et analyse de data pour étudiants (gamification). <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : automatiser la collecte de feedback in‑app et expérimentation A/B. <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Assurer une veille stratégique, technologique et pédagogique</strong>, pour anticiper les évolutions et innover.
      <ul>
        <li>Commentaire : veille continue (technos web, outils pédagogiques, standards LMS/interop). <span class="tag ok">(check)</span></li>
        <li>Preuve : participation aux événements MoodleMoot et partage de retours d’expérience. <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : publier régulièrement une newsletter interne de veille et benchmarks. <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Exercer un leadership d’animation d’équipe</strong>, en guidant, motivant et développant les collaborateurs.
      <ul>
        <li>Commentaire : animation d’équipes projet et encadrement de stagiaires/partenaires. <span class="tag ok">(check)</span></li>
        <li>Preuve : encadrement de stagiaires et coordination de prestataires variés sur ERP/plateformes. <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : manager hiérarchiquement une équipe 3–5 personnes (plan de progression). <span class="tag no">(non)</span></li>
      </ul>
    </li>
    <li><strong>Co‑créer avec l’IA générative</strong>, en idéant, ébauchant et itérant des contenus, codes et supports.
      <ul>
        <li>Commentaire : usage quotidien d’assistants IA pour conception, relecture, pair‑programming et documentation. <span class="tag ok">(check)</span></li>
        <li>Preuve : génération de squelettes de scripts Python, prompts pour quiz et fiches pédagogiques. <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : structurer une bibliothèque de prompts réutilisables par équipe (promptops). <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Prototyper des solutions avec IA</strong>, en testant copilotes, agents et automatisations sur cas métiers.
      <ul>
        <li>Commentaire : expérimentation d’agents pour support, génération de rapports et data‑prep. <span class="tag ok">(check)</span></li>
        <li>Preuve : automatisations via scripts + intégrations WS Moodle pour alléger tâches répétitives. <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : POC RAG sur corpus interne (politiques, FAQ) et évaluation objective. <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Encadrer gouvernance et éthique de l’IA</strong>, en cadrant RGPD, biais, transparence et traçabilité.
      <ul>
        <li>Commentaire : sensibilisation des équipes à la confidentialité et aux limites des modèles. <span class="tag wip">(en cours)</span></li>
        <li>Preuve : règles d’usage IA pour supports pédagogiques et données apprenants. <span class="tag wip">(en cours)</span></li>
        <li>Prochain niveau : charte d’usage IA + registres de traitements + évaluation des risques. <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
  </ul>
</section>
<section>
  <h2>2) Compétences spécifiques métier principales</h2>
  <div class="grid">
    <div class="card">
      <h3>a) Consultant·e en ingénierie pédagogique</h3>
      <ul>
        <li><strong>Analyser les besoins de formation et profils d’apprenants</strong>, en recueillant données et contexte métier.
          <ul>
            <li>Commentaire : entretiens, personas, cartographie des prérequis et contraintes terrain. <span class="tag ok">(check)</span></li>
            <li>Preuve : cadrage du SPOC prépa concours avec analyse des écarts de compétences. <span class="tag ok">(check)</span></li>
            <li>Prochain niveau : outiller la phase d’analyse (questionnaires, analytics LMS) standardisés. <span class="tag wip">(en cours)</span></li>
          </ul>
        </li>
        <li><strong>Concevoir des parcours pédagogiques</strong>, en définissant architecture, étapes et objectifs d’apprentissage.
          <ul>
            <li>Commentaire : blueprint des parcours, modalité mixte, granularité compétences/ressources. <span class="tag ok">(check)</span></li>
            <li>Preuve : conception du SPOC et déploiement de l’approche par compétences (chargé de mission). <span class="tag ok">(check)</span></li>
            <li>Prochain niveau : introduire des micro‑crédits et badges alignés au RNCP. <span class="tag wip">(en cours)</span></li>
          </ul>
        </li>
        <li><strong>Scénariser des maquettes pédagogiques</strong>, en structurant modules, séquences et évaluations.
          <ul>
            <li>Commentaire : storyboard, critères d’évaluation, activités actives et feedbacks. <span class="tag ok">(check)</span></li>
            <li>Preuve : capsules vidéo tuto + quiz + activités gamifiées (persona « client »). <span class="tag ok">(check)</span></li>
            <li>Prochain niveau : intégrer analytics d’apprentissage (xAPI/LRS) pour ajustements. <span class="tag wip">(en cours)</span></li>
          </ul>
        </li>
        <li><strong>Produire ou faire produire des ressources pédagogiques</strong>, en rédigeant cahiers des charges et briefs auteurs.
          <ul>
            <li>Commentaire : charte pédagogique, formats multimédias, accessibilité. <span class="tag ok">(check)</span></li>
            <li>Preuve : création de capsules vidéo et tutoriels + coordination d’intervenants. <span class="tag ok">(check)</span></li>
            <li>Prochain niveau : industrialiser via modèles, checklists qualité et pipeline médias. <span class="tag wip">(en cours)</span></li>
          </ul>
        </li>
        <li><strong>Évaluer l’impact des dispositifs</strong>, en construisant des indicateurs et plans d’amélioration continue.
          <ul>
            <li>Commentaire : échelle Kirkpatrick, suivi progression, satisfaction, insertion/usage. <span class="tag ok">(check)</span></li>
            <li>Preuve : REX sur SPOC et formations techniques (formateurs et apprenants). <span class="tag ok">(check)</span></li>
            <li>Prochain niveau : relier données LMS aux résultats (taux réussite, effets durables). <span class="tag wip">(en cours)</span></li>
          </ul>
        </li>
        <li><strong>Intégrer l’IA dans les activités d’apprentissage</strong>, en créant assistants, générateurs d’exercices et feedbacks.
          <ul>
            <li>Commentaire : co‑création d’activités avec IA (rédaction, quiz, remédiation). <span class="tag ok">(check)</span></li>
            <li>Preuve : utilisation quotidienne de l’IA pour supports de cours et scripts de correction. <span class="tag ok">(check)</span></li>
            <li>Prochain niveau : scénarios adaptatifs pilotés par IA (parcours personnalisés). <span class="tag wip">(en cours)</span></li>
          </ul>
        </li>
      </ul>
    </div><div class="card">
  <h3>b) Chef·fe de projet transformation numérique</h3>
  <ul>
    <li><strong>Définir une feuille de route digitale</strong>, en traduisant la stratégie en plan d’actions priorisé.
      <ul>
        <li>Commentaire : vision, objectifs, quick wins, trajectoire 12–24 mois. <span class="tag ok">(check)</span></li>
        <li>Preuve : refonte totale de processus (automatisation inscriptions multi‑plateformes via API). <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : coupler roadmap à un portefeuille d’indicateurs de valeur (OKR). <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Réaliser un audit numérique</strong>, en cartographiant l’existant et les opportunités d’optimisation.
      <ul>
        <li>Commentaire : carto outils, flux, irritants, maturité data. <span class="tag ok">(check)</span></li>
        <li>Preuve : diagnostic avant déploiement ERP et cadrage du SI pédagogique. <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : formaliser un référentiel d’audit réutilisable (grille &amp; scoring). <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Sélectionner et déployer des solutions</strong>, en pilotant intégrations et interopérabilités SI.
      <ul>
        <li>Commentaire : benchmark, appels d’offres, intégrations API/ETL, conduite du changement. <span class="tag ok">(check)</span></li>
        <li>Preuve : déploiement ERP via prestataire + intégrations WS Moodle et automatisations. <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : renforcer tests d’intégration end‑to‑end et monitoring des interfaces. <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Connaître et mobiliser les technologies web</strong>, en arbitrant entre CMS, frameworks et services cloud.
      <ul>
        <li>Commentaire : sélection techno selon coûts, maintenabilité et compétences. <span class="tag ok">(check)</span></li>
        <li>Preuve : projets PHP/SQL et Angular/Node/MongoDB + scripts Python data/automatisation. <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : formaliser matrices d’arbitrage (Coût/Impact/Risque) pour choix techno. <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Optimiser la performance digitale</strong>, en actionnant analytics, SEO/SEA, UX/UI et acquisition.
      <ul>
        <li>Commentaire : parcours utilisateurs, contenu, mesure, boucles d’amélioration. <span class="tag wip">(en cours)</span></li>
        <li>Preuve : refonte de processus et tutoriels pour augmenter l’adoption des plateformes. <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : mettre en place tableaux de bord d’entonnoir et tests A/B continus. <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Piloter des projets IA</strong>, en évaluant cas d’usage, risques et valeur métier.
      <ul>
        <li>Commentaire : cadrage de POC, mesure ROI, cadre RGPD/sécurité. <span class="tag wip">(en cours)</span></li>
        <li>Preuve : automatisations IA pour rédaction/structuration de contenus et support à la data‑prep. <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : comité d’éthique/usage et roadmap IA transverse (agents, copilots). <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Monter et financer des projets</strong>, en sécurisant ressources et partenaires.
      <ul>
        <li>Commentaire : montage de dossiers, partenariats académiques/industriels. <span class="tag ok">(check)</span></li>
        <li>Preuve : dépôts et suivi d’appels à projets pour ~600k€ de financements universitaires. <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : structurer un pipeline de subventions récurrent avec rétro‑planning annuel. <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
  </ul>
</div>

<div class="card">
  <h3>c) Développeur·euse web</h3>
  <ul>
    <li><strong>Concevoir et développer des fonctionnalités</strong>, en écrivant un code maintenable et testé (front/back).
      <ul>
        <li>Commentaire : principes SOLID, modularité, revues de code. <span class="tag ok">(check)</span></li>
        <li>Preuve : applications web PHP/SQL et Angular/Node/MongoDB pour besoins internes. <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : renforcer couverture de tests et normes de style outillées. <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Intégrer des interfaces responsives</strong>, en appliquant standards web et accessibilité (RGAA/WCAG).
      <ul>
        <li>Commentaire : design system léger, tests multi‑devices. <span class="tag ok">(check)</span></li>
        <li>Preuve : refonte d’interfaces pédagogiques et tutoriels interactifs. <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : audits d’accessibilité outillés et remédiations systématiques. <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Concevoir et consommer des API</strong>, en sécurisant les échanges (REST/GraphQL, OAuth/OIDC).
      <ul>
        <li>Commentaire : schémas, pagination, gestion des erreurs, quotas. <span class="tag ok">(check)</span></li>
        <li>Preuve : intégration des Web Services Moodle et connexions inter‑plateformes via API. <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : documentation OpenAPI et tests contractuels. <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Mettre en place des tests automatisés</strong>, en garantissant qualité et non‑régression.
      <ul>
        <li>Commentaire : tests unitaires, intégration et end‑to‑end sur parcours critiques. <span class="tag wip">(en cours)</span></li>
        <li>Preuve : scripts Python de validation et tests manuels structurés (checklists). <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : pipeline CI pour exécution systématique des suites de tests. <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Optimiser les performances applicatives</strong>, en réduisant latence et poids des assets.
      <ul>
        <li>Commentaire : profilage, caching, lazy‑loading, DB indexing. <span class="tag wip">(en cours)</span></li>
        <li>Preuve : optimisations requêtes SQL et rationalisation des appels API dans apps internes. <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : budgets de performance (Lighthouse) et monitoring en prod. <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Déployer et maintenir les applications</strong>, en industrialisant CI/CD et infrastructure as code.
      <ul>
        <li>Commentaire : environnements, branches, releases, rollback. <span class="tag wip">(en cours)</span></li>
        <li>Preuve : déploiements applicatifs internes et scripts d’automatisation. <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : conteneurisation systématique et IaC (Terraform/Ansible). <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Gérer les versions et revues de code</strong>, en utilisant Git, branches et pull requests collaboratives.
      <ul>
        <li>Commentaire : Git‑flow allégé, conventions de commit. <span class="tag ok">(check)</span></li>
        <li>Preuve : projets multi‑repos (PHP/JS) avec revues par pairs. <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : mise en place de hooks qualité et conventions Conventional Commits. <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Sécuriser les applications</strong>, en appliquant bonnes pratiques OWASP et conformité RGPD.
      <ul>
        <li>Commentaire : validation entrée, gestion secrets, durcissement headers, journalisation. <span class="tag wip">(en cours)</span></li>
        <li>Preuve : revue de sécurité basique sur formulaires et authentification (projets internes). <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : scans SAST/DAST et politique de secrets centralisée. <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Intégrer des LLM via API</strong>, en ajoutant fonctionnalités IA dans les apps (assistants, génération, résumé).
      <ul>
        <li>Commentaire : appels API LLM, gestion coûts/latence, garde‑fous. <span class="tag wip">(en cours)</span></li>
        <li>Preuve : prototypes d’assistance à la rédaction de contenus pédagogiques. <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : observabilité prompts/traces et évaluation automatique. <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Mettre en place RAG / recherche sémantique</strong>, en combinant vecteurs, embeddings et sources internes.
      <ul>
        <li>Commentaire : ingestion, chunking, indexation, politique de mise à jour. <span class="tag wip">(en cours)</span></li>
        <li>Preuve : POC prévu sur corpus de procédures et FAQ pédagogiques. <span class="tag wip">(en cours)</span></li>
        <li>Prochain niveau : déploiement pilote auprès des équipes support et enseignants. <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
  </ul>
</div>

<div class="card">
  <h3>d) Administrateur·rice de plateforme (LMS, ERP, logiciel métier)</h3>
  <ul>
    <li><strong>Administrer et configurer la plateforme</strong>, en paramétrant rôles, droits, workflows et catalogues.
      <ul>
        <li>Commentaire : modèles de rôles, permissions minimales, workflows d’inscription. <span class="tag ok">(check)</span></li>
        <li>Preuve : administration avancée de Moodle (catégories, rôles, plugins, WS). <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : standardiser packs de configuration par use‑case. <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Gérer le cycle de vie des données</strong>, en assurant qualité, sauvegardes et conformité RGPD.
      <ul>
        <li>Commentaire : politique de rétention, anonymisation, plan de sauvegarde/restauration. <span class="tag wip">(en cours)</span></li>
        <li>Preuve : nettoyage régulier des cohortes et archivage de cours/inscriptions. <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : registres de traitements et DPIA pour données sensibles. <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Planifier et exécuter les mises à jour</strong>, en pilotant tests de non‑régression et fenêtres de maintenance.
      <ul>
        <li>Commentaire : sandbox, changelog, plan de retour arrière, communication utilisateurs. <span class="tag ok">(check)</span></li>
        <li>Preuve : mises à jour Moodle et montée de version avec vérification des plugins clés. <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : pipeline automatisé pour tests et déploiements (blue/green). <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Intégrer la plateforme au SI</strong>, en configurant SSO/annuaire et connecteurs API.
      <ul>
        <li>Commentaire : SAML/OIDC/LDAP, mapping des attributs, synchros planifiées. <span class="tag wip">(en cours)</span></li>
        <li>Preuve : interconnexions via API pour remontée automatique des étudiants (suppression multi‑saisies). <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : mise en place d’un SSO unifié et provisioning automatisé. <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Superviser disponibilité et performances</strong>, en instrumentant monitoring, alerting et capacity planning.
      <ul>
        <li>Commentaire : métriques plateforme, logs, seuils d’alerte, SLA. <span class="tag wip">(en cours)</span></li>
        <li>Preuve : suivi de charge et optimisation des pics d’activité (examens, rentrées). <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : tableaux de bord temps réel et alertes proactives. <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Assurer le support utilisateurs</strong>, en traitant incidents via ITSM et base de connaissances.
      <ul>
        <li>Commentaire : niveaux de support (L1–L3), SLA, macros de réponses, tutoriels self‑service. <span class="tag ok">(check)</span></li>
        <li>Preuve : tutoriels, hotline fonctionnelle, formation et formation de formateurs (pédago/tech). <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : portail d’aide avec recherche sémantique et agents IA. <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Sécuriser l’environnement applicatif</strong>, en appliquant politiques d’accès, chiffrement et audit.
      <ul>
        <li>Commentaire : MFA, politique mots de passe, séparation des rôles, journaux d’accès. <span class="tag wip">(en cours)</span></li>
        <li>Preuve : durcissement des permissions Moodle et revue régulière des rôles sensibles. <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : audits périodiques et rapports de conformité. <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Piloter contenus et reporting (LMS)</strong>, en gérant parcours, sessions, inscriptions et tableaux de bord.
      <ul>
        <li>Commentaire : catalogues, cohortes, critères d’achèvement, rapports d’activité. <span class="tag ok">(check)</span></li>
        <li>Preuve : administration Moodle quotidienne (création de cours, inscriptions, suivis). <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : connecteurs BI et exports automatiques vers data‑warehouse. <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Ajouter des capacités IA à la plateforme</strong>, en configurant plugins/copilotes et garde‑fous.
      <ul>
        <li>Commentaire : classification, résumé, génération assistée, limites d’usage. <span class="tag wip">(en cours)</span></li>
        <li>Preuve : prototypage de génération de contenus et d’assistance à la modération sur Moodle. <span class="tag wip">(en cours)</span></li>
        <li>Prochain niveau : évaluation objective (qualité, biais) et pilotage des coûts IA. <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
  </ul>
</div>

  </div>
</section>
<section>
  <h2>3) Compétences transversales secondaires (communes d’appui)</h2>
  <ul>
    <li><strong>Réaliser un cahier des charges détaillé</strong>, en spécifiant besoins fonctionnels, techniques ou pédagogiques (MOA/MOE).
      <ul>
        <li>Commentaire : user stories, critères d’acceptation, maquettes rapides. <span class="tag ok">(check)</span></li>
        <li>Preuve : cahiers des charges pour ERP et développements web internes. <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : référentiel de templates et exemples versionnés. <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Utiliser des outils collaboratifs de gestion</strong>, en organisant tâches, sprints et suivi (Jira, Trello, Asana, LMS).
      <ul>
        <li>Commentaire : backlog, burndown, automatisations notifications. <span class="tag ok">(check)</span></li>
        <li>Preuve : suivi de projets ERP/Moodle avec tableaux et rituels hebdo. <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : dashboards multi‑projets consolidés et SLA. <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Organiser et piloter un dispositif</strong>, en structurant contenu, logistique et déroulement opérationnel.
      <ul>
        <li>Commentaire : calendrier, ressources, checklists, rétro‑planning. <span class="tag ok">(check)</span></li>
        <li>Preuve : organisation de colloques et sessions de formation (salles, contenus, captations). <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : kits opérationnels réutilisables (playbooks). <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Gérer des contenus numériques ou pédagogiques</strong>, via CMS, plateformes e‑learning et supports multimédias.
      <ul>
        <li>Commentaire : workflows d’édition, métadonnées, cycles de vie. <span class="tag ok">(check)</span></li>
        <li>Preuve : gestion de contenus Moodle et supports de cours vidéo/quiz. <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : taxonomie commune + recherche sémantique. <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Animer des sessions, ateliers ou formations</strong>, en mobilisant intervenants et participants.
      <ul>
        <li>Commentaire : facilitation, ice‑breakers, récapitulatif d’apprentissage. <span class="tag ok">(check)</span></li>
        <li>Preuve : cours d’informatique, formation de formateurs et ateliers techniques/pédagogiques. <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : format blended avancé avec activités synchrones/asynchrones. <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Accompagner VAE ou bilans de compétences</strong>, en outillant les parcours individuels.
      <ul>
        <li>Commentaire : méthodes de recueil de preuves, conseils d’orientation. <span class="tag no">(non)</span></li>
        <li>Preuve : — <span class="tag no">(non)</span></li>
        <li>Prochain niveau : se former à l’accompagnement VAE et cadrer un premier pilote. <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Encadrer et coordonner des équipes</strong>, en répartissant rôles et en assurant le suivi de charge.
      <ul>
        <li>Commentaire : coordination transverse, mentoring stagiaires. <span class="tag ok">(check)</span></li>
        <li>Preuve : encadrement de stagiaires + collaboration avec prestataires variés. <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : management hiérarchique d’une équipe dédiée. <span class="tag no">(non)</span></li>
      </ul>
    </li>
    <li><strong>Anticiper les risques projet</strong>, en prévoyant contraintes, dépendances et plans de contournement.
      <ul>
        <li>Commentaire : registre des risques, matrices probabilité/impact, plans B. <span class="tag ok">(check)</span></li>
        <li>Preuve : sécurisation des pics d’activité LMS et continuité lors des montées de version. <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : simulation de charge et tests de résilience réguliers. <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Structurer et synthétiser l’information</strong>, en produisant notes, spécifications et arbitrages clairs.
      <ul>
        <li>Commentaire : comptes rendus, fiches de décision, critères d’arbitrage. <span class="tag ok">(check)</span></li>
        <li>Preuve : dossiers d’appels à projets gagnants (~600k€) et synthèses de cadrage. <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : base de connaissances centralisée et versionnée. <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Maîtriser outils bureautiques et data</strong>, en automatisant reporting et tableaux de bord décisionnels.
      <ul>
        <li>Commentaire : Excel avancé, PowerQuery/CSV, scripts Python pour data‑prep. <span class="tag ok">(check)</span></li>
        <li>Preuve : jeux de données de vente simulés et analyses pour étudiants managers. <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : passerelles BI (Looker/Power BI) reliées au LMS/ERP. <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Documenter et capitaliser les connaissances</strong>, en maintenant référentiels, runbooks et guides utilisateurs.
      <ul>
        <li>Commentaire : modèles de procédures, schémas, pas‑à‑pas. <span class="tag ok">(check)</span></li>
        <li>Preuve : guides Moodle, tutoriels vidéos, notes de mise à jour. <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : documentation « living » avec versioning et recherche. <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Cartographier processus et systèmes</strong>, en modélisant flux et interfaces (BPMN/diagrammes d’architecture).
      <ul>
        <li>Commentaire : AS‑IS/TO‑BE, interfaces, dépendances. <span class="tag ok">(check)</span></li>
        <li>Preuve : cartographie pour refonte d’inscriptions multi‑plateformes (APIs). <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : référentiel d’architecture partagé et mis à jour trimestriellement. <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Former et accompagner les utilisateurs</strong>, en créant tutoriels, FAQ et supports de prise en main.
      <ul>
        <li>Commentaire : micro‑apprentissages, parcours guidés, assistance contextualisée. <span class="tag ok">(check)</span></li>
        <li>Preuve : tutoriels vidéo, classes virtuelles, tutorat personnalisé sur applications métier. <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : intégration d’aide in‑app et chat d’assistance IA. <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Appliquer exigences de conformité</strong>, en intégrant RGPD, accessibilité et sécurité dès la conception.
      <ul>
        <li>Commentaire : privacy by design, droits des personnes, logs, accessibilité. <span class="tag wip">(en cours)</span></li>
        <li>Preuve : minimisation des données dans automatisations et contrôles d’accès Moodle. <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : DPIA, registre des traitements et audits accessibilité. <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Rédiger des prompts efficaces</strong>, en cadrant rôles, contexte et critères d’évaluation.
      <ul>
        <li>Commentaire : chaînes de prompts, exemples few‑shot, contrôle du style/sortie. <span class="tag ok">(check)</span></li>
        <li>Preuve : prompts pour génération de quiz, fiches de révision et scripts d’analyse. <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : référentiel de prompts partagé et mesuré (qualité/coût). <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
    <li><strong>Former les équipes à l’IA</strong>, en instaurant bonnes pratiques, limites et cas d’usage concrets.
      <ul>
        <li>Commentaire : ateliers, do/don’t, exemples appliqués à chaque métier. <span class="tag wip">(en cours)</span></li>
        <li>Preuve : sensibilisation informelle lors de formations de formateurs et REX projets. <span class="tag ok">(check)</span></li>
        <li>Prochain niveau : parcours structuré « IA au quotidien » et guide de gouvernance. <span class="tag wip">(en cours)</span></li>
      </ul>
    </li>
  </ul>
</section>
<hr>
<section>
  <h2>Tableau récapitulatif (aperçu)</h2>
  <table border="1" cellpadding="8" cellspacing="0">
    <thead>
      <tr><th>Bloc</th><th>Nb compétences</th><th>Exemples</th></tr>
    </thead>
    <tbody>
      <tr><td>Transversales principales</td><td>11</td><td>Pilotage projet, Changement, Co‑création IA</td></tr>
      <tr><td>Spécifiques – Ingénierie pédagogique</td><td>6</td><td>SPOC, évaluation impact, IA dans l’apprentissage</td></tr>
      <tr><td>Spécifiques – Transformation numérique</td><td>7</td><td>Feuille de route, intégrations SI, projets IA</td></tr>
      <tr><td>Spécifiques – Développeur·euse web</td><td>10</td><td>APIs, CI/CD, sécurité, LLM/RAG</td></tr>
      <tr><td>Spécifiques – Administrateur·rice plateforme</td><td>10</td><td>Moodle, SSO/API, monitoring, IA plateforme</td></tr>
      <tr><td>Transversales secondaires</td><td>16</td><td>Cahier des charges, documentation, conformité, prompts</td></tr>
    </tbody>
  </table>
</section>
`;
