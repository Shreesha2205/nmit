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

document.addEventListener("DOMContentLoaded", function () {
  const signinButton = document.getElementById("signinButton");
  const signinCard = document.getElementById("signinCard");
  const overlay = document.querySelector(".overlay");

  signinButton.addEventListener("click", function (event) {
    event.stopPropagation(); // Stop the event from propagating to the document
    console.log("Sign-in button clicked");
    if (signinCard.style.display === "block") {
      signinCard.style.display = "none";
      overlay.style.display = "none";
      console.log("Sign-in card and overlay hidden");
    } else {
      signinCard.style.display = "block";
      overlay.style.display = "block";
      console.log("Sign-in card and overlay displayed");
    }
  });

  document.addEventListener("click", function (event) {
    if (
      signinCard.style.display === "block" &&
      !signinCard.contains(event.target) &&
      event.target !== signinButton
    ) {
      signinCard.style.display = "none";
      overlay.style.display = "none";
      console.log("Clicked outside the sign-in card, hiding card and overlay");
    }
  });
});


