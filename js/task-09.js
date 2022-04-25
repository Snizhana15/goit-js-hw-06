const colorBtn = document.querySelector(".change-color");
const backgroundColor = document.querySelector(".color");
colorBtn.addEventListener("click", handelColorBtn);
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function handelColorBtn() {
  backgroundColor.textContent = getRandomHexColor();
  document.body.style.background = backgroundColor.textContent;
}
