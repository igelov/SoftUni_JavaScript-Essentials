function orders(product, quantity) {
    let multiply = (a, b) => a * b;
    switch (product) {
        case "coffee":
            console.log(multiply(quantity, 1.50).toFixed(2));
            break;
        case "water":
            console.log(multiply(quantity, 1.00).toFixed(2));
            break;
        case "coke":
            console.log(multiply(quantity, 1.40).toFixed(2));
            break;
        case "snacks":
            console.log(multiply(quantity, 2.00).toFixed(2));
            break;
        default:
            console.log("No such product");
    }
}

orders("water", 5);