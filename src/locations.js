export function locationsPage() {
  const main = document.querySelector("main");
  const locations = document.createElement("div");
  const locationsTitle = document.createElement("h1");
  const locationsText = document.createElement("p");
  const locationsWrapper = document.createElement("div");
  const location1 = document.createElement("div");
  const location1Title = document.createElement("h2");
  const location1Text = document.createElement("p");
  const location1Image = document.createElement("img");
  const location2 = document.createElement("div");
  const location2Title = document.createElement("h2");
  const location2Text = document.createElement("p");
  const location2Image = document.createElement("img");
  const location3 = document.createElement("div");
  const location3Title = document.createElement("h2");
  const location3Text = document.createElement("p");
  const location3Image = document.createElement("img");

  locationsTitle.textContent = "LOCATIONS";
  locationsText.textContent =
    "We have locations all over the world, with the main headquarters in New York City. We have locations in the following cities:";
  location1Title.textContent = "New York City";
  location1Text.textContent = 
    "Our main headquarters is located in the heart of New York City. We have been serving the city since 2010.";
  location1Image.src = "/restaurant-page/resources/map.jpg";
  location2Title.textContent = "Los Angeles";
  location2Text.textContent =
    "Our second location is in Los Angeles. We are located at 123 Main Street, Los Angeles, CA 90001.";
  location2Image.src = "/restaurant-page/resources/map2.jpg";
  location3Title.textContent = "Chicago";
  location3Text.textContent =
    "Our third location is in Chicago. We are located at 123 Main Street, Chicago, IL 60001.";
  location3Image.src = "/restaurant-page/resources/map3.jpg";

  locations.classList.add("locations");
  locationsWrapper.classList.add("locations-wrapper");
  location1.classList.add("location");
  location2.classList.add("location");
  location3.classList.add("location");

  locations.appendChild(locationsTitle);
  locations.appendChild(locationsText);
  locations.appendChild(locationsWrapper);
  locationsWrapper.appendChild(location1);
  location1.appendChild(location1Title);
  location1.appendChild(location1Text);
  location1.appendChild(location1Image);
  locationsWrapper.appendChild(location2);
  location2.appendChild(location2Title);
  location2.appendChild(location2Text);
  location2.appendChild(location2Image);
  locationsWrapper.appendChild(location3);
  location3.appendChild(location3Title);
  location3.appendChild(location3Text);
  location3.appendChild(location3Image);

  main.appendChild(locations);
}