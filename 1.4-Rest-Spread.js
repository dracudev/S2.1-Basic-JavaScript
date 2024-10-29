//Ex1.4 - Rest & Spread
console.log("Ex1.4 - Rest & Spread");

//Lv1
//Ex1
console.log("Lv1 - Ex1 (spreadArray)");

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [...array1, ...array2]

console.log(array3)

//Lv1
//Ex2
console.log("Lv1 - Ex1 (restSum)");

function sum2(...nums){
    return nums.reduce((a, b) => a + b, 0)
}

console.log(sum2(5, 5, 5, 5))

//Lv2
//Ex3
console.log("Lv2 - Ex3 (spreadObjects)");

let object1 = {
    color: "blue",
    age: 34,
    ids: [1, 4, 5, 6]
}

let object2 = {...object1}
object2["color"] = "green"
console.log("El color de objeto 2 es", object2["color"])
console.log("El color de objeto 1 es", object1["color"])

//Lv2
//Ex4
console.log("Lv2 - Ex4 (destructuring)");

let array = [2, "hola", 45, "Javi", "adios"]
const [var1, var2, ...resto] = array;

console.log("Var 1: ", var1);
console.log("Var 2: ", var2);
console.log("Resto: ", resto);

//Lv3
//Ex5
console.log("Lv3 - Ex5 (spreadFunction)");

function spreadArray(arg1, arg2, arg3) {
    console.log(arg1, arg2, arg3)
}

const newArray = [5, "prueba", 2]
spreadArray(...newArray)

//Lv3
//Ex6
console.log("Lv3 - Ex6 (spreadFusion)");

let car = {
    wheels: 4,
    doors: 5,
    color: "negro"
}

let bike = {
    speed: 120,
    brand: "Harley",
    price: 1000,
}

let carbike = {...car, ...bike}

console.log(carbike)