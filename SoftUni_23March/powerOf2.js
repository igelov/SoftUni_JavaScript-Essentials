function powerOf2(input) {
    let n = Number(input.shift());
    for (let i = 0; i <=n ; i+=2) {
        console.log(Math.pow(2,i));
    }
}

powerOf2([3]);