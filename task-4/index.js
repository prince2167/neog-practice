let counter = document.getElementById("count");
let increaseButton = document.getElementById("increase");
let decreaseButton = document.getElementById("decrease");
let count = 0;

counter.innerText = count;

increaseButton.addEventListener("click", () => {
  count++;
  counter.innerText = count;
});

decreaseButton.addEventListener("click",()=>{
    if (count>0) {
        count--;
         counter.innerText = count;
        
    }
})