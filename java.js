document.addEventListener("DOMContentLoaded", (event) => {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Set default theme to light
  body.classList.add("light-theme");

  themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
      body.classList.remove("light-theme");
      body.classList.add("dark-theme");
    } else {
      body.classList.remove("dark-theme");
      body.classList.add("light-theme");
    }
  });
});

const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
  }
});

// Close mobile menu when window is resized above mobile breakpoint
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
  }
});
