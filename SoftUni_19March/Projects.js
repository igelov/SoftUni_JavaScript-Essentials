function projects (input){
    let name = input.shift();
    let number = input.shift();
    console.log(`The architect ${name} will need ${number*3} hours to complete ${number} project/s.`);
}
projects([`Ivan`, 5]);