//Ex1.6 - Array loops
console.log("Ex1.6 - Array loops");

//Lv1
//Ex1
console.log("Lv1 - Ex1 (forEach)");

let noms = ['Anna', 'Bernat', 'Clara'];

noms.forEach(element => {
    console.log(element)
});

//Lv1
//Ex2
console.log("Lv1 - Ex2 (forOf)");

let noms2 = ['Anna', 'Bernat', 'Clara'];

for (const element of noms2) {
    console.log(element)
}

//Lv1
//Ex3
console.log("Lv1 - Ex3 (filter)");

let numeros = [1, 2, 3, 4, 5, 6];

let newArray = numeros.filter(num => num % 2 == 0)

console.log(newArray)

//Lv2
//Ex4
console.log("Lv2 - Ex4 (for-in)");


let obj = {
    nom: "Ona",
    edat: 25,
    ciutat: 'Barcelona' 
}

for (const key in obj) {
    console.log(key, ":", obj[key])
}

//Lv2
//Ex5
console.log("Lv2 - Ex5 (forofBreak)");

let numeros2 = [1, 2, 3, 4, 5, 6];

for (const element of numeros2) {
    if (element == 5)
        break
    console.log(element)
}

//Lv3
//Ex6
console.log("Lv3 - Ex6 (forofIndex)");

let noms3 = ['Anna', 'Bernat', 'Clara']
let i = 0;

for (const element of noms3) {
    console.log(element, "index:", i)
    i++;
}