const categoriesAll = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesAll.length}`);

categoriesAll.forEach(category => {
  console.log(`Category: ${category.childNodes[1].textContent}`);
  console.log(`Element: ${category.children[1].children.length}`);
});
