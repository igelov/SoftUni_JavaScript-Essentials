function leftRight(input) {
    let n = Number(input.shift());
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < n; i+=2) {
        sum1 = sum1 + Number(input[i]);
    }
    for (let i = 1; i < n ; i+=2) {
        sum2 = sum2 + Number(input[i]);
    }
    if (sum1 === sum2) {
        console.log(`Yes`);
        console.log(`Sum = ${sum1}`);
    }
    else{
        console.log(`No`);
        console.log(`Diff = ${Math.abs(sum1-sum2)}`);
    }
}

leftRight(['4', '10', '50', '61', '20']);