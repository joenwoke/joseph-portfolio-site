document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll("section");
  const stickyNav = document.querySelector(".sticky-nav");
  const header = document.querySelector(".hero-header");
  const navLinks = document.querySelectorAll(".main-nav a");

  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");
  const closeBtn = document.getElementById("closeBtn");

  // Fade-in animation for each section
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

  const toggleStickyNav = () => {
    const headerHeight = header.offsetHeight;
    if (window.scrollY > headerHeight - 20) {
      stickyNav.classList.add("visible");
    } else {
      stickyNav.classList.remove("visible");
    }
  };

  const highlightCurrentNav = () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (scrollY >= sectionTop) {
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

  // Show mobile nav
  hamburger.addEventListener("click", () => {
    mobileNav.style.display = "flex";
    document.body.style.overflow = "hidden"; // prevent scroll behind overlay
  });

  // Hide mobile nav
  closeBtn.addEventListener("click", () => {
    mobileNav.style.display = "none";
    document.body.style.overflow = ""; // restore scroll
  });

  // Close mobile nav when clicking a link
  mobileNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.style.display = "none";
      document.body.style.overflow = "";
    });
  });

  // Initial triggers
  fadeInOnScroll();
  toggleStickyNav();
  highlightCurrentNav();

  // Scroll triggers
  window.addEventListener("scroll", () => {
    fadeInOnScroll();
    toggleStickyNav();
    highlightCurrentNav();
  });
});
