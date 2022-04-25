const form = document.querySelector(".login-form");

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  }
  const obj = {
    email: form.elements.email.value,
    password: form.elements.password.value,
  };
  console.log(obj);
  event.currentTarget.reset();
}
form.addEventListener("submit", handleSubmit);
