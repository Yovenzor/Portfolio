// BACK TO TOP BUTTON
const backToTopButton = document.getElementById("backToTopBtn");

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 20) {
        backToTopButton.classList.add('visible');
    } 
    else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// INTERSECTION OBSERVER
const observerOptions = {
    root: null,
    rootMargin: '-20% 0px',
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        } else {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(20px)';
        }
    });
}, observerOptions);

document.querySelectorAll('section, .project-card, .about-image, .about-text, #contact-form, footer').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.8s ease-out';
    observer.observe(element);
});

// HAMBURGER MENU
const hamburger = document.querySelector('.hamburger');
const navOverlay = document.querySelector('.nav-overlay');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-items');

function toggleMenu() {
    hamburger.classList.toggle('active');
    navOverlay.classList.toggle('active');
    document.body.classList.toggle('menu-open');
}

hamburger.addEventListener('click', toggleMenu);

navItems.forEach(item => {
    item.addEventListener('click', () => {
        toggleMenu();
    });
});

navOverlay.addEventListener('click', (e) => {
    if (e.target === navOverlay) {
        toggleMenu();
    }
});

// Close navbar when clicking outside
document.addEventListener('click', (e) => {
    if (navOverlay.classList.contains('active') && !e.target.closest('nav') && !e.target.closest('.hamburger')) {
        toggleMenu();
    }
});


// LIGHT MODE

// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle")
    if (themeToggle) {
    const themeIcon = themeToggle.querySelector("i")

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-theme")
        if (document.body.classList.contains("light-theme")) {
        themeIcon.classList.remove("ti-sun")
        themeIcon.classList.add("ti-moon")
        } else {
        themeIcon.classList.remove("ti-moon")
        themeIcon.classList.add("ti-sun")
        }

        if (document.body.classList.contains("light-theme")) {
        localStorage.setItem("theme", "light")
        } else {
        localStorage.setItem("theme", "dark")
        }
    })

    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "light") {
        document.body.classList.add("light-theme")
        themeIcon.classList.remove("ti-sun")
        themeIcon.classList.add("ti-moon")
    }
    }
})
