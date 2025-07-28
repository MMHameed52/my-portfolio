document.addEventListener("DOMContentLoaded", () => {
    const toggleInput = document.getElementById("theme-toggle");
    const label = document.getElementById("theme-label");
    const currentTheme = localStorage.getItem("theme") || "light";

    document.body.classList.add(`${currentTheme}-mode`);
    toggleInput.checked = currentTheme === "dark";
    label.textContent = currentTheme === "dark" ? "Light Mode" : "Dark Mode";

    toggleInput.addEventListener("change", () => {
        const isDark = toggleInput.checked;

        document.body.classList.toggle("dark-mode", isDark);
        document.body.classList.toggle("light-mode", !isDark);

        const newTheme = isDark ? "dark" : "light";
        localStorage.setItem("theme", newTheme);
        label.textContent = isDark ? "Light Mode" : "Dark Mode";
    });
});
