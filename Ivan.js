'use.strict';

console.log("////HARDCORE OBJECTS\\\\\\ ");
let human = {
    age : 0,
    gender : "female",
    name : "None",
    surname : "None"
};
console.log(human);
console.log("/////////\\\\\\\\\\\\\\\n");
console.log("/////////\\\\\\\\\\\\\\\n");
console.log("/////////\\\\\\\\\\\\\\\n");
console.log("////OBJECTS MADE WITH A FUNCTION\\\\\\\\ \n");
function makeHuman(name, age, gender) {
    return {
        name: name,
        age: age,
        gender: gender,
        hello () {
            return console.log("Hello, my name is "+name);
        }
    };
}

let ivan = makeHuman("Ivan \n");
ivan.hello();
console.log(typeof (ivan));
console.log("/////////\\\\\\\\\\\\\\\n");
console.log("/////////\\\\\\\\\\\\\\\n");
console.log("/////////\\\\\\\\\\\\\\\n");
console.log("/////OBJECT WITH A CONSTRUCTOR\\\\\\\\\\\\");
class animal{
    constructor(kind, legs, voice) {
        this.kind = kind;
        this.legs = legs;
        this.saay = function () {
         return console.log("hello");
        };
        this.speak = (name) => {
            console.log(name+" says "+voice);
            };
        this.info =() =>{
            console.log('This is a '+kind);
        };
    }
    sayKind(){
        console.log("I am "+this.kind);
    };
}
class pet extends animal{
    constructor(isPet, age, kind, legs) {
        super(kind, legs);
        this.isPet = isPet;
        this.age = age;
    }
  myDetails(){
        console.log("My data is: "+ this.isPet +" and " + this.age +" and "+ this.kind);
  }
}



let dog = new animal("Dog", 4, "wolf");
dog.info();
let cat = new animal("cat", 4, "Meow");
cat.speak("Peso");
cat.sayKind();

let tom = new pet("Yes", 5, "cat", 4);
tom.myDetails();
tom.eyes = "Brown";
console.log(tom);