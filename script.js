document.addEventListener("DOMContentLoaded", function() {
    // Select all achievement count elements
    const countElements = document.querySelectorAll(".achievement-count");
  
    // Function to animate the counting
    function animateCounting(element, targetCount, duration) {
      let currentCount = 0;
      const step = Math.ceil(targetCount / duration);
      const timer = setInterval(() => {
        currentCount += step;
        if (currentCount >= targetCount) {
          currentCount = targetCount;
          clearInterval(timer);
        }
        element.textContent = currentCount;
      }, 1000 / duration);
    }
  
    // Trigger counting animation when the achievement is in the viewport
    function handleCounting() {
      countElements.forEach(element => {
        const targetCount = parseInt(element.getAttribute("data-count"));
        const elementPosition = element.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
  
        if (elementPosition < viewportHeight) {
          animateCounting(element, targetCount, 50 ); // Adjust the duration as needed
          element.classList.add("counted"); // Add a class to prevent multiple triggers
        }
      });
    }
  
    // Initial counting trigger
    handleCounting();
  
    // Re-trigger counting when the window is scrolled
    window.addEventListener("scroll", handleCounting);
  });
  