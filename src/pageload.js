export function pageLoad() {
  // DOM manipulation starts here //
  const header = document.createElement("header");
  const main = document.createElement("main");

  const footer = document.createElement("footer");

  // Header content
  const h1 = document.createElement("a");
  h1.setAttribute("href", "#");
  h1.textContent = "Blaze Pizza.";

  // Menu button
  const navButton = document.createElement("button");
  navButton.classList.add("hamburger");
  navButton.classList.add("hamburger--spring");
  navButton.setAttribute("type", "button");

  const buttonSpan = document.createElement("span");
  buttonSpan.classList.add("hamburger-box");
  const buttonSpanInner = document.createElement("span");
  buttonSpanInner.classList.add("hamburger-inner");
  buttonSpan.appendChild(buttonSpanInner);
  navButton.appendChild(buttonSpan);

  // Menu drop down creation
  const navOverlay = document.createElement("div");
  navOverlay.classList.add("nav-overlay");
  // Menu drop down content
  const navOverlayContent = document.createElement("div");
  navOverlayContent.classList.add("nav-overlay-content"); //! .nav-overlay-content - Visibility: hidden by default
  // Menu drop down content elements
  const navOverlayContentElement1 = document.createElement("a");
  navOverlayContentElement1.setAttribute("href", "#");
  navOverlayContentElement1.textContent = "MENU.";
  const navOverlayContentElement2 = document.createElement("a");
  navOverlayContentElement2.setAttribute("href", "#");
  navOverlayContentElement2.textContent = "LOCATIONS.";
  const navOverlayContentElement3 = document.createElement("a");
  navOverlayContentElement3.setAttribute("href", "#");
  navOverlayContentElement3.textContent = "ABOUT.";
  const navOverlayContentElement4 = document.createElement("a");
  navOverlayContentElement4.setAttribute("href", "#");
  navOverlayContentElement4.textContent = "CONTACT.";
  // Append menu drop down content elements to menu drop down content
  navOverlayContent.appendChild(navOverlayContentElement1);
  navOverlayContent.appendChild(navOverlayContentElement2);
  navOverlayContent.appendChild(navOverlayContentElement3);
  navOverlayContent.appendChild(navOverlayContentElement4);
  // Append menu drop down content to menu drop down
  navOverlay.appendChild(navOverlayContent);
  // End menu drop down creation
  header.appendChild(h1);
  header.appendChild(navButton);

  // Main content
  const div1 = document.createElement("div");
  div1.classList.add("hero-content");

  // Main content Div 1
  const background = document.createElement("div");
  background.classList.add("background");

  const mainContentText = document.createElement("div");
  mainContentText.classList.add("main-content-text");
  const mainContentTextH1 = document.createElement("h1");
  mainContentTextH1.textContent = "Traditional wood fired pizza, made to order.";
  mainContentText.appendChild(mainContentTextH1);

  const mainMenuButton = document.createElement("a");
  mainMenuButton.setAttribute("href", "#");
  mainMenuButton.classList.add("main-button");
  mainMenuButton.textContent = "Menu";

  div1.appendChild(background);
  div1.appendChild(mainContentText);
  div1.appendChild(mainMenuButton);

  // Main content Div 2
  const div2 = document.createElement("div");
  div2.classList.add("google-maps");

  const iframe = document.createElement("iframe");
  iframe.setAttribute(
    "src",
    "https://www.google.com/maps/embed/v1/view?zoom=17&center=24.8357%2C46.6817&key=AIzaSyBuG8B1ZVjxm3tin2ZYMZFdZ0wONikG6l8"
  );
  iframe.setAttribute("width", "100%");
  iframe.setAttribute("height", "100%");
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("style", "border:0");
  iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute("loading", "lazy");

  div2.appendChild(iframe);

  // Main content Div 3
  const div3 = document.createElement("div");
  div3.classList.add("delivery-banner");

  const deliveryBannerText = document.createElement("div");
  deliveryBannerText.classList.add("delivery-banner-text");
  const deliveryBannerTextH1 = document.createElement("h1");
  deliveryBannerTextH1.textContent = "YOU CAN ORDER DELIVERY OR TAKE AWAY";
  deliveryBannerText.appendChild(deliveryBannerTextH1);

  const deliveryBannerButton = document.createElement("a");
  deliveryBannerButton.setAttribute("href", "#");
  deliveryBannerButton.classList.add("main-button");
  deliveryBannerButton.textContent = "Order Now";

  div3.appendChild(deliveryBannerText);
  div3.appendChild(deliveryBannerButton);

  // Main content Div 4
  const div4 = document.createElement("div");
  div4.classList.add("input-container");

  const inputWrapper = document.createElement("div");
  inputWrapper.classList.add("input-wrapper");

  const imgWrapper = document.createElement("div");
  imgWrapper.classList.add("img-wrapper");

  const inputHeader = document.createElement("h1");
  inputHeader.textContent =
    "Subscribe to our newsletter for updates and offers";

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Enter your email address");
  input.setAttribute("name", "email");
  input.setAttribute("id", "email");
  input.setAttribute("required", "");

  const inputButton = document.createElement("button");
  inputButton.setAttribute("type", "submit");
  inputButton.setAttribute("class", "main-button");
  inputButton.textContent = "Subscribe";

  const img = document.createElement("img");
  img.setAttribute("width", "100%");
  img.setAttribute("height", "100%");

  imgWrapper.appendChild(img);
  inputWrapper.appendChild(inputHeader);
  inputWrapper.appendChild(input);
  inputWrapper.appendChild(inputButton);
  div4.appendChild(inputWrapper);
  div4.appendChild(imgWrapper);

  // Append main content elements
  main.appendChild(div1);
  main.appendChild(div2);
  main.appendChild(div3);
  main.appendChild(div4);

  // Footer content
  const footerText = document.createElement("p");
  footerText.textContent = "Blaze Pizza © 2021";

  footer.appendChild(footerText);

  // Add content to the DOM
  content.appendChild(header);
  content.appendChild(navOverlay);
  content.appendChild(main);
  content.appendChild(footer);

  // DOM manipulation ends here //
}
