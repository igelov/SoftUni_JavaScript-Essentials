function condenced(numbersInput) {
    let numbers = numbersInput;
    let condenced = [];
        while (numbers.length > 1) {
            condenced = [];
            for (let i = 0; i < numbers.length - 1; i++) {
                condenced.push(numbers[i] + numbers[i + 1]);
            }
            numbers = condenced;
        }
        console.log(numbers[0]);
}

condenced([5]);