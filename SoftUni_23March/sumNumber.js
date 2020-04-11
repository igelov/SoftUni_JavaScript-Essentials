function sumNumbers(input) {
    let n = Number(input.shift());
    let sum = 0;
    let i = 1;
        while(i<=n){
        sum = sum +Number(input.shift());
        i++;
    }
    console.log(sum);
}
sumNumbers([3,-10,-20,-30]);
// for (let i = 0; i <n ; i++) {
//    sum = sum + input[i];
// }