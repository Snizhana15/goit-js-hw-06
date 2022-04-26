const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulList = document.querySelector("#ingredients");

const createElements = ingredients.map(ingredient => {
  const list = document.createElement("li");
  list.textContent = ingredient;
  list.classList = "item";
  return list;
});
ulList.append(...createElements);
