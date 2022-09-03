export function menuPage() {
  const menu = {
    pizza: [
      {
        id: 1,
        name: "Margherita",
        description: "Tomato sauce, mozzarella, basil",
        price: "$12.00",
      },
      {
        id: 2,
        name: "Pepperoni",
        description: "Tomato sauce, mozzarella, pepperoni",
        price: "$14.00",
      },
      {
        id: 3,
        name: "Hawaiian",
        description: "Tomato sauce, mozzarella, ham, pineapple",
        price: "$14.00",
      },
      {
        id: 4,
        name: "Meat Lovers",
        description: "Tomato sauce, mozzarella, pepperoni, ham, sausage",
        price: "$16.00",
      },
      {
        id: 5,
        name: "Veggie",
        description: "Tomato sauce, mozzarella, mushrooms, onions, peppers",
        price: "$14.00",
      },
      {
        id: 6,
        name: "Buffalo Chicken",
        description: "Tomato sauce, mozzarella, chicken, buffalo sauce",
        price: "$14.00",
      },
      {
        id: 7,
        name: "BBQ Chicken",
        description: "Tomato sauce, mozzarella, chicken, BBQ sauce",
        price: "$14.00",
      },
      {
        id: 8,
        name: "Chicken Alfredo",
        description: "Alfredo sauce, mozzarella, chicken",
        price: "$14.00",
      },
      {
        id: 9,
        name: "Chicken Bacon Ranch",
        description: "Tomato sauce, mozzarella, chicken, bacon, ranch",
        price: "$14.00",
      },
    ],
    salad: [
      {
        id: 1,
        name: "Caesar",
        description: "Romaine lettuce, parmesan, croutons, caesar dressing",
        price: "$8.00",
      },
      {
        id: 2,
        name: "Greek",
        description:
          "Romaine lettuce, feta, olives, tomatoes, onions, greek dressing",
        price: "$8.00",
      },
      {
        id: 3,
        name: "House",
        description:
          "Romaine lettuce, tomatoes, onions, cucumbers, house dressing",
        price: "$8.00",
      },
    ],
    side: [
      {
        id: 1,
        name: "Garlic Bread",
        description: "Garlic bread with mozzarella",
        price: "$4.00",
      },
      {
        id: 2,
        name: "Garlic Bread with Cheese",
        description: "Garlic bread with mozzarella and parmesan",
        price: "$5.00",
      },
      {
        id: 3,
        name: "Garlic Bread with Cheese and Bacon",
        description: "Garlic bread with mozzarella, parmesan, and bacon",
        price: "$6.00",
      },
      {
        id: 4,
        name: "Garlic Bread with Cheese and Pepperoni",
        description: "Garlic bread with mozzarella, parmesan, and pepperoni",
        price: "$6.00",
      },
    ],
    pizzaConstruct() {
      // Constructor for each menu item
      this.pizza.forEach((pizza) => {
        // get id
        const id = pizza.id;
        console.log(id);
        const pizzaItem = document.createElement("div");
        pizzaItem.classList.add("menu-item");
        pizzaItem.innerHTML = `
        <img src="/restaurant-page/resources/pizza${id}.jpg" alt="pizza${id}">
        <h3 class="menu-item__name">${pizza.name}</h3>
        <p class="menu-item__description">${pizza.description}</p>
        <p class="menu-item__price">${pizza.price}</p>
      `;
        pizzaMenu.appendChild(pizzaItem);
      });
    },
    saladConstruct() {
      this.salad.forEach((salad) => {
        const id = salad.id;
        const saladItem = document.createElement("div");
        saladItem.classList.add("menu-item");
        saladItem.innerHTML = `
        <img src="/restaurant-page/resources/salad${id}.jpg" alt="salad${id}">
        <h3 class="menu-item__name">${salad.name}</h3>
        <p class="menu-item__description">${salad.description}</p>
        <p class="menu-item__price">${salad.price}</p>
      `;
        saladMenu.appendChild(saladItem);
      });
    },
    sideConstruct() {
      this.side.forEach((side) => {
        const id = side.id;
        const sideItem = document.createElement("div");
        sideItem.classList.add("menu-item");
        sideItem.innerHTML = `
        <img src="/restaurant-page/resources/side${id}.jpg" alt="side${id}">
        <h3 class="menu-item__name">${side.name}</h3>
        <p class="menu-item__description">${side.description}</p>
        <p class="menu-item__price">${side.price}</p>
      `;
        sideMenu.appendChild(sideItem);
      });
    },
  };

  const main = document.querySelector("main");

  const background = document.createElement("div");
  background.classList.add("background");

  const menuWrapper = document.createElement("div");
  menuWrapper.classList.add("menu-content");

  const menuTitle = document.createElement("h1");
  menuTitle.classList.add("menu-title");
  menuTitle.textContent = "MENU";
  const div1p = document.createElement("p");
  div1p.textContent =
    "Our menu is made up of a variety of pizzas, salads, and sides. We also offer a selection of craft beers and wine.";

  const menuItems = document.createElement("div");
  menuItems.classList.add("menu-items");

  const pizzaMenu = document.createElement("div");
  pizzaMenu.classList.add("pizza-menu");
  const pizzaTitle = document.createElement("h2");
  pizzaTitle.classList.add("menu-category");
  pizzaTitle.textContent = "PIZZAS";

  // check if object has been loaded
  if (menu?.pizza.length > 0) {
    menu.pizzaConstruct();
  }

  const saladMenu = document.createElement("div");
  saladMenu.classList.add("salad-menu");
  const saladTitle = document.createElement("h2");
  saladTitle.classList.add("menu-category");
  saladTitle.textContent = "SALADS";

  if (menu?.salad.length > 0) {
    menu.saladConstruct();
  }

  const sideMenu = document.createElement("div");
  sideMenu.classList.add("side-menu");
  const sideTitle = document.createElement("h2");
  sideTitle.classList.add("menu-category");
  sideTitle.textContent = "SIDES";

  if (menu?.side.length > 0) {
    menu.sideConstruct();
  }

  menuItems.appendChild(pizzaMenu);
  menuItems.appendChild(saladMenu);
  menuItems.appendChild(sideMenu);

  pizzaMenu.prepend(pizzaTitle);
  saladMenu.prepend(saladTitle);
  sideMenu.prepend(sideTitle);

  menuWrapper.appendChild(menuTitle);
  menuWrapper.appendChild(div1p);
  menuWrapper.appendChild(menuItems);

  console.log("menu page loaded");

  main.appendChild(background);
  main.appendChild(menuWrapper);
};
