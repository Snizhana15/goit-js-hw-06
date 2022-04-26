const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", createName);

function createName(name) {
  span.textContent = name.currentTarget.value;
  if (name.currentTarget.value === "") {
    span.textContent = "Anonymous";
  }
}
