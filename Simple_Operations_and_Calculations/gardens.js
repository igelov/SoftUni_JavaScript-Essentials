function greening(input) {
    let area = Number(input.shift());
    let price = area * 7.61;
    let fprice = price * 0.82;
    console.log(`The final price is: ${fprice.toFixed(2)} lv.`);
    console.log(`The discount is: ${(price*0.18).toFixed(2)} lv.`);
}
greening([540]);