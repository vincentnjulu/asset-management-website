// script.js

// DOM Content Loaded Event Listener to ensure everything is loaded before interacting with the DOM
document.addEventListener('DOMContentLoaded', function () {
    
    // Hamburger Menu Toggle for small screens
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('nav ul');
    
    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('active');  // Toggle visibility of nav links
    });
    
    // Smooth Scrolling for internal links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]'); // Select all anchor tags linking to IDs

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default jump to the section
            const targetId = this.getAttribute('href'); // Get the target ID (e.g., #home, #assets, etc.)
            const targetSection = document.querySelector(targetId);

            // Scroll smoothly to the target section
            window.scrollTo({
                top: targetSection.offsetTop - 60, // Scroll position (adjust for header)
                behavior: 'smooth'
            });
        });
    });

    // Fade-in effect on scroll for hero and portfolio sections
    const sections = document.querySelectorAll('.portfolio, .hero');
    
    // Intersection Observer API for detecting when sections come into view
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');  // Add fade-in class when in view
            }
        });
    }, {
        threshold: 0.5  // Trigger when 50% of the section is visible
    });

    sections.forEach(section => {
        observer.observe(section);  // Observe each section
    });

});

// Optionally, to handle the resize and ensure the navigation bar is responsive
window.addEventListener('resize', function () {
    const navLinks = document.querySelector('nav ul');
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active'); // Remove active class on larger screens
    }
});
