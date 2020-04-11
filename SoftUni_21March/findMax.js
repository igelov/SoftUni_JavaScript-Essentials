function findMax(input) {
    let number1 = Number(input.shift());
    let number2 = Number(input.shift());
    if (number1>number2){
        console.log(number1);
    }
    else{
        console.log(number2)
    }
}
findMax([1,4])