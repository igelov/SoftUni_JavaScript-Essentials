function birhtday(input) {
    let age = Number(input.shift());
    let cost = Number(input.shift());
    let tprice = Number(input.shift());

    let money = 0;
    let amount = 10;
    let toys = 0;
    let sell = 0;


    for (let i = 2; i <= age; i += 2) {
        money += amount;
        amount += 10;
        money -= 1;
    }
    for (let i = 1; i <= age; i += 2) {
        toys += 1;
    }
    sell = toys * tprice;
    amount = money + sell;

    if (amount >= cost) {
        console.log(`Yes! ${(amount - cost).toFixed(2)}`);

    } else {
        console.log(`No! ${(Math.abs(amount - cost)).toFixed(2)}`);
    }
}

birhtday(['21', '1570.98', '3']);