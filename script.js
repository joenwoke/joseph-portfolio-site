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

  // Initial check in case user loads the page halfway down
  fadeInOnScroll();

  // Trigger on scroll
  window.addEventListener("scroll", fadeInOnScroll);
});