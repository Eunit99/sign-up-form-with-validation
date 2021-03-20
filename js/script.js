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
});

function checkInputs() {
  // get input values
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const repeatedPasswordValue = repeatedPassword.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  } else {
    setSuccesFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccesFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else {
    setSuccesFor(password);
  }

  if (repeatedPasswordValue === "") {
    setErrorFor(repeatedPasswordValue, "Repeated password cannot be blank");
  } else if (repeatedPasswordValue !== passwordValue) {
    setErrorFor(repeatedPasswordValue, "Repeated password does not match");
  } else {
    setSuccesFor(repeatedPasswordValue);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; //.form-control
  const errorMsg = formControl.querySelector(".message");
  errorMsg.innerText = message;

  // add error class
  formControl.className = "form-control error";
  console.log(message);
}

function setErrorFor(input) {
  const formControl = input.parentElement; //.form-control
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
