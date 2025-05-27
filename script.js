document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll("section");

  // Prepare all sections for scroll animation
  sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.6s ease-out";
  });

  const fadeInOnScroll = () => {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.85) {
        section.style.opacity = 1;
        section.style.transform = "translateY(0)";
      }
    });
  };

  const navLinks = document.querySelectorAll("nav a");

  const highlightNav = () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 120) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  };

  // Scroll trigger
  window.addEventListener("scroll", () => {
    fadeInOnScroll();
    highlightNav();
  });

  // Initial run
  fadeInOnScroll();
  highlightNav();
});