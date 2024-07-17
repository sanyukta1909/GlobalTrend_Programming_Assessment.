// Write a function that takes a string input representing a simple arithmetic expression 
// (only addition and subtraction) and returns the result.


function evalExpression(expression) {
    let currentNumber = 0;
    let result = 0;
    let sign = 1; 
    const parts = [];
    let numStr = "";
    for (let i = 0; i < expression.length; i++) {
        const char = expression.charAt(i);
        if (char === '+' || char === '-') {
            if (numStr !== "") {
                parts.push(numStr);
                numStr = "";
            }
            parts.push(char);
        } else if (!isNaN(parseInt(char))) {
            numStr += char;
        }
    }
    if (numStr !== "") {
        parts.push(numStr);
    }
    parts.forEach(part => {
        if (part === '+') {
            result += currentNumber;
            currentNumber = 0;
            sign = 1;
        } else if (part === '-') {
            result += currentNumber;
            currentNumber = 0;
            sign = -1;
        } else {
            currentNumber = parseInt(part) * sign;
            sign = 1;
        }
    });
    result += currentNumber;

    return result;
}

console.log(evalExpression("1 + 3 - 3 + 4")); 
console.log(evalExpression("500 - 50 + 80")); 
