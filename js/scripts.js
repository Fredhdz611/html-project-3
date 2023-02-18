const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const form = document.querySelector(".form");

const data = {
  name: "",
  email: "",
  message: ""
}

nameInput.addEventListener("input", readText);
emailInput.addEventListener("input", readText);
messageInput.addEventListener("input", readText);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const { name, email, message } = data;

  if (name === "" || email === "" || message === "") {
    displayAlert("Todos los campos son obligatorios", true);
    return; //Corta la ejecucion del codigo
  }
  displayAlert("Mensaje enviado correctamente");
});

function readText(e) {
  data[e.target.id] = e.target.value;
}

function displayAlert(message, error = null) {
  const alert = document.createElement("P");
  alert.textContent = message;
  if(error) {
    alert.classList.add("error");
  } else {
    alert.classList.add("success");
  }
  form.appendChild(alert);
  setTimeout(() => {
    alert.remove()
  }, 3000);
}
