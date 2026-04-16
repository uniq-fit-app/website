document.addEventListener("DOMContentLoaded", () => {

  /* NAV */
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("open");
    });
  }

  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }); 

  /* ACCORDIONS */
  const accordions = document.querySelectorAll(".card-section");

  accordions.forEach(section => {
    const cards = section.querySelectorAll(".card");

    // Card click toggle
    cards.forEach(card => {
      card.addEventListener("click", () => {
        cards.forEach(c => c.classList.remove("active"));
        card.classList.add("active");
      });
    });

    // Only swap class if the section is originally a grid
    if (section.classList.contains("card-grid")) {
      const updateCardLayout = () => {
        if (window.innerWidth <= 920) {
          section.classList.remove("card-grid");
          section.classList.add("card-accordion");
        } else {
          section.classList.remove("card-accordion");
          section.classList.add("card-grid");
        }
      };

      // Initial check
      updateCardLayout();

      // Update on resize
      window.addEventListener("resize", updateCardLayout);
    }
  });

});
