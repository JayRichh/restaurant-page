// Import initial DOM elements
import { pageLoad } from "./pageload";
import { removeDom } from "./removedom.js";

// Init page
pageLoad();

// Global variables
const navButton = document.querySelector(".hamburger");
const navOverlay = document.querySelector(".nav-overlay");
const navLinks = document.querySelectorAll(".nav-overlay-content a");

// Manage page change
const menuPage = () => {
  removeDom(); // Remove DOM elements
  import("./menu.js").then((module) => { // Import menu.js module and run menuPage function
    module.menuPage(); // Run menuPage function from menu.js module
  });
};

const locationsPage = () => {
  removeDom();
  import("./locations.js").then((module) => { 
    module.locationsPage();
  });
};

const aboutPage = () => {
  removeDom();
  import("./about.js").then((module) => { 
    module.aboutPage();
  });
};

const contactPage = () => {
  removeDom();
  import("./contact.js").then((module) => { 
    module.contactPage();
  });
};

// Global functions
const toggleOverlay = () => {
  navOverlay.classList.toggle("active");
  navButton.classList.toggle("is-active");
};

const managePages = (link) => {
  switch (link) {
    case "MENU.":
      menuPage();
      console.log("menu");
      break;
    case "LOCATIONS.":
      locationsPage();
      break;
    case "ABOUT.":
      aboutPage();
      break;
    case "CONTACT.":
      contactPage();
      break;
    default:
      break;
  }
};

const getTargetText = (e) => {
  const link = e.target.textContent;
  console.log(link);
  managePages(link); //
};

// Event listeners
// Timeout to prevent event listener from firing on page load
navButton.addEventListener("click", toggleOverlay);
navLinks.forEach((link) => {
  link.addEventListener("click", toggleOverlay);
  link.addEventListener("click", getTargetText);
});
