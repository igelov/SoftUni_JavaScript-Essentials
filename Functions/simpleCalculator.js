function simpleCalculator(digit1, digit2, operator) {
    switch (operator) {
        case "multiply":
            let multiply = (a, b) => a * b;
            console.log(multiply(digit1, digit2));
            break;
        case "divide":
            let divide = (a, b) => a / b;
            console.log(divide(digit1, digit2));
            break;
        case "add":
            let add = (a, b) => a + b;
            console.log(add(digit2, digit1));
            break;
        case "subtract":
            let subtract = (a, b) => a - b;
            console.log(subtract(digit1, digit2));
            break;
        default:

    }
}
simpleCalculator(2,8,"add");