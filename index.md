<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mohamed Ali Ghouma - DevOps Portfolio</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
    <style>
        /* General Styles */
        body {
            font-family: 'Poppins', sans-serif;
            line-height: 1.6;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        header {
            position: fixed;
            top: 0;
            width: 100%;
            background-color: #333;
            color: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            z-index: 1000;
        }

        .logo img {
            width: 50px;
        }

        nav ul {
            list-style: none;
            display: flex;
        }

        nav ul li {
            margin-left: 20px;
        }

        nav ul a {
            text-decoration: none;
            color: #fff;
            transition: color 0.3s;
        }

        nav ul a:hover {
            color: #00bcd4;
        }

        /* Hero Section */
        .hero {
            height: 100vh;
            background: url('/assets/images/hero-bg.jpg') no-repeat center center/cover;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            text-align: center;
        }

        .hero h1 {
            font-size: 3rem;
        }

        .hero p {
            font-size: 1.5rem;
            margin-top: 10px;
        }

        .hero .social-icons a {
            margin: 0 15px;
            font-size: 1.5rem;
            color: white;
            transition: color 0.3s;
        }

        .hero .social-icons a:hover {
            color: #00bcd4;
        }

        /* Section Styles */
        section {
            padding: 60px 20px;
            max-width: 1100px;
            margin: 0 auto;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
            margin-bottom: 40px;
        }

        /* Skill Cards */
        .skills {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }

        .skill-card {
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        .skill-card h3 {
            margin-top: 10px;
            font-size: 1.2rem;
        }

        /* Portfolio Section */
        .portfolio {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
        }

        .portfolio-item {
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            transition: transform 0.3s ease;
        }

        .portfolio-item:hover {
            transform: translateY(-10px);
        }

        .portfolio-item img {
            width: 100%;
        }

        /* Footer */
        footer {
            text-align: center;
            padding: 20px;
            background-color: #333;
            color: #fff;
        }

        .social-media a {
            margin: 0 10px;
            color: #fff;
            font-size: 1.5rem;
            transition: color 0.3s;
        }

        .social-media a:hover {
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
                <li><a href="#skills">Compétences</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <div class="hero">
        <div>
            <h1>Mohamed Ali Ghouma</h1>
            <p>Senior DevOps Cloud SRE Engineer</p>
            <div class="social-icons">
                <a href="https://github.com/mohamedalighouma"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/mohamed-alighouma"><i class="fab fa-linkedin"></i></a>
            </div>
        </div>
    </div>

    <section id="about">
        <h2>À propos de moi</h2>
        <p>Ingénieur DevOps expert en automatisation, orchestration des conteneurs et intégration continue. Passionné par l'optimisation des processus de déploiement pour assurer des livraisons continues fluides et une disponibilité optimale des applications.</p>
    </section>

    <section id="skills">
        <h2>Compétences</h2>
        <div class="skills">
            <div class="skill-card">
                <i class="fas fa-cogs fa-3x"></i>
                <h3>Automatisation Cloud</h3>
                <p>Expert dans l'automatisation des infrastructures complexes en utilisant Kubernetes, Docker, et Ansible.</p>
            </div>
            <div class="skill-card">
                <i class="fas fa-sync-alt fa-3x"></i>
                <h3>CI/CD Pipelines</h3>
                <p>Maîtrise de Jenkins, GitLab CI, et ArgoCD pour garantir une intégration et des déploiements continus.</p>
            </div>
            <div class="skill-card">
                <i class="fas fa-tools fa-3x"></i>
                <h3>Gestion des Incidents</h3>
                <p>Proactif et réactif dans la gestion des incidents pour assurer la continuité des services essentiels.</p>
            </div>
        </div>
    </section>

    <section id="portfolio">
        <h2>Portfolio</h2>
        <div class="portfolio">
            <div class="portfolio-item">
                <img src="/assets/images/project1.jpg" alt="Project 1">
                <h3>Project 1</h3>
                <p>Short description of the project. <a href="projects/project1.html">Learn more...</a></p>
            </div>
            <div class="portfolio-item">
                <img src="/assets/images/project2.jpg" alt="Project 2">
                <h3>Project 2</h3>
                <p>Short description of the project. <a href="projects/project2.html">Learn more...</a></p>
            </div>
        </div>
    </section>

    <section id="contact">
        <h2>Contact</h2>
        <p>Feel free to reach out for collaborations or just a friendly chat.</p>
        <p>Email: <a href="mailto:ghouma.mohamed.ali@gmail.com">ghouma.mohamed.ali@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/mohamed-alighouma">Mohamed Ali Ghouma</a></p>
    </section>

    <footer>
        <div class="social-media">
            <a href="https://github.com/mohamedalighouma"><i class="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/mohamed-alighouma"><i class="fab fa-linkedin"></i></a>
        </div>
        <p>&copy; 2024 Mohamed Ali Ghouma. All rights reserved.</p>
    </footer>
</body>

</html>
