document.addEventListener("DOMContentLoaded", (event) => {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (mobileMenuBtn && hamburger && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      mobileMenu.classList.toggle("active");
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (
        !mobileMenuBtn.contains(e.target) &&
        !mobileMenu.contains(e.target) &&
        mobileMenu.classList.contains("active")
      ) {
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
  }
});
