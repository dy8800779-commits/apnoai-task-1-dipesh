
// Select theme toggle button
const themeToggle = document.getElementById("theme-toggle");

// Check previously saved theme
const savedTheme = localStorage.getItem("portfolio-theme");

// Apply saved theme
if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeToggle.textContent = "☀️";
}

// Toggle between dark and light mode
themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "☀️";
        localStorage.setItem("portfolio-theme", "light");
    } else {
        themeToggle.textContent = "🌙";
        localStorage.setItem("portfolio-theme", "dark");
    }

});
