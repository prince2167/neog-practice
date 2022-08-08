let inputText = document.getElementById("text");
let headingOne = document.getElementById("heading-one");
let headingTwo = document.getElementById("heading-two");
let headingThree = document.getElementById("heading-three");
let fontsize;
headingOne.addEventListener("click", () => {
  let fontsize = 32;
  inputText.style = `font-size:${fontsize}px`;
});
headingTwo.addEventListener("click", () => {
  let fontsize = 24;
  inputText.style = `font-size:${fontsize}px`;
});
headingThree.addEventListener("click", () => {
  let fontsize = 20;
  inputText.style = `font-size:${fontsize}px`;
});
