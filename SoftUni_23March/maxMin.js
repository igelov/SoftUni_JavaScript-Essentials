function maxMin(input) {

    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;
    let n = Number(input.shift());
    for (let i = 0; i < n; i++) {
        let number = Number(input.shift());
      //  console.log(currentNumber);
        if (number < min) {

            min = number;
        }
        if (number > max) {
            max = number;
        }

    }
    console.log("Max number: " + max);
    console.log("Min number: " + min);
}
maxMin(['5', '10', '20', '304', '0', '50']);

/*function maxMin(input) {
    let n = Number(input.shift())
    console.log("Max number: " + Math.max.apply(null, input));
    console.log("Min number: " + Math.min.apply(null, input));
}


/!*
   *!/*/
/*    let min = Number.MIN_SAFE_INTEGER;
    let max = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < input.length; i++) {
        let currentNumber = Number(input[i]);
        console.log(currentNumber);
        if (currentNumber > max) {
            max = currentNumber;
        }
        if (currentNumber < min) {
            min = currentNumber;
        }
    }
    console.log("Max number: " + max);
    console.log("Min number: " + min);*/