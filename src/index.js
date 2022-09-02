// Import initial DOM elements
import { pageLoad } from "./pageload";
pageLoad();

// Global variables
const navButton = document.querySelector(".hamburger");
const navOverlay = document.querySelector(".nav-overlay");


// Event listeners

navButton.addEventListener("click", () => {
  // Toggle menu drop down and menu button animation
  navOverlay.addEventListener("click", (e) => {
    // Event listener to close overlay on click outside of menu
    if (e.target === navOverlay) {
      navOverlay.classList.remove("active");
      navButton.classList.toggle("is-active");
    }
  });
  navOverlay.classList.toggle("active");
  navButton.classList.toggle("is-active");
});
