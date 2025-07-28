document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme") || "light";

    document.body.classList.add(`${currentTheme}-mode`);
    toggleButton.textContent = currentTheme === "dark" ? "Light Mode" : "Dark Mode";

    toggleButton.addEventListener("click", () => {
        const isDark = document.body.classList.contains("dark-mode");
        document.body.classList.toggle("dark-mode");
        document.body.classList.toggle("light-mode");

        const newTheme = isDark ? "light" : "dark";
        localStorage.setItem("theme", newTheme);
        toggleButton.textContent = isDark ? "Dark Mode" : "Light Mode";
    });
});
