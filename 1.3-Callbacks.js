//Ex1.2 - Ternary Operator
console.log("Ex1.3 - Callbacks");

//Lv1
//Ex1
console.log("Lv1 - Ex1 (process)");

const greet = (name) => {
    console.log(`Hola ${name}`)
}

function process(name, callback) {
    callback(name);
}

process("Javi", greet);

//Lv1
//Ex2
console.log("Lv1 - Ex2 (calculator)");

const sum = (num1, num2) => {return num1 + num2}

function calculator(num1, num2, callback){
    console.log(callback(num1, num2));
}

calculator(5, 5, sum);

//Lv2
//Ex3
console.log("Lv2 - Ex3 (waitAndGreet)");

function waitAndGreet(name, callback){
    setTimeout(() => {
        callback(name)
    }, 2000)
}

waitAndGreet("Javi (2s tarde)", greet);

//Lv2
//Ex4
console.log("Lv2 - Ex4 (processElements)");

function processElements(array, callback){
    for (let i = 0; i < array.length ; i++){
        callback(array[i]);
    }
}

processElements(["Javi", "Ana", "Juan"], greet);

//Lv3
//Ex5
console.log("Lv3 - Ex5 (processString)");

function processString(string, callback){
    const upperString = string.toUpperCase();
    callback(upperString);
}

processString("Javi", greet);