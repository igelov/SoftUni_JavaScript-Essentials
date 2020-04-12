function firstLast(input) {
    let el1 = Number(input.shift());
    let el2 = Number(input.pop());
    let sum = el1 + el2;
    console.log(sum);
}

firstLast([1, 2]);