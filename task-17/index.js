let textArea = document.getElementById("text");
let counter = document.getElementById("count");
let count = 100;
counter.innerText = count;
textArea.addEventListener("input", () => {
  let value = textArea.value;
  count = 100 - value.length;
  counter.innerText = count;
});
