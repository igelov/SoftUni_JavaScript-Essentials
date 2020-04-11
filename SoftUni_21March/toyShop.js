function toyshop(input) {
    let price = input.shift();
    let puzzles = input.shift();
    let dolls = input.shift();
    let bears = input.shift();
    let minions = input.shift();
    let trucks = input.shift();
    let count = puzzles + dolls + minions + bears + trucks;
    let total = (puzzles * 2.60) + (dolls * 3) + (bears * 4.10) + (minions * 8.20) + (trucks * 2);
    if (count >= 50) {
        total = total * 0.75;
    }
    total = total * 0.90;
    if (total >= price) {
        console.log(`Yes! ${(total - price).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(price - total).toFixed(2)} lv needed.`);
    }
}

toyshop([320, 8, 2, 5, 5, 1]);