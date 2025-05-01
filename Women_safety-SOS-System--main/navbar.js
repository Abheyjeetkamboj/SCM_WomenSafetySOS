document.addEventListener("DOMContentLoaded", async () => {
    console.log("DOM fully loaded. Attempting to fetch navbar...");

    try {
        const response = await fetch("navbar.html");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const navbarHTML = await response.text();
        const navbarContainer = document.getElementById("navbar");

        if (!navbarContainer) {
            console.error("No element with ID 'navbar' found.");
            return;
        }

        navbarContainer.innerHTML = navbarHTML;
        console.log("Navbar loaded successfully.");

        setupMobileMenu();
    } catch (error) {
        console.error("Error loading navbar:", error);
    }
});

function setupMobileMenu() {
    const menuButton = document.querySelector(".mobile-menu-btn");
    const mobileMenu = document.querySelector(".mobile-menu");
    const menuIcon = menuButton?.querySelector(".menu-icon");

    if (!menuButton || !mobileMenu || !menuIcon) {
        console.warn("Menu elements not found. Skipping mobile menu setup.", { menuButton, mobileMenu, menuIcon });
        return;
    }

    const hamburgerIcon = `
        <line x1="4" x2="20" y1="6" y2="6"/>
        <line x1="4" x2="20" y1="12" y2="12"/>
        <line x1="4" x2="20" y1="18" y2="18"/>`;

    const closeIcon = `
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>`;

    menuButton.addEventListener("click", () => {
        const isOpen = mobileMenu.classList.toggle("open");
        menuIcon.innerHTML = isOpen ? closeIcon : hamburgerIcon;
    });

    document.querySelectorAll(".mobile-link").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("open");
            menuIcon.innerHTML = hamburgerIcon;
        });
    });

    console.log("Mobile menu setup completed.");
}
