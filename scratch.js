//
function numberSequence(input) {
    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;
    let n = Number(input.shift());
    for (let i = 0; i < n; i++) {
        let number = Number(input.shift());
        if (number < minNumber) {
            minNumber = number;
        }
        if (number > maxNumber) {
            maxNumber = number;
        }
    }
console.log(maxNumber);
}
numberSequence([2,3,1]);
