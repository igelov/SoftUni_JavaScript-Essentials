function food(input){
    let dogs = Number(input.shift());
    let others = Number(input.shift());
    let total = dogs * 2.50 + others * 4;
    console.log(total.toFixed(2) + " lv.");
}
food([5, 4]);