// Scroll animation for sections
document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");
  
  // Reveal sections when they come into view
  function checkVisibility() {
    const windowHeight = window.innerHeight;
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < windowHeight * 0.8) {
        section.classList.add("visible");
      }
    });
  }
  
  window.addEventListener("scroll", checkVisibility);
  checkVisibility();  // Initial check
});


