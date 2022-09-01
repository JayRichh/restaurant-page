var McButton = $("[class^='nav-button']");
var McBar1 = McButton.find("b:nth-child(1)");
var McBar2 = McButton.find("b:nth-child(2)");
var McBar3 = McButton.find("b:nth-child(3)");

McButton.on("click", function () {
  console.log("clicked button");
  $(this).toggleClass("active");
  console.log("class toggled to active")
  if (McButton.hasClass("active")) {
    McBar1.velocity({ top: "50%" }, { duration: 200, easing: "swing" });
    McBar3.velocity(
      { top: "50%" },
      { duration: 200, easing: "swing" }
    ).velocity(
      { rotateZ: "90deg" },
      { duration: 800, delay: 200, easing: [500, 20] }
    );
    McButton.velocity(
      { rotateZ: "135deg" },
      { duration: 800, delay: 200, easing: [500, 20] }
    );
  } else {
    McButton.velocity("reverse");
    McBar3.velocity(
      { rotateZ: "0deg" },
      { duration: 800, easing: [500, 20] }
    ).velocity({ top: "100%" }, { duration: 200, easing: "swing" });
    McBar1.velocity("reverse", { delay: 800 });
  }
});

// Export McButton 
// export { McButton };

/*$element.velocity({ 
    width: "500px",
    property2: value2
}, {
    duration: 400,
    easing: "swing",
    queue: "",
    begin: undefined,
    progress: undefined,
    complete: undefined,
    display: undefined,
    visibility: undefined,
    loop: false,
    delay: false,
    mobileHA: true
});*/

// Credit to https://www.sliderrevolution.com/resources/css-hamburger-menu/ for the cool 'burger style' menu icon transition
