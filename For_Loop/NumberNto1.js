function numberNTo1(input) {
    let n = Number(input.shift());
    for (let i = n; i >=1; i--) {
        console.log(i);
    }
}
numberNTo1([5]);