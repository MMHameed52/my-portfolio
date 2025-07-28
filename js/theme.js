function initializeThemeToggle() {
    const toggle = document.getElementById("theme-toggle");
    const label = document.getElementById("theme-label");
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
        document.body.classList.add("dark-mode");
        if (toggle) toggle.checked = true;
        if (label) label.textContent = "Light Mode";
    }

    if (toggle) {
        toggle.addEventListener("change", function () {
            if (this.checked) {
                document.body.classList.add("dark-mode");
                localStorage.setItem("theme", "dark");
                if (label) label.textContent = "Light Mode";
            } else {
                document.body.classList.remove("dark-mode");
                localStorage.setItem("theme", "light");
                if (label) label.textContent = "Dark Mode";
            }
        });
    }
}
