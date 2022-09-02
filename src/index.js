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

  // Manage page change
  const menuPage = () => {
    removeDom(); // Remove DOM elements
    console.log("Menu page");
    import("./menu.js").then((module) => {
      // Import menu.js module and run menuPage function
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
    managePages(link); 
  };



  // Event listeners
  homeButton.addEventListener("click", toggleHome);
  navButton.addEventListener("click", toggleOverlay);
  orderButtons.forEach((button) => {
    button.addEventListener("click", menuPage);
  });
  navLinks.forEach((link) => {
    link.addEventListener("click", toggleOverlay);
    link.addEventListener("click", getTargetText);
  });
};

init();
