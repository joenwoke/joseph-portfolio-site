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
      const sectionTop = section.offsetTop - 120;
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

  // Open mobile nav
  hamburger.addEventListener("click", () => {
    mobileNav.classList.add("open");
    document.body.style.overflow = "hidden"; // lock scroll
  });

  // Close mobile nav
  closeBtn.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    document.body.style.overflow = "";
  });

  // Close mobile nav when clicking a nav link
  mobileNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
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