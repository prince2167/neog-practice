let passwordText = document.getElementById("passwordText");
let toggleButton = document.getElementById("toggle-btn");

passwordText.addEventListener("input", () => {
  if (passwordText.value.length > 10) {
    passwordText.style = "background-color:green";
  } else {
    passwordText.style = "background-color:red";
  }
});

toggleButton.addEventListener("click", () => {
  if (passwordText.type === "password") {
    passwordText.type = "text";
    toggleButton.innerText = "Hide";
  } else {
    passwordText.type = "password";
    toggleButton.innerText = "Show";
  }
});

// if (toggleButton.innerText === "Show") {
//     passwordText.type = "text";
//     toggleButton.innerText = "Hide";
//   } else {
//     passwordText.type = "password";
//     toggleButton.innerText = "Show";
//   }
