function fishTank(input) {
    let length = Number(input.shift());
    let width = Number(input.shift());
    let height = Number(input.shift());
    let percent = Number(input.shift())*0.01;
    let volume = length*width*height;
    let liters = volume * 0.001;
    let water = (liters *(1-percent)).toFixed(3);
    console.log(water);
}
fishTank([85,75, 47, 17]);
