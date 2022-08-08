let inputNumber = document.getElementById("input-number");
let checkButton = document.getElementById("check-button");
let message = document.getElementById("message");

checkButton.addEventListener("click", () => {
  let value = inputNumber.value;
  if (value % 3 === 0 && value % 7 === 0 && value % 9 === 0) {
    message.innerText = ` ${value} is divisible by 3,7 and 9`;
  } else if (value % 3 === 0 && value % 7 === 0) {
    message.innerText = ` ${value} is divisible by 3 and 7`;
  } else if (value % 3 === 0 && value % 9 === 0) {
    message.innerText = ` ${value} is divisible by 3 and 9`;
  } else if (value % 3 === 0) {
    message.innerText = ` ${value} is divisible by 3`;
  } else if (value % 7 === 0) {
    message.innerText = ` ${value} is divisible by 7`;
  }
});
