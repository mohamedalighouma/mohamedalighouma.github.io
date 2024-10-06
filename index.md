<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mohamed Ali Ghouma - DevOps Portfolio</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            line-height: 1.6;
            background-color: #f5f5f5;
            color: #333;
            margin: 0;
            padding: 0;
        }
        header {
            position: fixed;
            top: 0;
            width: 100%;
            background: #fff;
            padding: 20px;
            z-index: 1000;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .logo img {
            width: 60px;
        }
        nav ul {
            list-style: none;
            display: flex;
            gap: 20px;
        }
        nav ul li {
            margin: 0;
        }
        nav ul a {
            color: #333;
            text-decoration: none;
            font-weight: bold;
            transition: color 0.3s;
        }
        nav ul a:hover {
            color: #00bcd4;
        }
        .hero {
            height: 100vh;
            background: url('/assets/images/hero-bg.jpg') no-repeat center center/cover;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
            color: #fff;
        }
        .hero h1 {
            font-size: 4rem;
            margin-bottom: 20px;
            text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
        }
        .hero p {
            font-size: 1.5rem;
            margin-bottom: 20px;
        }
        .social-icons a {
            margin: 0 15px;
            color: #fff;
            font-size: 2rem;
            transition: color 0.3s;
        }
        .social-icons a:hover {
            color: #00bcd4;
        }
        section {
            padding: 80px 20px;
            max-width: 1200px;
            margin: 0 auto;
        }
        section h2 {
            font-size: 2.5rem;
            margin-bottom: 20px;
            color: #00bcd4;
            text-align: center;
        }
        .skills {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 20px;
            text-align: center;
        }
        .skill-card {
            background: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s;
        }
        .skill-card:hover {
            transform: translateY(-10px);
        }
        .skill-card i {
            font-size: 3rem;
            margin-bottom: 10px;
            color: #00bcd4;
        }
        .timeline {
            position: relative;
            padding: 20px 0;
            list-style: none;
        }
        .timeline:before {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 4px;
            height: 100%;
            background: #00bcd4;
        }
        .timeline-item {
            margin: 20px 0;
            padding-left: 50%;
            position: relative;
        }
        .timeline-item:before {
            content: '';
            position: absolute;
            left: 50%;
            top: 20px;
            transform: translateX(-50%);
            width: 20px;
            height: 20px;
            background: #00bcd4;
            border-radius: 50%;
        }
        .timeline-content {
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            position: relative;
            max-width: 450px;
            text-align: left;
        }
        .timeline-content h3 {
            font-size: 1.6rem;
            font-weight: bold;
            color: #333;
        }
        .timeline-content h4 {
            margin-top: 10px;
            font-size: 1rem;
            color: #777;
        }
        .portfolio {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
        }
        .portfolio-item {
            background: #fff;
            border-radius: 10px;
            overflow: hidden;
            transition: transform 0.3s;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .portfolio-item:hover {
            transform: translateY(-10px);
        }
        .portfolio-item img {
            width: 100%;
            display: block;
        }
        .portfolio-item h3 {
            padding: 10px;
            color: #333;
        }
        #contact-form {
            display: flex;
            flex-direction: column;
            max-width: 600px;
            margin: 0 auto;
            gap: 15px;
        }
        #contact-form input, #contact-form textarea {
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ccc;
            background: #fff;
            color: #333;
        }
        #contact-form button {
            padding: 15px;
            border: none;
            background: #00bcd4;
            color: #fff;
            cursor: pointer;
            font-weight: bold;
            border-radius: 5px;
            transition: background 0.3s;
        }
        #contact-form button:hover {
            background: #00a3c4;
        }
        footer {
            text-align: center;
            padding: 20px;
            background-color: #fff;
            color: #333;
            box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
        }
        .footer-icons a {
            margin: 0 10px;
            color: #333;
            transition: color 0.3s;
        }
        .footer-icons a:hover {
            color: #00bcd4;
        }
    </style>
</head>
<body>
    <header>
        <div class="header-container">
            <div class="logo">
                <img src="/assets/images/logo.png" alt="Logo">
            </div>
            <nav>
                <ul>
                    <li><a href="#about">À propos</a></li>
                    <li><a href="#skills">Compétences</a></li>
                    <li><a href="#experience">Expérience</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <div class="hero">
        <h1>Mohamed Ali Ghouma</h1>
        <p>Senior DevOps Cloud SRE Engineer</p>
        <div class="social-icons">
            <a href="https://github.com/mohamedalighouma"><i class="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/mohamed-alighouma"><i class="fab fa-linkedin"></i></a>
        </div>
    </div>

    <section id="about">
        <h2>À propos de moi</h2>
        <p>Ingénieur DevOps expert en automatisation, orchestration des conteneurs, et intégration continue. Passionné par l'optimisation des processus de déploiement pour assurer des livraisons continues fluides et une disponibilité optimale des applications.</p>
    </section>

    <section id="skills">
        <h2>Compétences</h2>
        <div class="skills">
            <div class="skill-card">
                <i class="fas fa-server"></i>
                <h3>Cloud Automation</h3>
                <p>Expert in automating complex infrastructure with Kubernetes, Docker, and Ansible.</p>
            </div>
            <div class="skill-card">
                <i class="fas fa-sync-alt"></i>
                <h3>CI/CD Pipelines</h3>
                <p>Mastery in Jenkins, GitLab CI, and ArgoCD to ensure seamless integration and delivery.</p>
            </div>
            <div class="skill-card">
                <i class="fas fa-tools"></i>
                <h3>Incident Management</h3>
                <p>Proactive and reactive skills in managing production incidents and maintaining continuity.</p>
            </div>
        </div>
    </section>

    <section id="experience">
        <h2>Expérience</h2>
        <ul class="timeline">
            <li class="timeline-item">
                <div class="timeline-content">
                    <h3>Ingénieur DevOps</h3>
                    <h4>Capgemini, Juillet 2023 - Juillet 2024</h4>
                    <p>Amélioration de l'infrastructure DevOps existante, conteneurisation avec Docker, développement de scripts Shell, et conception de cloud infrastructure résiliente via AWS.</p>
                </div>
            </li>
            <li class="timeline-item">
                <div class="timeline-content">
                    <h3>Ingénieur DevOps</h3>
                    <h4>Focus International, Janvier 2019 - Juin 2023</h4>
                    <p>Mise en place de l'infrastructure DevOps complète pour le département web, orchestration avec Kubernetes, et intégration continue avec Jenkins.</p>
                </div>
            </li>
            <li class="timeline-item">
                <div class="timeline-content">
                    <h3>Ingénieur DevOps</h3>
                    <h4>Linedata, Février 2018 - Décembre 2019</h4>
                    <p>Responsable de l'automatisation des processus de déploiement, conteneurisation des systèmes avec Docker, et surveillance proactive des systèmes avec Grafana.</p>
                </div>
            </li>
        </ul>
    </section>

    <section id="portfolio">
        <h2>Portfolio</h2>
        <div class="portfolio">
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
        </div>
    </section>

    <section id="contact">
        <h2>Contact</h2>
        <form id="contact-form">
            <input type="text" name="name" placeholder="Your Name" required>
            <input type="email" name="email" placeholder="Your Email" required>
            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
        </form>
    </section>

    <footer>
        <div class="footer-icons">
            <a href="https://github.com/mohamedalighouma"><i class="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/mohamed-alighouma"><i class="fab fa-linkedin"></i></a>
        </div>
        <p>&copy; 2024 Mohamed Ali Ghouma. All rights reserved.</p>
    </footer>
</body>
</html>
