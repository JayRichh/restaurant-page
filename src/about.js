export function aboutPage() {
  const main = document.querySelector("main");
  const about = document.createElement("div");
  about.classList.add("about");
  about.innerHTML = `
    <div class="about__content">
      <h1 class="about__title">ABOUT US</h1>
      <p class="about__text">
      We are a family owned and operated business that has been serving the community for over 30 years. We are proud to be a part of the community and look forward to serving you for many more years to come.
        <br><br>
        Thanks for stopping by and we hope to see you soon!
        <br><br>
        Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (anchovies, olives, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven. A small pizza is sometimes called a pizzetta.
      </p>
      <br><br>
      <img src="/resources/about.jpg" alt="about" class="about__img">
    </div>
    `;
  main.appendChild(about);
}