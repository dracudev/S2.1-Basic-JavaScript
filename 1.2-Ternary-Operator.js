//Ex1.2 - Ternary Operator
console.log("Ex1.2 - Ternary Operator");

//Lv1
//Ex1
console.log("Lv1 - Ex1 (canDrive)");

const canDrive = (age) => {
    const message = age >= 18 ? "Can drive" : "Can't drive"
    console.log(`With ${age} years you ${message}`)
}

canDrive(12);

//Lv1
//Ex2
console.log("Lv1 - Ex2 (biggestNumber)");

const biggestNumber = (number1, number2) => {
    const message = number1 >= number2 ? `${number1} is bigger than ${number2}` : `${number2} is bigger than ${number1}`
    console.log(message)
}

biggestNumber(8, 2);

//Lv2
//Ex3
console.log("Lv2 - Ex3 (findSign)");
const findSign = (num) => {
    const result = num > 0 ? "Positive" : (num == 0 ? "0" : "Negative")
    console.log(`${num} is ${result}`)  
}

findSign(1201);

console.log("Lv2 - Ex3 (findMax)");

const findMax = (a, b, c) => {
    const max1 = ((a > b) && (a > c)) ? a : b
    const max2 = ((max1 > c) && (max1 > c)) ? max1 : c
    console.log(`Max num is: ${max2}`)  
}

findMax(4, 2, 9);

console.log("Lv3 - Ex4 (evenOdd)");

const evenOdd = (numArray) => {
    for (let i = 0; i < numArray.length; i++) 
    {
        let result = ((numArray[i] % 2) == 0) ? "Even" : "Odd"
        console.log(`${numArray[i]} is ${result}`)
    }
}

evenOdd([2, 5, 6, 0, 19]);