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
            font-family: Arial, sans-serif;
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
            background: url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Network_Animation_Example.gif/800px-Network_Animation_Example.gif') no-repeat center;
            background-size: cover;
            z-index: 0;
            opacity: 0.5;
        }

        .content {
            position: relative;
            z-index: 1;
        }

        .avatar {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            border: 3px solid white;
        }

        h1 {
            margin-top: 20px;
            font-size: 3rem;
            font-family: 'Brush Script MT', cursive;
        }

        p {
            font-size: 1.2rem;
            margin-bottom: 20px;
        }

        .social-icons {
            display: flex;
            gap: 20px;
        }

        .social-icons a {
            color: white;
            text-decoration: none;
            font-size: 2rem;
        }

    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <div class="header">
        <div class="background-animation"></div>
        <div class="content">
            <img src="https://via.placeholder.com/150" alt="Avatar" class="avatar">
            <h1>Mohamed Ali Ghouma</h1>
            <p>DevOps Engineer & Cloud Enthusiast</p>
            <div class="social-icons">
                <a href="#"><i class="fab fa-linkedin"></i></a>
                <a href="#"><i class="fab fa-github"></i></a>
            </div>
        </div>
    </div>
</body>
</html>
