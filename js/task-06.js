const input = document.querySelector("#validation-input");
const inputLength = input.dataset.length;

const onFocusInput = element => {
  const textLength = element.target.value.length;
  if (textLength == inputLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
};
input.addEventListener("blur", onFocusInput);
