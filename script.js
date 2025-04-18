// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");

  // Function to check if the section is in view
  function checkSectionVisibility() {
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < windowHeight * 0.8) {
        section.classList.add("visible");
      }
    });
  }

  // Initial check
  checkSectionVisibility();

  // Check on scroll
  window.addEventListener("scroll", checkSectionVisibility);
});

