// include.js

document.addEventListener("DOMContentLoaded", function () {
    // Load header and footer
    Promise.all([
        fetch("components/header.html").then(res => res.text()),
        fetch("components/footer.html").then(res => res.text())
    ])
        .then(([headerHtml, footerHtml]) => {
            document.getElementById("include-header").innerHTML = headerHtml;
            document.getElementById("include-footer").innerHTML = footerHtml;

            // Re-initialize theme toggle after header/footer are inserted
            initializeThemeToggle();
        })
        .catch(err => console.error("Error loading header/footer:", err));
});
