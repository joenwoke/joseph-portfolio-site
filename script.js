document.addEventListener('DOMContentLoaded', () => {
  console.log("Portfolio loaded");

  // simple scroll animation
  const sections = document.querySelectorAll("section");
  window.addEventListener("scroll", () => {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.75) {
        section.style.opacity = 1;
        section.style.transform = "translateY(0)";
      }
    });
  });

  // Set initial style
  sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.6s ease-out";
  });
});