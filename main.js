fetch("https://openapi.programming-hero.com/api/categories")
  .then((res) => res.json())
  .then((data) => displayButtons(data.categories));

displayButtons = (categories) => {
  const categoryContainer = document.getElementById("button-container");

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.innerText = category.category_name;
    button.classList =
      "w-full rounded-2 category-btn text-left py-1 px-1 rounded-sm";

    button.onclick = () => {
      loadPlants(category.id);
      document.querySelectorAll(".category-btn").forEach((btn) => {
        btn.classList.remove("bg-green-700", "text-white");
      });

      button.classList.add("bg-green-700", "text-white");
      button.classList.remove("bg-gray-200", "text-black");
    };

    categoryContainer.appendChild(button);
  });
};

function loadPlants(categoryId) {
  manageSpinner(true);
  fetch(`https://openapi.programming-hero.com/api/category/${categoryId}`)
    .then((res) => res.json())
    .then((data) => displayPlants(data.plants));
}

function displayPlants(plants) {
  const cardContainer = document.querySelector(".card-container");
  cardContainer.innerHTML = "";

  plants.forEach((plant) => {
    const card = document.createElement("div");
    card.classList =
      "bg-white rounded-md p-5 space-y-3 shadow-md max-h-[440px]";