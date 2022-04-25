const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulList = document.querySelector("#ingredients");

const createElements = ingredients.forEach(ingredient => {
  const list = document.createElement("li");
  list.textContent = ingredient;
  list.classList = "item";
  ulList.append(list);
});
