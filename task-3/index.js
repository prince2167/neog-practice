let inputText = document.getElementById("text");
let increaseButton = document.getElementById("increase");
let decreaseButton = document.getElementById("decrease");
let fontSize = 16;


increaseButton.addEventListener("click", () => {
  fontSize = fontSize + 2;
  inputText.style = `font-size : ${fontSize}px`;
});

decreaseButton.addEventListener("click",()=>{
    fontSize = fontSize-2
    inputText.style =`font-size : ${fontSize}px`
})
