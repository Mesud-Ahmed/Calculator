let displayValue = ""; // Current input
let num1 = null; // First number
let num2 = null; // Second number
let operator = null; // Operator
let result = null; // Result of the operation

document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector("input");
    const buttons = document.querySelectorAll("button");

    buttons.forEach(btn => {
        btn.addEventListener("click", function() {
            const btnValue = btn.textContent;

            if (btnValue === "=") {
                if (num1 !== null && operator !== null && displayValue !== "") {
                    num2 = parseFloat(displayValue);
                    result = calculate(num1, num2, operator);
                    display.value = result.toFixed(1);
                    num1 = result; // Use the result for the next calculation
                    displayValue = ""; // Reset display value
                    operator = null; // Reset operator
                }
            } else if (btnValue === "⌫") {
                displayValue = displayValue.slice(0, -1);
                display.value = displayValue;
            } else if (btnValue === "clear") {
                displayValue = "";
                display.value = "";
                num1 = null;
                num2 = null;
                operator = null;
                result = null;
            } else if (["+", "-", "*", "/"].includes(btnValue)) {
                if (num1 === null) {
                    num1 = parseFloat(displayValue);
                } else if (operator !== null) {
                    num2 = parseFloat(displayValue);
                    result = calculate(num1, num2, operator);
                    display.value = result.toFixed(1);
                    num1 = result; // Update num1 with the result
                }
                operator = btnValue;
                displayValue = "";
            } else {
                populate(btnValue);
            }
        });
    });

    function calculate(num1, num2, operator) {
        if (operator === "+") return num1 + num2;
        if (operator === "-") return num1 - num2;
        if (operator === "*") return num1 * num2;
        if (operator === "/") {
            if (num2 === 0) return "Error!";
            return num1 / num2;
        }
        return "Error!";
    }

    function populate(val) {
        displayValue += val;
        display.value = displayValue;
    }
});
