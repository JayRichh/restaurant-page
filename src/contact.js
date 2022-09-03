export function contactPage() {
  const main = document.querySelector("main");
  const contact = document.createElement("div");
  contact.classList.add("contact");
  contact.innerHTML = `
    <div class="contact__content">
    <div class="contact__content__left">
      <h1 class="contact__title">CONTACT US</h1>
      <p class="contact__text">
        <strong>Address:</strong> 1234 Main St, City, State 12345
        <br>
        <strong>Phone:</strong> (123) 456-7890
        <br>
        <strong>Email:</strong>
        <a href="mailto: " class="contact__email">jsrichh5@gmail.com</a>
      </p>
      <br><br>
    </div>
    <div class="contact__content__right">
      <img src="/restaurant-page/resources/contact.jpg" alt="contact" class="contact__img">
      <div class="contact__form">
        <form action="https://formspree.io/f/mvoyzolr" method="POST">
          <p class="contact__form__title">Send us a message!</p>
          <label for="name">Name</label>
          <input type="text" name="name" id="name" required>
          <label for="email">Email</label>
          <input type="email" name="email" id="email" required>
          <label for="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10" required></textarea>
          <input type="submit" value="Send">
        </form>
      </div>
    </div>
    `;
  main.appendChild(contact);
}
