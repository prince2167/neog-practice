let firstNumber = document.getElementById("first-number");
let secondNumber = document.getElementById("second-number");
let compareButton = document.getElementById("compare-btn");

compareButton.addEventListener("click", () => {
  if (firstNumber.value > secondNumber.value) {
    firstNumber.style.color = "green";
    secondNumber.style.color = "black";
  } else {
    secondNumber.style.color = "green";
    firstNumber.style.color = "black";
  }
});
