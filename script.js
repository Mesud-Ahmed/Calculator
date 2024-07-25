let displayValue = ""
let num1,num2,operator,btnValue
document.addEventListener('DOMContentLoaded', () => {
const display = document.querySelector("input")
const buttons = document.querySelectorAll("button")
buttons.forEach(btn => {
    btn.addEventListener("click",function(){
        
        btnValue = btn.textContent
        if(btnValue == "="){
            operate()
        }
        else if(btnValue == "⌫"){
            displayValue = displayValue.slice(0, -1);
                display.value = displayValue;
        }
        else if(btnValue == "clear"){
            display.value = ""
            displayValue = ""
        }
        else{
            populate(btnValue)
        }
        
    } )
}
);

function calculate(op){
    if (op === "+") return num1 + num2;
    if (op === "-") return num1 - num2;
    if (op === "*") return num1 * num2;
    if (op === "/") {
        if (num2 === 0) return "Error: division by zero!";
        return num1 / num2;
    }
    return "Error!";
}

function operate(){
  operator = displayValue.match(/[*\/+-]/)[0]
  let parts = displayValue.split(operator)
    num1 = parseFloat(parts[0])
    num2 = parseFloat(parts[1])
    let result = calculate(operator)
    if (typeof result === "string") {
        // Display error message
        display.value = result;
    } else {
        // Display result rounded to 3 decimal places
        display.value = parseFloat(result.toFixed(3));
    }

}
function populate(val){
    display.value += val
    displayValue += val
}
});