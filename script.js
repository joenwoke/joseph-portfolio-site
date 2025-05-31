document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll("section");
  const stickyNav = document.querySelector(".sticky-nav");

  // Fade-in animation for sections
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

  // Show sticky navbar after scrolling past header
  const toggleStickyNav = () => {
    const header = document.querySelector(".hero-header");
    const headerHeight = header.offsetHeight;
    if (window.scrollY > headerHeight - 20) {
      stickyNav.classList.add("visible");
    } else {
      stickyNav.classList.remove("visible");
    }
  };

  // Initial load
  fadeInOnScroll();
  toggleStickyNav();

  // Event listeners
  window.addEventListener("scroll", () => {
    fadeInOnScroll();
    toggleStickyNav();
  });
});