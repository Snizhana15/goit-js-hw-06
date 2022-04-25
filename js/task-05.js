const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};
const createName = name => {
  name.preventDefault();
  if (name === "") {
    refs.span.textContent = "Anonymous";
  } else {
    refs.span.textContent = name.currentTarget.value;
  }
};

refs.input.addEventListener("input", createName);
