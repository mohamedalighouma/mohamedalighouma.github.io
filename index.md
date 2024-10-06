<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mohamed Ali Ghouma - DevOps Portfolio</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        header {
            position: sticky;
            top: 0;
            background-color: #333;
            color: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
            z-index: 1000;
        }
        .logo img {
            width: 50px;
        }
        .nav-links {
            list-style: none;
            display: flex;
        }
        .nav-links li {
            margin-left: 20px;
        }
        .nav-links a {
            text-decoration: none;
            color: #fff;
            transition: color 0.3s;
        }
        .nav-links a:hover {
            color: #00bcd4;
        }
        section {
            margin: 40px auto;
            padding: 20px;
            max-width: 1000px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        }
        footer {
            text-align: center;
            padding: 20px;
            background-color: #333;
            color: #fff;
            margin-top: 40px;
        }
        .social-media a {
            margin: 0 10px;
            color: #fff;
            transition: color 0.3s;
        }
        .social-media a:hover {
            color: #00bcd4;
        }
        #contact {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        #contact p {
            margin: 5px 0;
        }
        #contact a {
            color: #333;
            text-decoration: none;
            font-weight: bold;
        }
        #contact a:hover {
            color: #00bcd4;
        }
    </style>
</head>
<body>
    <header>
        <div class="logo animate__animated animate__bounceIn">
            <img src="/assets/images/logo.png" alt="Logo">
        </div>
        <nav>
            <ul class="nav-links">
                <li><a href="#about">À propos</a></li>
                <li><a href="#highlights">Atouts</a></li>
                <li><a href="#professional-experience">Expériences</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section id="about">
        <h1>Mohamed Ali Ghouma</h1>
        <p><strong>Senior DevOps Cloud SRE Engineer</strong></p>
        <p>Phone: +33 0758151884</p>
        <p>Email: <a href="mailto:ghouma.mohamed.ali@gmail.com">ghouma.mohamed.ali@gmail.com</a></p>
    </section>
    <hr>

    <section id="languages">
        <h2>Langues</h2>
        <ul>
            <li><strong>Français</strong>: Bilingue</li>
            <li><strong>Anglais</strong>: Bilingue</li>
        </ul>
    </section>
    <hr>

    <section id="highlights" class="animate__animated animate__fadeInLeft">
        <h2>Atouts</h2>
        <ul>
            <li><strong>Maîtrise de l'Automatisation et de l'Orchestration Cloud</strong>: Expert dans l’automatisation d’infrastructures complexes, utilisant Kubernetes, Docker, GitOps, et Ansible pour garantir l'efficacité, la scalabilité et la haute disponibilité des environnements cloud.</li>
            <li><strong>Optimisation et Fiabilité des Pipelines CI/CD</strong>: Spécialiste dans la mise en place, l’optimisation, et la gestion des pipelines CI/CD avec Jenkins, GitLab CI, et ArgoCD, garantissant une intégration continue fluide et des déploiements rapides.</li>
            <li><strong>Résolution de Problèmes Complexes</strong>: Capacité à analyser et résoudre des problèmes techniques complexes de manière efficace et rapide, en utilisant des outils et des méthodes adaptés au métier d'Ingénieur DevOps.</li>
            <li><strong>Réactivité et Gestion des Incidents en Production</strong>: Capacité éprouvée à intervenir rapidement lors d’incidents critiques, tout en assurant la continuité des services essentiels avec une approche méthodique et proactive.</li>
        </ul>
    </section>
    <hr>

    <section id="professional-experience" class="animate__animated animate__fadeInRight">
        <h2>Expériences Professionnelles</h2>
        <article>
            <h3>Ingénieur DevOps - Capgemini, Bordeaux, France (Juillet 2023 – Juillet 2024)</h3>
            <p><strong>Contexte et Objectifs</strong>: Optimisation de l’infrastructure DevOps pour Air France afin d’améliorer les processus de développement et de déploiement dans un environnement AWS.</p>
            <p><strong>Réalisations Clés</strong>:</p>
            <ul>
                <li>Automatisation complète des pipelines CI/CD avec AWS CodePipeline et Jenkins, accélérant les cycles de livraison.</li>
                <li>Conteneurisation des applications avec Docker, réduisant les délais de mise en production.</li>
                <li>Conception et déploiement d'infrastructures cloud résilientes via AWS CloudFormation et CDK, assurant une gestion robuste des services.</li>
                <li>Développement de scripts Shell pour automatiser la gestion des logs et améliorer la surveillance des performances.</li>
                <li>Gestion centralisée des artefacts avec AWS CodeArtifact, réduisant les erreurs liées aux versions et facilitant la gestion des dépendances.</li>
            </ul>
        </article>

        <article>
            <h3>Ingénieur DevOps - Focus International, Tunis, Tunisie (Janvier 2019 – Juin 2023)</h3>
            <p><strong>Contexte et Objectifs</strong>: Mise en place complète de l'infrastructure DevOps pour le département web de Focus International.</p>
            <p><strong>Réalisations Clés</strong>:</p>
            <ul>
                <li>Automatisation des processus de déploiement et des tests, augmentant significativement l'efficacité des cycles de développement.</li>
                <li>Mise en place de stratégies de déploiement automatisé et d'intégration continue via Kubernetes et GitOps.</li>
                <li>Gestion des pipelines CI/CD pour quatre environnements distincts avec Jenkins, garantissant des déploiements sécurisés et une intégration fluide.</li>
                <li>Orchestration et gestion des clusters Docker Swarm et Kubernetes avec Ansible, garantissant la scalabilité et la haute disponibilité des services.</li>
                <li>Déploiement d'applications multi-environnements utilisant Kubernetes, Docker Swarm, et Docker Compose, assurant une gestion flexible des projets.</li>
            </ul>
        </article>

        <article>
            <h3>Ingénieur DevOps - Linedata, Tunis, Tunisie (Février 2018 – Décembre 2019)</h3>
            <p><strong>Contexte et Objectifs</strong>: Mise en place complète de l'infrastructure DevOps depuis zéro, avec pour objectif principal d'automatiser les processus de déploiement et de tests.</p>
            <p><strong>Réalisations Clés</strong>:</p>
            <ul>
                <li>Automatisation des processus de déploiement et de tests, incluant la qualité, la performance, et les tests unitaires.</li>
                <li>Conteneurisation des systèmes avec Docker, augmentant la disponibilité et la portabilité des applications.</li>
                <li>Surveillance en temps réel des applications avec Prometheus et Grafana, garantissant la détection rapide des anomalies.</li>
                <li>Analyse des logs avec la EFK Stack, améliorant la traçabilité des erreurs et accélérant la résolution des incidents.</li>
            </ul>
        </article>
    </section>
    <hr>

    <section id="portfolio" class="animate__animated animate__fadeInUp">
        <h2>Portfolio</h2>
        <div class="portfolio-item">
            <img src="/assets/images/project1.jpg" alt="Project 1">
            <h3>Project 1 Title</h3>
            <p>Short description of the project. <a href="projects/project1.html">Learn more...</a></p>
        </div>
        <div class="portfolio-item">
            <img src="/assets/images/project2.jpg" alt="Project 2">
            <h3>Project 2 Title</h3>
            <p>Short description of the project. <a href="projects/project2.html">Learn more...</a></p>
        </div>
    </section>
    <hr>

    <section id="education">
        <h2>Diplômes et Formations</h2>
        <ul>
            <li><strong>Diplôme d'Ingénieur en Informatique</strong> - École Nationale d'Ingénieurs de Carthage, Tunisie (Septembre 2014 – Juin 2017)</li>
            <li><strong>Cycle Préparatoire en Sciences d’Ingénieur</strong> - Institut Préparatoire aux Études d'Ingénieurs de Nabeul, Tunisie (Septembre 2012 – Juin 2014)</li>
            <li><strong>Baccalauréat en Sciences Expérimentales</strong> - Lycée Technique de Zarzis, Tunisie (2008 – 2012)</li>
        </ul>
    </section>
    <hr>

    <section id="contact">
        <h2>Contact</h2>
        <div>
            <p>Feel free to reach out for collaborations or just a friendly chat.</p>
            <p>Email: <a href="mailto:ghouma.mohamed.ali@gmail.com">ghouma.mohamed.ali@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/mohamed-alighouma">Mohamed Ali Ghouma</a></p>
        </div>
    </section>

    <footer>
        <div class="social-media">
            <a href="https://github.com/mohamedalighouma"><i class="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/mohamed-alighouma"><i class="fab fa-linkedin"></i></a>
        </div>
        <p>&copy; 2024 Mohamed Ali Ghouma. All rights reserved.</p>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>
