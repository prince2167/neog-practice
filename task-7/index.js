let inputNumber = document.getElementById("input-number")
let checkButton = document.getElementById("check-Btn")

checkButton.addEventListener("click",()=>{
    if (inputNumber.value%2===0) {
        inputNumber.style = `color:green`
        
    }
    else{
        inputNumber.style = `color:red`
    }
})