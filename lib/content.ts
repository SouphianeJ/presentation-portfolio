/**
IMPORTANT — Tu peux coller tes objets EXACTS ici sans les modifier.

Ils seront affichés tels quels dans les modals (dangerouslySetInnerHTML).
*/

export type ModalItem = {
  modalId: string;
  title: string;
  text: string;
  modalTitle?: string;
  modalContent: string; // HTML
};

export const techProjects: ModalItem[] = [
  {
    modalId: "pdfExcelModal",
    title: "Outils de traitement automatisé pour PDF et Excel",
    text: "Développement de scripts VBA et Python pour automatiser des actions en lots sur PDF et Excel, optimisant les tâches administratives et pédagogiques répétitives.",
    modalTitle: "Outils de traitement automatisé pour PDF et Excel",
    modalContent: `
                    <p>
                        Ce projet a consisté à concevoir des scripts et outils personnalisés pour automatiser le traitement de fichiers PDF et Excel, afin de gagner en efficacité dans la gestion des documents administratifs et éducatifs. L’objectif était de simplifier des tâches répétitives, réduire les erreurs humaines, et libérer du temps pour des activités à forte valeur ajoutée.
                    </p>
                    <h5>Étapes clés du projet</h5>
                    <ul>
                        <li><strong>Analyse des besoins spécifiques :</strong> Identification des processus manuels avec PDF et Excel, et des besoins des utilisateurs en matière de traitement de données.</li>
                        <li><strong>Développement de scripts en VBA et Python :</strong> Création de scripts pour automatiser le découpage de PDF, publipostage de notes, et importation en lot dans Apogée.</li>
                        <li><strong>Personnalisation et tests :</strong> Ajustement des scripts pour répondre aux besoins spécifiques des utilisateurs et tests approfondis.</li>
                       
                        <li><strong>Support et maintenance continue :</strong> Assistance technique et mises à jour pour répondre aux nouvelles demandes.</li>
                    </ul>
                    <h5>Résultats obtenus</h5>
                    <ul>
                        <li><strong>Gain de temps significatif :</strong> Réduction considérable du temps consacré aux tâches de traitement de fichiers, notamment lors des examens.</li>
                        <li><strong>Réduction des erreurs humaines :</strong> Automatisation des processus, pour éviter la saisie manuelle source principale d'erreur.</li>
                        
                    </ul>
                    <h5>Exemples</h5>
                    <ul>
                        <li><strong>Génération des PV de Jury </strong> </li>
                        <li><strong>Génération de Plannings</strong> </li>
                        <li><strong>Exportation des notes vers Apogée</strong> </li>
                        
                    </ul>
                `,
  },
  {
    modalId: "amcModal",
    title: "Projet AMC",
    text: "Mise en place de la correction automatisée de QCM pour les examens papier, avec développement d'outils en Python et VBA. Ce projet a permis de réduire le temps de correction de 45 jours par session.",
    modalTitle: "Projet AMC - Auto Multiple Choice",
    modalContent: `
                    <p>Auto Multiple Choice (AMC) est un logiciel open source facilitant la création, la gestion et la correction automatisée de QCM...</p>
                    <h5>Étapes du projet</h5>
                    <ul>
                        <li><strong>Analyse des besoins :</strong> Identification des exigences pédagogiques et contraintes techniques.</li>
                        <li><strong>Installation et configuration :</strong> Déploiement et paramétrage d'AMC selon les besoins spécifiques des utilisateurs.</li>
                        <li><strong>Formation des utilisateurs :</strong> Création de tutoriels et organisation d’ateliers pratiques pour le personnel.</li>
                        <li><strong>Automatisation :</strong> Développement de scripts en Python et VBA pour la génération de QCM et le traitement des résultats.</li>
                        <li><strong>Support et maintenance :</strong> Assistance technique et mise à jour régulière pour assurer une utilisation optimale.</li>
                    </ul>
                    <h5>Résultats obtenus</h5>
                    <ul>
                        <li><strong>Efficacité accrue :</strong> Réduction significative du temps de correction des QCM.</li>
                        <li><strong>Précision améliorée :</strong> Élimination des erreurs humaines, garantissant une évaluation juste des étudiants.</li>
                        <li><strong>Satisfaction des utilisateurs :</strong> Retour positif des enseignants et des étudiants sur la rapidité et la fiabilité du processus.</li>
                    </ul>
                `,
  },
  {
    modalId: "erpEnrollmentModal",
    title: "Création d’un ERP pour la gestion des inscriptions",
    text: "Développement d’un ERP sur mesure pour automatiser la gestion des inscriptions, en collaboration avec un développeur web et un prestataire senior.",
    modalTitle: "Création d’un ERP pour la gestion des inscriptions",
    modalContent: `
                    <p>Ce projet consistait à concevoir et développer un ERP (Enterprise Resource Planning) pour la gestion des inscriptions des étudiants, en collaboration avec un développeur web et un prestataire senior. Réalisé avec le framework Symfony, cet ERP centralise et automatise les processus d’inscription tout en répondant aux besoins spécifiques des équipes administratives et pédagogiques.</p>
                    
                    <h5>Étapes clés du projet</h5>
                    <ul>
                        <li><strong>Recueil des besoins et analyse fonctionnelle :</strong> Organisation de réunions avec les parties prenantes, rédaction du cahier des charges pour lister les fonctionnalités nécessaires.</li>
                        <li><strong>Co-création de la base de données :</strong> Conception de la structure en collaboration avec le prestataire senior, normalisation des données pour optimiser les performances.</li>
                        <li><strong>Développement backend et frontend :</strong>
                            <ul>
                                <li>Utilisation de Symfony pour structurer le backend et gérer les workflows spécifiques.</li>
                                <li>Création d’interfaces intuitives pour les équipes administratives.</li>
                            </ul>
                        </li>
                        <li><strong>Gestion et suivi du projet :</strong> Coordination des équipes, suivi des sprints, et livraisons régulières pour garantir l’avancement.</li>
                        <li><strong>Tests, déploiement et formation :</strong> Vérification de la fiabilité du système, déploiement progressif et formation des utilisateurs finaux.</li>
                    </ul>
                    
                    <h5>Résultats obtenus</h5>
                    <ul>
                        <li><strong>Automatisation des processus :</strong> Centralisation des inscriptions, réduction du temps de traitement.</li>
                        <li><strong>Adaptabilité :</strong> Système évolutif, prêt à intégrer de nouvelles fonctionnalités.</li>
                        <li><strong>Satisfaction des équipes :</strong> ERP apprécié pour sa simplicité et son impact sur la gestion quotidienne.</li>
                        <li><strong>Collaboration réussie :</strong> Coordination efficace entre les développeurs et les utilisateurs finaux.</li>
                    </ul>
                `,
  },
  {
    modalId: "resamatModal",
    title: "Développement et déploiement de la plateforme Resamat",
    text: "Conception et déploiement d’une plateforme en PHP et SQL pour la gestion centralisée des ressources pédagogiques, avec résolution de conflits de réservations et suivi des emprunts.",
    modalTitle: "Développement et déploiement de la plateforme Resamat",
    modalContent: `
                    <p>
                        Ce projet avait pour objectif de développer et de déployer la plateforme Resamat, une solution en ligne permettant aux enseignants, étudiants et personnels de l’Université Paris-Saclay de gérer la réservation de ressources pédagogiques (salles de cours, matériel spécifique, équipements scientifiques). 
                        <br>Conçue en PHP avec une base de données SQL, Resamat offre une interface intuitive pour centraliser la gestion des ressources et prévenir les conflits de réservation.
                    </p>
                    
                    <h5>Étapes clés du projet</h5>
                    <ul>
                        <li><strong>1. Analyse des besoins et spécifications techniques :</strong> Besoins spécifiques des utilisateurs pour définir les fonctionnalités essentielles : règles de réservation (qui autorise, qui est responsable), les restrictions d’accès, et les droits des utilisateurs.</li>
                        
                        <li><strong>2. Développement backend en PHP et SQL avec sécurité car identification gérée sur la plateforme :</strong>
                            <ul>
                                <li>Création d’une structure de base de données en SQL pour stocker les informations relatives aux ressources, utilisateurs et réservations.</li>
                                <li>Stockage sécurisé des éléments d’authentification : Mise en place d’un système de stockage hashé des identifiants et mots de passe des utilisateurs pour garantir la sécurité des données.</li>
                                <li>Développement d’une logique backend pour gérer les règles d’accès, valider la disponibilité des ressources en temps réel, et exécuter des transactions sécurisées pour éviter toute corruption de données.</li>
                            </ul>
                        </li>
                        
                        <li><strong>3. Formulaire de réservation avec gestion des conflits :</strong>
                            <ul>
                                <li>Création d’un formulaire de réservation en ligne permettant aux utilisateurs de choisir leurs ressources et créneaux horaires.</li>
                                <li>Résolution des conflits de disponibilité : Le formulaire vérifie la disponibilité des ressources en temps réel pour éviter les doubles réservations, et propose des créneaux alternatifs en cas de conflit.</li>
                            </ul>
                        </li>
                        
                        <li><strong>4. Suivi des emprunts et établir un processus d’acceptation :</strong>
                            <ul>
                                <li>Suivi détaillé des emprunts de matériels, avec un historique des utilisateurs et des équipements.</li>
                                <li>Processus de validation par e-mail : Après une demande de réservation, un e-mail est automatiquement envoyé au responsable du matériel pour validation. Une fois approuvé, l’utilisateur reçoit une notification par e-mail confirmant la réservation.</li>
                            </ul>
                        </li>
                        
                        <li><strong>5. Interface utilisateur avec vues tableau et calendrier :</strong>
                            <ul>
                                <li>Développement d’une interface intuitive avec vue tableau et calendrier pour faciliter la visualisation des disponibilités et la gestion des emprunts par date, permettant aux utilisateurs de choisir facilement leurs créneaux et d’éviter les conflits de réservation.</li>
                            </ul>
                        </li>
                        
                        <li><strong>6. Formation des utilisateurs :</strong> L'UX a été pensée pour ne pas nécessairement avoir besoin d'une formation ; qui a besoin d'une formation pour faire ses réservations ou achats sur Amazon ?</li>
                    </ul>
                    
                    <h5>Résultats obtenus</h5>
                    <ul>
                        <li><strong>Optimisation de la gestion des ressources :</strong> La structure en SQL et les règles de gestion en PHP ont permis de suivre les réservations, réduire les vols et d’éviter les doubles réservations.</li>
                        <li><strong>Amélioration de l’efficacité et gain de temps :</strong> Grâce aux fonctionnalités de gestion avancée et à l’automatisation du processus de réservation et de validation, les utilisateurs ont pu accéder rapidement aux ressources sans interventions manuelles répétitives.</li>
                        <li><strong>Retour positif et adoption généralisée :</strong> La flexibilité et l’efficacité de Resamat ont encouragé une large adoption parmi les enseignants et étudiants, avec des retours positifs sur la simplicité et la performance de l’interface.</li>
                    </ul>
                    
                    <p>
                        Ce projet a mis en évidence l’importance de l’automatisation et de la centralisation dans la gestion des ressources pédagogiques. Mon rôle a été de superviser le développement en PHP et SQL, de concevoir la base de données, de développer les fonctionnalités backend et frontend, et d’assurer une intégration fluide dans l’infrastructure existante de l’université.
                    </p>
                `,
  },
];

export const pedaproject: ModalItem[] = [
  {
    modalId: "itProjectProgramModal",
    title: "Programme pédagogique en informatique et gestion de projet",
    text: "Conception et animation d’un programme pédagogique innovant intégrant classe inversée, jeux de rôle, vidéo, dev web et portfolios numériques.",
    modalTitle: "Programme pédagogique en informatique et gestion de projet",
    modalContent: `
                    <p>L'ILEPS forme des enseignants et des managers ainsi que des Licences Pro Commerce. Il était indispensable d'établir un programme pédagogique en informatique (bureautique avancée) et gestion de projet pour répondre à leurs besoins spécifiques.
                    <br>Cela, en collaboration avec le responsable informatique et d’autres intervenants. L’objectif était en ma qualité d'ingénieur pédagogique de tenter par la même occasion d'intégrer des approches comme la classe inversée, l'apprentissage par problèmes/projets, la correction par les pairs et les jeux de rôle pédagogiques.</p>
                    
                    <h5>Points clés du projet</h5>
                    <ul>
                        <li><strong>Conception du programme pédagogique :</strong> Définir des compétences clés suivant les formations, structuration des parcours de formation pour une progression cohérente des compétences.</li>
                        <li><strong>Révision /Etablir un socle commun en bureautique</strong> (choix que tous les L1 suivent le même programme) :                             
                        <li><strong>Intégration de la correction par les pairs </strong>dans les exercices pratiques. 
                                <br><strong>Séance type en L1 :</strong>
                                <ol style="padding-left:15px;">
                                    <li>travail commencé en classe,</li>
                                    <li>terminé chez soi avec supports numériques accessibles sur Moodle pdf et vidéos,</li>
                                    <li>corrigé par les pairs en début de cours,</li>
                                    <li>puis questions et approfondir cours théorique et on recommence</li>
                                </ol>
                        </li>                       
                        <li><strong>Cours de gestion de projet sous forme de jeu de rôle :</strong> Scénario fictif pour simuler des contraintes et livrables réels, avec répartition des rôles (chef, resp. qualité, resp. comm) et gestion des délais.</li>
                        <li><strong>Portfolio de compétence pour les licences 2 éducation:</strong> Portfolios numériques où ils définissent une compétence de l'enseignant et se positionnnent en apportant des preuves de leur niveau.</li>
                        <li><strong>Portfolio de projet pour les licences 3 Pro:</strong> Portfolios / page web de présentation CV en ligne au choix sous forme de site web codé par les étudiants non initiés à l'aide de l'ia. cela pour une production finale ayant l'ambition d'être directement utilisable et valorisable pour postuler (exemple de travail produit (1)(2)(3).</li>
                        <li><strong>Excel Avancé pour les licences 3 Management : </strong> Remise à niveau et Construction du cours de manière à attaquer des problèmes qu'ils rencontreront en milieu pro : que faire de ces données ? comment leur donner du sens ! au delà de l'apprentissage de formules Excel développer un esprit critique et aborder sereinement le traitement de tableau massif pour extraire des indicateurs ou construire un dashboard de reporting etc. le niveau des étudiants futurs manager est exploité pour permettre aux "bons" de se positionner comme tuteurs et aider d'autres étudiants pour gagner des points supplémentaires</li>
                        <li><strong>Collaboration, construction et mise en ligne des contenus :</strong> Coordination d'intervenants, mise en ligne et paramétrage des contenus sur le LMS Moodle, et suivi des étudiants, création d'examens et corrigés, correction de copies, réunions pédagogiques et cadrage...</li>
                    </ul>
                    
                    <h5>Résultats obtenus</h5>
                    <ul>
                        <li><strong>Parcours structuré et cohérent :</strong> Meilleure adéquation et satisfaction des étudiants vis à vis des contenus enseignés notamment en LP3 retour très positifs sur la création de sites web de présentation avec l'IA.</li>
                        <li><strong>Engagement des étudiants :</strong> Taux de rendu amélioré via la correction par les pairs par rapport à n-1 et n-2 environ 30% de rendus supplémentaires</li>
                      
                        <li><strong>Moodle :</strong> Utilisation pratique mais fasitdieuse pour le paramétrage des modules Atelier (correction par les pairs).</li>
                        <li><strong>Ecarts :</strong> Tendance à creuser les écarts de niveaux bons très bons et moins bons,moins bons avec plus d'autonomie et l'évaluation par les pairs.</li>
                    </ul>
                `,
    // Suggestion: vérifier les balises <li> non fermées dans la liste ci-dessus
  },
  {
    modalId: "storylineModal",
    title: "Module tutoriel vidéo interactif avec Storyline",
    text: "Création d'un module tutoriel interactif utilisant Articulate Storyline pour prendre en main une plateforme.",
    modalTitle: "Création d'un module interactif avec Storyline",
    modalContent: `
                    <p>Un module interactif guidé pour faire manipuler la plateforme Jupyter aux étudiants grâce à <strong>Articulate Storyline</strong>. L'objectif était de créer l'engagement sans faire face à l'apparente complexité de la plateforme pour des étudiants non familier de la programmation ni du langage Markdown.</p>
                    
                    <h5>Étapes clés du projet</h5>
                    <ul>
                        <li><strong>Analyse des besoins pédagogiques :</strong> Observation et discussions pour identifier les étapes nécessitant une approche interactive afin de faciliter la prise en main.</li>
                        <li><strong>Conception du storyboard :</strong> Élaboration d'un storyboard simple</li>
                        <li><strong>Développement du module avec Storyline :</strong> Utilisation d'Articulate Storyline pour filmer les actions et créer le module interactif, en intégrant un chemin, des scénarios et des feedbacks personnalisés.</li>
                        <li><strong>Tests et ajustements :</strong> Réalisation de tests utilisateurs avec un groupe d'étudiants pour recueillir des retours et apporter les ajustements nécessaires afin d'optimiser le module.</li>
                        <li><strong>Intégration dans le LMS eCampus :</strong> Publication du module au format compatible SCORM pour une intégration dans la plateforme LMS.</li>
                    </ul>
                    
                    <h5>Résultats obtenus</h5>
                    <ul>
                        <li>L'utilisation du module était simple et efficace, mais le temps de création (long) du module et sa plus-value réelle restent à prouver. Peut-être un simple tutoriel vidéo aurait pu suffir.</li>
                    </ul>
                `,
  },
  {
    modalId: "spocsModal",
    title: "Développement de SPOCs",
    text: "Conception et déploiement de Small Private Online Courses (SPOCs).",
    modalTitle: "Développement de SPOCs pédagogiques",
    modalContent: `
                    <p>J'ai été impliqué dans la création de plusieurs SPOCs (Small Private Online Courses) sur le LMS Moodle, pour répondre aux besoins pédagogiques des formations et de l'hybridation.
                    <br>A Paris-Saclay notamment pour mettre en place l'examen final (pour plus de 2000 étudiants). Ou encore à l'ILEPS cette fois en les concevant de A à Z en collaboration avec les enseignants notamment sur des projets de préparation au concours du CAPEPS et agrégation.</p>
                    
                    <h5>Étapes clés du projet</h5>
                    <ul>
                        <li><strong>Analyse des besoins pédagogiques :</strong> Identification des objectifs de chaque SPOC en collaboration avec les enseignants et responsables pédagogiques. Chaque SPOC a été conçu pour répondre à des besoins précis et un niveau d'exigence fort : la préparation à l'ORAL 3 ou l'Ecrit 1 & 2 du CAPEPS/ Agrégation.</li>
                        <li><strong>Création de contenus multimédias :</strong> Vidéos pédagogiques, supports pédagogiques adaptés et scénarisation thématique. Des formats variés ont été utilisés pour maximiser l’engagement et l’apprentissage des participants.</li>
                        <li><strong>Structuration des cours et intégration dans la plateforme :</strong> Organisation des SPOCs en modules et parcours progressifs, avec intégration des contenus dans la plateforme Moodle et des quizz permettant de déverouiller l'accès à la suite du contenu.</li>
                        <li><strong>Suivi et Evaluations :</strong> Mise en place d’un suivi et d'une évaluation QCM finale en plus des QCM formatifs.</li>
                        <li><strong>Formation et accompagnement des enseignants :</strong> Accompagnement des enseignants pour leur permettre de suivre les étudiants. Trouver un moyen de ne pas se heurter au "si je donne mon cours ils n'auront plus besoin de moi" pour aller vers le couplage entre l'utilisation autonome des ressources numériques du SPOC au temps d'accompagnement et à la plus-value de l'enseignement présentiel/distanciel avec l'enseignant. </li>
                        <li><strong>Amélioration continue :</strong> Mise en place d'un QCM feedback des étudiants pour connaitre leur ressenti et améliorer le SPOC (répondre au QCM débloque un bêtisier que j'ai réalisé en montage des chutes des vidéos pédagogiques).</li>
                    </ul>
                    
                    <h5>Résultats obtenus</h5>
                    <ul>
                        <li><strong>Apprentissage flexible et personnalisé :</strong> Les SPOCs ont permis aux étudiants de suivre les formations à leur rythme, en s’adaptant à leurs besoins spécifiques dans une année de Master déjà dense 
.</li>
                        <li><strong>Renforcement des compétences numériques des enseignants :</strong> Grâce aux SPOCs, nous espérons aller à L'ILEPS vers une meilleure intégration de l'hybridation pour la prépa concours même si cela va demander du temps pour définir précisément les meilleures modalités et répartition entre temps autonome en ligne et temps face enseignant.</li>
                        <li><strong>Amélioration de l’engagement des apprenants :</strong> Les contenus interactifs et les évaluations en ligne ont contribué à maintenir l’attention et la motivation des participants dans la majorité des cas et se sont dis satisfait / bien préparés pour le concours.</li>
                    </ul>
                `,
  },
  {
    modalId: "MoodleModal",
    title: "Création de tutoriels et formation sur Moodle",
    text: "Création de tutoriels et supports pédagogiques pour la prise en main d’eCampus, utilisés par plus de 80 000 utilisateurs pour renforcer les compétences numériques des enseignants.",
    modalTitle: "Création de tutoriels et formation sur Moodle",
    modalContent: `
                    <p>
                        Concevoir, organiser, et animer des sessions de formation pour l'utilisation de la plateforme eCampus, le LMS de l’Université Paris-Saclay. L'objectif était de faciliter la prise en main de l'outil par les enseignants et le personnel administratif, afin d’optimiser leurs pratiques pédagogiques numériques et de renforcer la qualité de l’apprentissage en ligne.
                    </p>
                    <h5>Étapes clés du projet</h5>
                    <ul>
                        <li><strong>Analyse des besoins des utilisateurs :</strong> Identification des compétences numériques à renforcer et des fonctionnalités clés d’eCampus nécessitant des tutoriels dédiés.</li>
                        <li><strong>Création de ressources pédagogiques :</strong> Conception de guides et tutoriels PDF et vidéo couvrant des fonctionnalités variées comme la gestion des cours, la création de QCM, et l’utilisation des outils collaboratifs.</li>
                        <li><strong>Organisation de formations :</strong> Mise en place de sessions de formation hebdomadaires, adaptées aux différents niveaux des utilisateurs.</li>
                        <li><strong>Support et assistance continue :</strong> Création d’un espace de support eCampus avec documentation centralisée et FAQ pour une assistance personnalisée.</li>
                        <li><strong>Évaluation et amélioration continue :</strong> Collecte de retours et ajustement des supports en fonction des besoins exprimés.</li>
                    </ul>
                `,
  },
  {
    modalId: "videoHycare",
    title: "Vidéo Projet Hycare",
    text: "Capsules vidéos de vulgarisation et explications de concepts scientifiques en physiologie",
    modalTitle: "Capsules vidéos de vulgarisation avec le Rapidmooc",
    modalContent:
               ` <p>
                    Production d'une série de capsules vidéo pour les cours de physiologie, permettant aux étudiants de revoir les travaux pratiques (TP) et de mieux comprendre des notions complexes. En intégrant des démonstrations filmées et des animations illustratives, les vidéos visaient à renforcer l’apprentissage en permettant aux étudiants d’observer les procédures des TP, de manière à mieux assimiler les concepts de physiologie. Supervision d'enseignants et prestataires pour la création des contenus multimédias.
                </p>
                
                <h5>Étapes clés du projet</h5>
                <ul>
                    <li><strong>Recueil des images et écriture des scripts :</strong> En collaboration avec un doctorant, nous avons rédigé les scripts des vidéos pour structurer chaque concept en fonction des besoins pédagogiques identifiés. L’accent a été mis sur les points critiques, souvent difficiles à aborder en présentiel, afin de cibler les besoins spécifiques des étudiants.</li>
                    
                    <li><strong>Tournage et création de contenu avec le Rapidmooc :</strong> J’ai assuré le filmage de démonstrations avec le dispositif Rapidmooc, et j’ai également accompagné le doctorant dans la prise de ses propres vidéos. L'outil Rapidmooc, est facile à prendre en main avec son interface intuitive et ses outils de prompteur intégrés,ce qui permet de gagner du temps de post-production. J'ai dû réaliser moi-même certaines vidéos avec mon image et ma voix faute de temps, ce qui était malgré la désagréable expérience de se voir et s'écouter les premières fois plutôt formateur pour conseiller les futurs enseignants à qui j'ai appris à réaliser des capsules vidéo.</li>
                    
                    <li><strong>Conception des schémas et animations :</strong> J’ai travaillé avec un prestataire pour la réalisation des animations. À partir des schémas que nous avons créés, j’ai défini un cahier des charges précis pour guider le prestataire dans l’animation des concepts physiologiques. L'objectif était de rendre le plus attractif et simple la compréhension visuelle des étudiants.</li>
                    
                    <li><strong>Montage et finalisation des vidéos :</strong> J’ai pris en charge plusieurs étapes du montage avec le logiciel Camtasia, intégrant les éléments animés et filmés pour créer une continuité visuelle et rendre le contenu plus fluide.</li>
                </ul>
                
                <h5>Résultats obtenus</h5>
                <ul>
                    <li><strong>Renforcement de l’apprentissage par l'action :</strong> Les vidéos ont permis aux étudiants de revoir les TP et d’observer les procédures en détail, ce qui a facilité la compréhension des notions plus complexes.</li>
                    <li><strong>Engagement des étudiants :</strong> Le format court et visuel des vidéos a soutenu l’engagement des étudiants, avec la possibilité de réviser les démonstrations à leur rythme.</li>
                    <li><strong>Retour positif des enseignants et étudiants :</strong> Les vidéos ont été bien accueillies comme complément aux cours sur le LMS Moodle et ce type de support a suscité un intérêt pour des initiatives similaires dans d’autres disciplines.</li>
                </ul>
                `
  }
];

export const mycompetencies: ModalItem[] = [
  {
    modalId: "needsanalisys",
    title: "Recueil, analyse et redéfinition du besoin en projet",
    text: "Concertation et animation de réunions",
    modalTitle: "Recueil, analyse et redéfinition du besoin en projet",
    modalContent: `
                    <p>Il s'agit de poser les bonnes bases pour mener à bien un projet. Il est également essentiel d'identifier les éventuels points blocants</p>
                    
                    
                `
  },
  {
    modalId: "establishprocess",
    title: "Etablir des process",
    text: "comme parttout il est indispensable de rédiger des process",
    modalTitle: "Etablir des process",
    modalContent: `
                    <p>comme parttout il est indispensable de rédiger des process</p>
                    
                    
                `
  }
];

export const GROUPS = {
  tech: [techProjects],
  pedago: [pedaproject, mycompetencies],
  proj: [techProjects], // ou autre combinaison
};
