//Ex1.5 - Array transformations
console.log("Ex1.5 - Array transformations");

//Lv1
//Ex1
console.log("Lv1 - Ex1 (map)");

let array = [1, 2, 3, 4]
let newArray = array.map(num => num * 2)

console.log(newArray)

//Lv1
//Ex2
console.log("Lv1 - Ex2 (filter)");

let array2 = [1, 2, 3, 4]
let newArray2 = array2.filter(num => num % 2 == 0)

console.log(newArray2)

//Lv1
//Ex3
console.log("Lv1 - Ex3 (find)");

let array3 = [1, 10, 8, 11]
let newArray3 = array3.find(num => num > 10)

console.log(newArray3)

//Lv1
//Ex4
console.log("Lv1 - Ex4 (reduce)");

let array4 = [13, 7, 8, 21]
let newArray4 = array4.reduce((a, b) => a + b)

console.log(newArray4)

//Lv2
//Ex5
console.log("Lv2 - Ex5 (oneLine)");

let array5 = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]

const oneLine = (array) => {return array.filter(num => num >= 10).map(num => num * 2).reduce((a, b) => a + b)}

console.log(oneLine(array5))

//Lv3
//Ex6
console.log("Lv3 - Ex6 (everySome)");

let array6 = [11, 12, 13, 14]

console.log("Todos son mayor que 10?", array6.every(num => num > 10))
console.log("Algunos son mayor que 10?", array6.some(num => num > 10))