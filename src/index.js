// Import initial DOM elements
import { pageLoad } from "./pageload.js";
import { removeAllDom, removeDom } from "./reset.js";

const init = () => {
  // Init page
  pageLoad();

  // Global variables
  const orderButtons = document.querySelectorAll(".order");
  const homeButton = document.querySelector(".home");
  const navButton = document.querySelector(".hamburger");
  const navOverlay = document.querySelector(".nav-overlay");
  const navLinks = document.querySelectorAll(".nav-overlay-content a");
  const mainMenuButton = document.querySelector(".main-button");

  // Global functions
  const toggleHome = () => {
    removeAllDom();
    init();
  };
  const toggleOverlay = () => {
    navOverlay.classList.toggle("active");
    navButton.classList.toggle("is-active");
    // Click overlay to close
    navOverlay.addEventListener("click", () => {
      navOverlay.classList.remove("active");
      navButton.classList.remove("is-active");
    });
  };
  const managePages = (link) => {
    switch (link) {
      case "MENU.":
        import("./menu.js").then((module) => {
          removeDom();
          module.menuPage();
        });
        break;
      case "LOCATIONS.":
        import("./locations.js").then((module) => {
          removeDom();
          module.locationsPage();
        });
        break;
      case "ABOUT.":
        import("./about.js").then((module) => {
          removeDom();
          module.aboutPage();
        });
        break;
      case "CONTACT.":
        import("./contact.js").then((module) => {
          removeDom();
          module.contactPage();
        });
        break;
      default:
        break;
    }
  };
  const getTargetText = (e) => {
    const link = e.target.textContent;
    managePages(link);
  };

  // Event listeners
  homeButton.addEventListener("click", toggleHome);
  navButton.addEventListener("click", toggleOverlay);
  orderButtons.forEach((button) => {
    button.addEventListener("click", getTargetText);
  });
  navLinks.forEach((link) => {
    link.addEventListener("click", toggleOverlay);
    link.addEventListener("click", getTargetText);
  });
};

init();
