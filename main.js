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