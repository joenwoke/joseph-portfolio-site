document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");
  const navLinks = document.querySelectorAll(".site-nav a[data-nav]");
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const profilePhoto = document.querySelector(".profile-photo");

  if (profilePhoto) {
    const heroPanel = profilePhoto.closest(".hero-panel");

    profilePhoto.addEventListener("load", () => {
      heroPanel.classList.add("has-profile");
      heroPanel.classList.remove("no-profile");
    });

    profilePhoto.addEventListener("error", () => {
      heroPanel.classList.add("no-profile");
      heroPanel.classList.remove("has-profile");
    });

    if (profilePhoto.complete) {
      heroPanel.classList.toggle("has-profile", profilePhoto.naturalWidth > 0);
      heroPanel.classList.toggle("no-profile", profilePhoto.naturalWidth === 0);
    }
  }

  navLinks.forEach((link) => {
    const navTarget = link.getAttribute("data-nav");
    const isActive =
      (currentPage === "index.html" && navTarget === "home") ||
      (currentPage === "projects.html" && navTarget === "projects") ||
      (currentPage === "experience.html" && navTarget === "experience");

    if (isActive) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = siteNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
      document.body.classList.toggle("nav-open", isOpen);
    });

    siteNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        siteNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open navigation");
        document.body.classList.remove("nav-open");
      });
    });
  }

  const revealItems = document.querySelectorAll(".section, .project-card, .timeline-item, .skill-card, .contact-card");

  if ("IntersectionObserver" in window) {
    revealItems.forEach((item) => item.classList.add("reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealItems.forEach((item) => observer.observe(item));
  }
});
