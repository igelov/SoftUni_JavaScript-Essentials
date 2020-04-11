function areas(input) {
    let type = input.shift();
    let a = Number(input.shift());
    let b = Number(input.shift());
    switch (type) {
        case "square":
            console.log(a * a);
            break;
        case "rectangle":
            console.log(a * b);
            break;
        case "circle":
            console.log(((a * a)*Math.PI).toFixed(3));
            break;
        case "triangle":
            console.log((a * b)/2);
            break;
        default:
            console.log();
    }
}
areas(["circle",8.55]);