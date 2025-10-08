// Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Accordion Smooth
const accordionBtns = document.querySelectorAll(".accordion-btn");
accordionBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.classList.toggle("open");
  });
});

// Smooth scroll reveal
const sections = document.querySelectorAll(".section");
window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
});

// Navbar change on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
