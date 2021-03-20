function showHidePassword() {
  let inputPass = document.getElementById("password");
  let passSwitcher = document.getElementById("passSwitch");

  if (inputPass.type === "password") {
    inputPass.type = "text";
    passSwitcher.style.color = "#057760";
  } else {
    inputPass.type = "password";
    passSwitcher.style.color = "#736c67";
  }
}


const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repeatedPassword = document.getElementById("repeated-password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
})

function checkInputs() {

  // get input values
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const repeatedPasswordValue = repeatedPassword.value.trim();

  if (usernameValue === "") {
    // show some error

    setErrorFor(username, "Username cannot be blank");
    // add error class
  } else {
    // add success class
    setSuccesFor(username)
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; //.form-control
  const errorMsg = formControl.querySelector(".message");
  errorMsg.innerText = message;

  // add error class
  formControl.className = "form-control error";
  alert("Error");
}