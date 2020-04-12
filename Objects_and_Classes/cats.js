function catsObjects(arr) {
    let cats = [];

    class Cat {
        constructor(name, age) {
            this.catName = name;
            this.catAge = age;
            this.meow = function () {
                console.log(`${ this.catName}, age ${this.catAge} says Meow`);
            };
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let catData = arr[i].split(' ');
        let name, age;
        [name, age] = [catData [0], catData[1]];
        cats.push(new Cat(name, age));
    }
    for (let i = 0; i < cats.length; i++) {
        cats[i].meow();
    }
}

catsObjects(['Mellow 2', 'Tom 5']);

