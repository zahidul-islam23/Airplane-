document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const loginBtn = document.querySelector('.login-btn');

    // Mobile Menu Toggle
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });

    // Login Modal (Placeholder)
    loginBtn.addEventListener('click', () => {
        alert('Login functionality coming soon!');
    });

    // Flight Search Validation
    const searchForm = document.querySelector('.flight-search');
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputs = searchForm.querySelectorAll('input, select');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value) {
                isValid = false;
                input.style.border = '2px solid red';
            } else {
                input.style.border = 'none';
            }
        });

        if (isValid) {
            alert('Searching for flights...');
        }
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});