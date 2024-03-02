document.addEventListener("DOMContentLoaded", function() {
    const headerLinks = document.querySelectorAll("header nav ul li a");
  
    headerLinks.forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault();
  
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          const offsetTop = targetElement.offsetTop;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
          });
        }
      });
    });
  });