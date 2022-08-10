let inputText = document.getElementById("input-text");
let increaceButton = document.getElementById("increase-btn");

let fontSize = 16;

increaceButton.addEventListener("click", () => {
  fontSize += 2;
  inputText.style.fontSize = `${fontSize}px`;

  if (fontSize % 5 === 0) {
    inputText.style.color = "red";
  } else {
    inputText.style.color = "green";
  }
});
