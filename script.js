document.addEventListener("DOMContentLoaded", function () {
  // LOADING SCREEN HANDLING 
  let header = document.querySelector("header");

  
  header.style.display = "none";

  
  setTimeout(() => {
      document.getElementById("loading-screen").style.display = "none";
      header.style.display = "block"; 
  }, 2000);

  // SMOOTH SCROLLING FOR NAVIGATION LINKS 
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute("href")).scrollIntoView({
              behavior: "smooth"
          });
      });
  });

  //  REVEAL ELEMENTS ON SCROLL 
  let sections = document.querySelectorAll(".fade-in");

  function revealOnScroll() {
      let scrollPosition = window.scrollY + window.innerHeight;
      sections.forEach(section => {
          if (scrollPosition > section.offsetTop + 50) {
              section.classList.add("visible");
          }
      });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});

