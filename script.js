
/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

:root {
    --bg-color: #0b1120;
    --card-color: #151f32;
    --text-color: #ffffff;
    --secondary-color: #aab5c8;
    --accent-color: #38bdf8;
}

body {
    font-family: 'Segoe UI', Arial, sans-serif;
    background: var(--bg-color);
    color: var(--text-color);
    line-height: 1.6;
    transition: background 0.3s, color 0.3s;
}

/* Navbar */
header {
    position: sticky;
    top: 0;
    z-index: 100;
    background: var(--bg-color);
    border-bottom: 1px solid #263247;
}

.navbar {
    max-width: 1150px;
    margin: auto;
    padding: 18px 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    color: var(--text-color);
    font-size: 27px;
    font-weight: bold;
    text-decoration: none;
}

.logo span {
    color: var(--accent-color);
}

.nav-links {
    display: flex;
    gap: 30px;
    list-style: none;
}

.nav-links a {
    color: var(--secondary-color);
    text-decoration: none;
    transition: 0.3s;
}

.nav-links a:hover {
    color: var(--accent-color);
}

#theme-toggle {
    border: 1px solid var(--accent-color);
    background: transparent;
    color: var(--text-color);
    border-radius: 8px;
    padding: 8px 12px;
    cursor: pointer;
    font-size: 18px;
}

/* Home Section */
.hero {
    min-height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 60px 20px;
}

.hero-content {
    max-width: 750px;
    animation: fadeIn 1s ease;
}

.intro {
    color: var(--accent-color);
    letter-spacing: 5px;
    font-weight: bold;
    margin-bottom: 15px;
}

.hero h1 {
    font-size: clamp(40px, 8vw, 70px);
    margin-bottom: 10px;
}

.hero h2 {
    color: var(--accent-color);
    font-size: clamp(22px, 4vw, 32px);
    margin-bottom: 20px;
}

.description {
    color: var(--secondary-color);
    font-size: 17px;
    margin-bottom: 30px;
}

.btn {
    display: inline-block;
    background: var(--accent-color);
    color: #07111f;
    padding: 12px 28px;
    border-radius: 8px;
    font-weight: bold;
    text-decoration: none;
    transition: 0.3s;
}

.btn:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px #38bdf855;
}

/* Common Sections */
.section {
    max-width: 1100px;
    margin: auto;
    padding: 85px 25px;
}

.section-title {
    font-size: 35px;
    text-align: center;
    margin-bottom: 40px;
}

.section-title::after {
    content: "";
    display: block;
    width: 60px;
    height: 4px;
    background: var(--accent-color);
    margin: 12px auto;
    border-radius: 5px;
}

/* About Section */
.about-content {
    max-width: 800px;
    margin: auto;
    text-align: center;
    color: var(--secondary-color);
    font-size: 17px;
}

.skills {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 30px;
}

.skills span {
    background: var(--card-color);
    border: 1px solid #263247;
    color: var(--accent-color);
    padding: 10px 20px;
    border-radius: 8px;
}

/* Services Section */
.service-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 25px;
}

.service-card {
    flex: 1 1 250px;
    background: var(--card-color);
    border: 1px solid #263247;
    padding: 30px 25px;
    border-radius: 12px;
    transition: 0.3s;
}

.service-card:hover {
    transform: translateY(-8px);
    border-color: var(--accent-color);
}

.service-card h3 {
    color: var(--accent-color);
    margin-bottom: 15px;
}

.service-card p {
    color: var(--secondary-color);
}

/* Contact Section */
#contact {
    text-align: center;
}

.contact-text {
    color: var(--secondary-color);
    margin-bottom: 25px;
}

.social-links {
    margin-top: 25px;
    display: flex;
    justify-content: center;
    gap: 25px;
}

.social-links a {
    color: var(--accent-color);
    text-decoration: none;
}

.social-links a:hover {
    text-decoration: underline;
}

/* Footer */
footer {
    text-align: center;
    padding: 25px;
    border-top: 1px solid #263247;
    color: var(--secondary-color);
}

/* Light Theme */
body.light-mode {
    --bg-color: #f4f7fb;
    --card-color: #ffffff;
    --text-color: #172033;
    --secondary-color: #526078;
    --accent-color: #0284c7;
}

body.light-mode header {
    border-bottom-color: #dce3ed;
}

body.light-mode .service-card,
body.light-mode .skills span {
    border-color: #dce3ed;
}

/* Animation */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(25px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Mobile Responsive */
@media (max-width: 600px) {
    .navbar {
        flex-wrap: wrap;
        gap: 15px;
    }

    .nav-links {
        order: 3;
        width: 100%;
        justify-content: center;
        gap: 17px;
        font-size: 14px;
    }

    .hero {
        min-height: 75vh;
    }

    .section {
        padding: 60px 20px;
    }

    .section-title {
        font-size: 29px;
    }

    .service-container {
        flex-direction: column;
    }

    .service-card {
        width: 100%;
    }
}
