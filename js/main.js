document.addEventListener("DOMContentLoaded", function () {
      const navbarItems = document.querySelectorAll("nav a");
      const spaceBetweenSections = 1; 

      navbarItems.forEach((item) => {
      item.addEventListener("click", (e) => {
            e.preventDefault();

            const targetId = e.target.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                  let offset;

                  if (targetId === "home") {
                        offset = -window.scrollY;
                  } else {
                        const textElement = targetElement.querySelector("h1");
                        offset = textElement.getBoundingClientRect().top - document.querySelector("nav").getBoundingClientRect().height + spaceBetweenSections;
                  }

                  window.scrollBy({
                        top: offset,
                        left: 0,
                        behavior: 'smooth'
                  });
            }
      });
      });
});


document.addEventListener('DOMContentLoaded', function() {
      const menuButton = document.getElementById('menu');
      const navbar = document.querySelector('.navbar');

      menuButton.addEventListener('click', function() {
            navbar.classList.toggle('active');
      });
});