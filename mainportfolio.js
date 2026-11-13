
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Harini Seenuvasan | Web Developer</title>

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">

    <style>

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            scroll-behavior: smooth;
        }

        body {
            background-color: #0b1020;
            color: white;
            font-family: Arial, sans-serif;
        }

        /* Navbar */

        .navbar {
            background-color: #11182b;
            padding: 18px 0;
        }

        .navbar-brand {
            color: #a78bfa;
            font-size: 27px;
            font-weight: bold;
        }

        .navbar-brand:hover {
            color: #c4b5fd;
        }

        .nav-link {
            color: white;
            margin-left: 15px;
        }

        .nav-link:hover {
            color: #a78bfa;
        }

        /* Home */

        .home {
            min-height: 90vh;
            display: flex;
            align-items: center;
        }

        .home h1 {
            font-size: 55px;
            font-weight: bold;
        }

        .home span {
            color: #a78bfa;
        }

        .home h3 {
            color: #c4b5fd;
        }

        .profile-box {
            background: linear-gradient(135deg, #30245b, #182239);
            border: 1px solid #8b5cf6;
            padding: 45px 20px;
            border-radius: 25px;
            text-align: center;
        }

        .profile-box h1 {
            font-size: 90px;
        }

        /* Common Sections */

        .section {
            padding: 85px 0;
        }

        .section-title {
            color: #a78bfa;
            font-size: 35px;
            font-weight: bold;
            text-align: center;
            margin-bottom: 40px;
        }

        .section-text {
            color: #cbd5e1;
            line-height: 1.8;
        }

        /* Buttons */

        .btn-custom {
            background-color: #8b5cf6;
            color: white;
            padding: 12px 25px;
            border-radius: 30px;
            border: none;
            text-decoration: none;
            display: inline-block;
        }

        .btn-custom:hover {
            background-color: #6d28d9;
            color: white;
        }

        /* Cards */

        .custom-card {
            background-color: #182239;
            border: 1px solid #293650;
            padding: 25px;
            border-radius: 15px;
            height: 100%;
            transition: 0.3s;
        }

        .custom-card:hover {
            transform: translateY(-8px);
            border-color: #8b5cf6;
        }

        .custom-card h4 {
            color: #a78bfa;
            margin-bottom: 15px;
        }

        .custom-card p {
            color: #cbd5e1;
            line-height: 1.7;
        }

        /* Skills */

        .skill {
            background-color: #182239;
            padding: 18px;
            border-radius: 10px;
            text-align: center;
            border: 1px solid #293650;
        }

        .skill h5 {
            color: #c4b5fd;
            margin: 0;
        }

        /* Education */

        .edu-date {
            color: #a78bfa;
            font-weight: bold;
        }

        /* Contact */

        .contact-link {
            color: #c4b5fd;
            text-decoration: none;
            word-break: break-word;
        }

        .contact-link:hover {
            color: white;
        }

        /* Footer */

        footer {
            background-color: #11182b;
            padding: 22px;
            text-align: center;
            color: #cbd5e1;
        }

        /* Responsive */

        @media (max-width: 768px) {

            .home {
                text-align: center;
                min-height: 75vh;
                padding: 60px 0;
            }

            .home h1 {
                font-size: 38px;
            }

            .home h3 {
                font-size: 22px;
            }

            .profile-box {
                margin-top: 35px;
            }

            .section {
                padding: 55px 15px;
            }

            .section-title {
                font-size: 28px;
            }

            .nav-link {
                margin-left: 0;
            }
        }

    </style>

</head>

<body>

    <!-- NAVBAR -->

    <nav class="navbar navbar-expand-lg navbar-dark sticky-top">

        <div class="container">

            <a class="navbar-brand" href="#home">
                HARINI.
            </a>

            <button class="navbar-toggler" type="button"
            data-bs-toggle="collapse" data-bs-target="#menu">

                <span class="navbar-toggler-icon"></span>

            </button>

            <div class="collapse navbar-collapse" id="menu">

                <ul class="navbar-nav ms-auto">

                    <li class="nav-item">
                        <a class="nav-link" href="#home">Home</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#about">About</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#education">Education</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#skills">Skills</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#internship">Internship</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#projects">Projects</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact</a>
                    </li>

                </ul>

            </div>

        </div>

    </nav>


    <!-- HOME SECTION -->

    <section class="home" id="home">

        <div class="container">

            <div class="row align-items-center">

                <div class="col-md-7">

                    <h5>Hello, I'm</h5>

                    <h1>
                        Harini <span>Seenuvasan</span>
                    </h1>

                    <h3>Web Developer</h3>

                    <p class="section-text mt-3">
                        Motivated Computer Science graduate seeking
                        an entry-level IT position in Web Development.
                        Passionate about creating modern and responsive
                        websites using web technologies.
                    </p>

                    <a href="#projects" class="btn-custom mt-3">
                        View My Projects
                    </a>

                    <a href="#contact" class="btn-custom mt-3 ms-2">
                        Contact Me
                    </a>
                    <a href="resume.pdf.pdf" download class="btn-custom mt-3 ms-2">
                        Download Resume
                    </a>

                </div>

                <div class="col-md-5">

                    <div class="profile-box">

                        <h1>👩‍💻</h1>

                        <h2>Harini</h2>

                        <p>Web Developer</p>

                        <p>Creative | Dedicated | Passionate</p>

                    </div>

                </div>

            </div>

        </div>

    </section>


    <!-- ABOUT SECTION -->

    <section class="section" id="about">

        <div class="container">

            <h2 class="section-title">About Me</h2>

            <div class="row justify-content-center">

                <div class="col-md-9 text-center">

                    <p class="section-text">
                        I am a motivated Computer Science graduate
                        interested in Web Development and Software
                        Development. I have knowledge of HTML, CSS,
                        JavaScript, Python and database management.

                        I have hands-on experience through academic
                        projects and an Artificial Intelligence internship.
                        I am eager to apply my technical skills,
                        improve my knowledge and grow as a Web Developer.
                    </p>

                </div>

            </div>

        </div>

    </section>


    <!-- EDUCATION SECTION -->

    <section class="section" id="education">

        <div class="container">

            <h2 class="section-title">My Education</h2>

            <div class="row g-4">

                <div class="col-md-4">

                    <div class="custom-card">

                        <span class="edu-date">2023 - 2026</span>

                        <h4>B.Sc. Computer Science</h4>

                        <p>SSS College for Women</p>

                    </div>

                </div>

                <div class="col-md-4">

                    <div class="custom-card">

                        <span class="edu-date">2022 - 2023</span>

                        <h4>Higher Secondary (HSC)</h4>

                        <p>Govt. Girls Higher Secondary School</p>

                    </div>

                </div>

                <div class="col-md-4">

                    <div class="custom-card">

                        <span class="edu-date">2020 - 2021</span>

                        <h4>SSLC</h4>

                        <p>St. Joseph Girls Higher Secondary School</p>

                    </div>

                </div>

            </div>

        </div>

    </section>


    <!-- SKILLS SECTION -->

    <section class="section" id="skills">

        <div class="container">

            <h2 class="section-title">My Skills</h2>

            <h4 class="text-center mb-4">Programming Languages</h4>

            <div class="row g-3 mb-5">

                <div class="col-6 col-md-3">
                    <div class="skill">
                        <h5>Python</h5>
                    </div>
                </div>

                <div class="col-6 col-md-3">
                    <div class="skill">
                        <h5>JavaScript</h5>
                    </div>
                </div>

                <div class="col-6 col-md-3">
                    <div class="skill">
                        <h5>SQL</h5>
                    </div>
                </div>

                <div class="col-6 col-md-3">
                    <div class="skill">
                        <h5>HTML</h5>
                    </div>
                </div>

            </div>

            <h4 class="text-center mb-4">Web Technologies</h4>

            <div class="row g-3 mb-5">

                <div class="col-6 col-md-3">
                    <div class="skill">
                        <h5>CSS</h5>
                    </div>
                </div>

                <div class="col-6 col-md-3">
                    <div class="skill">
                        <h5>Django</h5>
                    </div>
                </div>

                <div class="col-6 col-md-3">
                    <div class="skill">
                        <h5>Bootstrap</h5>
                    </div>
                </div>

                <div class="col-6 col-md-3">
                    <div class="skill">
                        <h5>Responsive Design</h5>
                    </div>
                </div>

            </div>

            <h4 class="text-center mb-4">Tools & Database</h4>

            <div class="row g-3">

                <div class="col-6 col-md-3">
                    <div class="skill">
                        <h5>Git & GitHub</h5>
                    </div>
                </div>

                <div class="col-6 col-md-3">
                    <div class="skill">
                        <h5>VS Code</h5>
                    </div>
                </div>

                <div class="col-6 col-md-3">
                    <div class="skill">
                        <h5>MySQL</h5>
                    </div>
                </div>

                <div class="col-6 col-md-3">
                    <div class="skill">
                        <h5>MongoDB</h5>
                    </div>
                </div>

            </div>

        </div>

    </section>


    <!-- INTERNSHIP SECTION -->

    <section class="section" id="internship">

        <div class="container">

            <h2 class="section-title">Internship Experience</h2>

            <div class="row justify-content-center">

                <div class="col-md-8">

                    <div class="custom-card">

                        <h4>Artificial Intelligence Intern (Python)</h4>

                        <h5>Corizo</h5>

                        <p>
                            • Completed an internship in Artificial
                            Intelligence using Python.
                        </p>

                        <p>
                            • Worked with basic AI concepts and
                            Python implementations.
                        </p>

                        <p>
                            • Gained hands-on experience in data
                            handling and model development.
                        </p>

                    </div>

                </div>

            </div>

        </div>

    </section>


    <!-- PROJECTS SECTION -->

    <section class="section" id="projects">

        <div class="container">

            <h2 class="section-title">My Projects</h2>

            <div class="row g-4">

                <div class="col-md-6 col-lg-4">

                    <div class="custom-card">

                        <h4>Employee Management System</h4>

                        <p><b>Technologies:</b> Python, SQL</p>

                        <p>
                            Developed a system to add, update,
                            delete and search employee records
                            and generate reports.
                        </p>

                    </div>

                </div>

                <div class="col-md-6 col-lg-4">

                    <div class="custom-card">

                        <h4>Customer Segmentation</h4>

                        <p><b>Technologies:</b> Python, K-Means</p>

                        <p>
                            Applied K-Means clustering to explore
                            customer groups and purchase behavior.
                        </p>

                    </div>

                </div>

                <div class="col-md-6 col-lg-4">

                    <div class="custom-card">

                        <h4>Portfolio Website</h4>

                        <p><b>Technologies:</b> HTML, CSS, JavaScript</p>

                        <p>
                            Created a personal portfolio website
                            to present skills and projects.
                        </p>

                    </div>

                </div>

                <div class="col-md-6 col-lg-4">

                    <div class="custom-card">

                        <h4>Fashion E-commerce (Style Hub)</h4>

                        <p><b>Technologies:</b> HTML, CSS, JavaScript</p>

                        <p>
                            Designed a responsive fashion storefront
                            with product listings, categories and
                            a contact form.
                        </p>

                    </div>

                </div>

                <div class="col-md-6 col-lg-4">

                    <div class="custom-card">

                        <h4>Cafe Website (Cafe Bliss)</h4>

                        <p><b>Technologies:</b> HTML, CSS, JavaScript</p>

                        <p>
                            Built a responsive cafe website with
                            navigation, menu, about and contact sections.
                        </p>

                    </div>

                </div>

            </div>

        </div>

    </section>


    <!-- CERTIFICATIONS SECTION -->

    <section class="section" id="certifications">

        <div class="container">

            <h2 class="section-title">Certifications</h2>

            <div class="row g-4">

                <div class="col-md-4">
                    <div class="custom-card text-center">
                        <h4>Artificial Intelligence</h4>
                        <p>Corizo Certified Artificial Intelligence</p>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="custom-card text-center">
                        <h4>Type Writing Junior</h4>
                        <p>English</p>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="custom-card text-center">
                        <h4>Type Writing Senior</h4>
                        <p>English</p>
                    </div>
                </div>

            </div>

        </div>

    </section>


    <!-- CONTACT SECTION -->

    <section class="section" id="contact">

        <div class="container">

            <h2 class="section-title">Contact Me</h2>

            <div class="row justify-content-center">

                <div class="col-md-7">

                    <div class="custom-card text-center">

                        <h4>Let's Connect!</h4>

                        <p>
                            I am looking for an opportunity
                            to start my career in Web Development.
                        </p>

                        <p>
                            Email:
                            <a class="contact-link"
                            href="mailto:hariniseenu23@gmail.com">
                                hariniseenu23@gmail.com
                            </a>
                        </p>

                        <p>
                            Phone:
                            <a class="contact-link"
                            href="tel:+919715641878">
                                +91 9715641878
                            </a>
                        </p>

                        <p>
                            LinkedIn:
                            <a class="contact-link"
                            href="https://www.linkedin.com/in/harini-s-123b6a2b4"
                            target="_blank">
                                View My LinkedIn
                            </a>
                        </p>

                        <a href="mailto:hariniseenu23@gmail.com"
                        class="btn-custom mt-3">
                            Hire Me
                        </a>

                    </div>

                </div>

            </div>

        </div>

    </section>


    <!-- FOOTER -->

    <footer>

        <p class="mb-0">
            © 2026 Harini Seenuvasan | All Rights Reserved.
        </p>

    </footer>


    <!-- Bootstrap JavaScript -->

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>

</body>

</html>
