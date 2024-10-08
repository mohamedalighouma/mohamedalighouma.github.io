<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Header Section</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
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
            <div class="buttons">
                <a href="documents/CV" download class="button">Download CV</a>
            </div>
        </div>
    </div>

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
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.fill();
        };

        function createParticles() {
            particles = [];
            for (let i = 0; i < 150; i++) {
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
