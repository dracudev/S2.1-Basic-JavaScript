//Ex1.1 - Arrow Functions
console.log("Ex1.1 - Arrow Functions");

//Lv1
//Ex1
console.log("Lv1 - Ex1 (Add function)");

const add = (a, b) => {return a + b}

console.log(add(1, 6));

//Ex2
console.log("Lv1 - Ex2 (Random number)");

const randomNumber = () => {return Math.floor(Math.random() * 100 + 1)}

console.log(randomNumber());

//Ex3
console.log("Lv1 - Ex3 (Person greet)");

class Person {
    constructor(name) {
        this.name = name;
    }

    greet = () => {
        console.log(`Hola, ${this.name}`);
    }
}

const persona = new Person("Javi");
const persona2 = new Person("Ana");
persona.greet();
persona2.greet();

//Lv2
//Ex4
console.log("Lv2 - Ex4 (Print numbers)");

const printNumbers = (numArray) => {
    for (let i = 0; i < numArray.length; i++)
    console.log(numArray[i]);
}

printNumbers([1, 2, 3, 4]);

//Lv3
//Ex5
console.log("Lv3 - Ex5 (setTimeout)");

const time3 = () => {
    setTimeout(() => {
        console.log("Waiting...");
    }, 3000);
}

time3();