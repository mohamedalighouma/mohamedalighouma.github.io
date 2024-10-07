<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Header Section</title>
    
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Poppins', sans-serif;
            background-color: #f39c12;
            color: white;
            overflow: hidden;
        }

        .header {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            text-align: center;
            position: relative;
        }

        .background-animation {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            opacity: 0.3;
        }

        .content {
            position: relative;
            z-index: 1;
            padding: 20px;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 10px;
        }

        .avatar {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            border: 5px solid #ffffff;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
        }

        h1 {
            margin-top: 20px;
            font-size: 3rem;
            font-family: 'Brush Script MT', cursive;
            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
        }

        p {
            font-size: 1.4rem;
            margin-bottom: 20px;
            font-weight: 300;
        }

        .social-icons {
            display: flex;
            gap: 20px;
            margin-bottom: 20px;
        }

        .social-icons a {
            color: white;
            text-decoration: none;
            font-size: 2.5rem;
            transition: transform 0.3s;
        }

        .social-icons a:hover {
            transform: scale(1.2);
        }

        .buttons {
            margin-top: 20px;
            display: flex;
            gap: 15px;
        }

        .button {
            padding: 12px 25px;
            background-color: #ffffff;
            color: #f39c12;
            text-decoration: none;
            font-weight: bold;
            border-radius: 30px;
            transition: background-color 0.3s, color 0.3s, transform 0.3s;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }

        .button:hover {
            background-color: #f39c12;
            color: #ffffff;
            transform: translateY(-3px);
        }

    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="header">
        <div class="background-animation" id="background-animation"></div>
        <div class="content">
            
            
            <img src="photos/photo.jpg" alt="Avatar" class="avatar">
            <h1>Mohamed Ali Ghouma</h1>
            <p>DevOps Engineer & Cloud Enthusiast</p>
            
            <div class="social-icons">
                <a href="https://www.linkedin.com/in/mohamed-ali-g/" target="_blank"><i class="fab fa-linkedin"></i></a>
                <a href="https://github.com/mohamedalighouma" target="_blank"><i class="fab fa-github"></i></a>
                <a href="mailto:ghouma.mohamed.ali@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a>
                <a href="https://www.upwork.com/freelancers/~01c6b5a3a3a4d4e6da" target="_blank"><i class="fab fa-upwork"></i></a>
                <a href="https://www.credly.com/users/mohamed-ali-ghouma/edit" target="_blank"><i class="fas fa-certificate"></i></a>
                <a href="https://medium.com/@ghouma.mohamed.ali" target="_blank"><i class="fab fa-medium"></i></a>
                <a href="https://wa.me/33758151884" target="_blank"><i class="fab fa-whatsapp"></i></a>
            </div>
            <div class="buttons" style="justify-content: center;">
                <a href="documents/CV" download class="button">Download CV</a>
            </div>
    </div>

    <section id="about" style="background: #fff; color: #333; padding: 50px 20px;">
        <div style="max-width: 800px; margin: 0 auto; text-align: center;">
            <h2>About Me</h2>
            <p>Hello There! My name is Mohamed Ali Ghouma, a DevOps engineer with expertise in automation, cloud orchestration, and continuous integration. Passionate about optimizing deployment processes, I strive to automate and ensure the reliability of systems to guarantee smooth continuous delivery and optimal availability of applications. My goal is to support businesses in their digital transformation by providing efficient technical solutions.</p>
            <div style="display: flex; justify-content: space-around; max-width: 600px; margin: 30px auto;">
                <div style="text-align: left;">
                    <p><strong>Full Name:</strong> Mohamed Ali Ghouma</p>
                    <p><strong>Email:</strong> <a href="mailto:ghouma.mohamed.ali@gmail.com">ghouma.mohamed.ali@gmail.com</a></p>
                    <p><strong>Website:</strong> <a href="https://mohamedalighouma.github.io/">https://mohamedalighouma.github.io/</a></p>
                    <p><strong>Location:</strong> Bordeaux, France</p>
                </div>
            </div>
        </div>
    </section>

    <section id="resume" style="background: #f7f7f7; padding: 50px 20px;">
        <div style="max-width: 800px; margin: 0 auto;">
            <h2 style="text-align: center;">My Resume</h2>
            <h3>Work Experience</h3>
            <div style="margin-bottom: 20px;">
                <h4>DevOps Engineer at Capgemini Bordeaux (July 2023 - July 2024)</h4>
                <p>Worked on optimizing Air France's DevOps infrastructure, with a focus on automation, reducing delivery times, and enhancing system stability in an AWS environment. Key achievements include automation of CI/CD pipelines with AWS CodePipeline and Jenkins, containerization with Docker, and cloud infrastructure design with CloudFormation and AWS CDK.</p>
            </div>
            <div style="margin-bottom: 20px;">
                <h4>DevOps Engineer at Focus International Tunis (January 2019 - June 2023)</h4>
                <p>Responsible for setting up the complete DevOps infrastructure for the web department, focusing on optimizing development cycles, automating deployment and testing processes, and improving system reliability. Key technologies used include Ansible, Kubernetes, GitOps (ArgoCD), and Jenkins.</p>
            </div>
            <div style="margin-bottom: 20px;">
                <h4>DevOps Engineer at Linedata Tunis (January 2017 - December 2018)</h4>
                <p>Built the DevOps infrastructure from scratch, with a focus on automation, deployment processes, and reliability improvements. Key technologies include Jenkins, Docker, Kubernetes, and Prometheus.</p>
            </div>
        </div>
    </section>
    <script>
        const canvas = document.createElement('canvas');
        document.getElementById('background-animation').appendChild(canvas);
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particles = [];

        function Particle(x, y) {
            this.x = x;
            this.y = y;
            this.vx = Math.random() * 2 - 1;
            this.vy = Math.random() * 2 - 1;
            this.radius = Math.random() * 3;
        }

        Particle.prototype.update = function() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        };

        Particle.prototype.draw = function() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
            ctx.fill();
        };

        function createParticles() {
            particles = [];
            for (let i = 0; i < 100; i++) {
                particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height));
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            requestAnimationFrame(animate);
        }

        createParticles();
        animate();

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            createParticles();
        });
    </script>
</body>
</html>
