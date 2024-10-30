# S2.1 Basic JavaScript

## 📄 Description

This project is focused on learning and practicing **JavaScript** fundamentals, specifically **arrow functions**, **ternary operators**, **callbacks**, **Rest and Spread operators**, **array transformations**, **loops**, and **Promises/Async-Await**. The exercises are organized into levels to progressively build up skills.

### Objectives

- Understand and practice the use of arrow functions.
- Learn and apply the ternary operator in various contexts.
- Practice callbacks, including asynchronous callbacks.
- Work with Rest and Spread operators in different scenarios.
- Use loops and transformations with arrays.
- Get familiar with Promises and async/await for asynchronous programming.

<br>

## 📐 Project Structure

### Arrow Functions

#### Level 1

- **Exercise 1**: Convert functions. Transform a basic function `add` into an arrow function that accepts two parameters and returns their sum.
  
- **Exercise 2**: Arrow function without parameters. Create an arrow function `randomNumber` that returns a random number between 0 and 100.

- **Exercise 3**: Using 'this' in arrow functions. Create a `Person` class with a property `name` and a `greet` method that uses an arrow function to print a greeting including the person's name.

#### Level 2

- **Exercise 4**: Arrow function inside a loop. Create a function `printNumbers` that accepts an array of numbers and uses a for loop with an arrow function to print each number to the console.

#### Level 3

- **Exercise 5**: Arrow function with `setTimeout`. Create an arrow function that prints a message to the console after a delay of 3 seconds.

---

### Ternary Operator

#### Level 1

- **Exercise 1**: Basic ternary operator. Write a function `canDrive` that accepts age as a parameter and uses the ternary operator to determine if the user can drive. If age is 18 or older, it should return `'You can drive'`. Otherwise, it should return `'You cannot drive'`.

- **Exercise 2**: Using comparison operators with the ternary operator. Write an expression that uses the ternary operator to determine which of two given numbers (`num1` and `num2`) is greater. If `num1` is greater, return `'num1 is greater'`. Otherwise, return `'num2 is greater'`.

#### Level 2

- **Exercise 3**: Chaining ternary operators. Write an expression that uses chained ternary operators to determine if a number is positive, negative, or zero.

- **Exercise 4**: Ternary operator with functions. Create a function `findMax` that accepts three parameters (`a`, `b`, `c`) and uses the ternary operator to determine the maximum value.

#### Level 3

- **Exercise 5**: Ternary operator inside a loop. Write a function `evenOrOdd` that accepts an array of numbers and uses a loop to iterate through the array. Inside the loop, use the ternary operator to determine if each number is even or odd.

---

### Callbacks

#### Level 1

- **Exercise 1**: Basic callback. Write a function called `process` that accepts two parameters: a number and a callback function. The `process` function should invoke the callback function, passing the number as a parameter.

- **Exercise 2**: Callbacks with mathematical operations. Write a function `calculator` that accepts three parameters: two numbers and a callback function. The `calculator` function should invoke the callback with the two numbers as parameters. Then, call `calculator` with a function that adds the two numbers.

#### Level 2

- **Exercise 3**: Using callbacks in asynchronous functions. Write a function `waitAndGreet` that accepts two parameters: a name and a callback function. The function should wait for 2 seconds and then invoke the callback, passing the name as a parameter.

- **Exercise 4**: Callbacks with arrays. Write a function `processElements` that accepts two parameters: an array and a callback function. The `processElements` function should invoke the callback for each element in the array.

#### Level 3

- **Exercise 5**: Write a function `processString` that accepts two parameters: a string and a callback function. The `processString` function should convert the string to uppercase and then invoke the callback with the transformed string.

---

### Rest & Spread Operators

#### Level 1

- **Exercise 1**: Spread operator with arrays. Create two arrays, `array1` and `array2`. Use the spread operator to create a third array that contains all elements of `array1` and `array2`.

- **Exercise 2**: Rest operator in functions. Create a function `sum` that uses the rest operator to accept an indefinite number of arguments and returns their sum.

#### Level 2

- **Exercise 3**: Copying objects with the spread operator. Create an object `object1`. Then create a second object, `object2`, which is a copy of `object1` using the spread operator. Change a property of `object2` and confirm that `object1` has not changed.

- **Exercise 4**: Rest in destructuring. Create an array with multiple elements. Use destructuring and the rest operator to assign the first two elements to variables, and then assign the remaining elements to a third variable.

#### Level 3

- **Exercise 5**: Spread in functions. Create a function that accepts three arguments. Then, create an array with three elements and call the function using the spread operator with this array.

- **Exercise 6**: Merging objects with the spread operator. Create two objects with different properties. Use the spread operator to merge these two objects into a new one.

---

### Array Transformations

#### Level 1

- **Exercise 1**: `Map`. You have an array of numbers `[1, 2, 3, 4]`. Create a new array that contains the square of each number.

- **Exercise 2**: `Filter`. You have an array of numbers `[1, 2, 3, 4]`. Create a new array that contains only the even numbers.

- **Exercise 3**: `Find`. You have an array of numbers `[1, 10, 8, 11]`. Use the `find` function to locate the first number greater than 10.

- **Exercise 4**: `Reduce`. You have an array of numbers `[13, 7, 8, 21]`. Use the `reduce` function to calculate the total sum of the numbers.

#### Level 2

- **Exercise 5**: Given the array `[1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9]`, create a function in a single line that does the following:
  - Filters numbers greater than or equal to 10.
  - Multiplies each filtered number by 2.
  - Calculates the sum of the filtered and multiplied numbers.
  - The function should return the result of the sum.

#### Level 3

- **Exercise 6**: `Every` / `Some`. Use `every` and `some` to determine if all or some of the elements in the array `[11, 12, 13, 14]` are greater than 10.

---

### Array Loops

#### Level 1

- **Exercise 1**: `forEach`. You have an array of names. Use `forEach` to print each name to the console: `let names = ['Anna', 'Bernat', 'Clara']`.

- **Exercise 2**: `for-of`. You have an array of names. Use a `for-of` loop to print each name to the console: `let names = ['Anna', 'Bernat', 'Clara']`.

- **Exercise 3**: `filter`. You have an array of numbers. Use `filter` to create a new array that contains only even numbers: `let numbers = [1, 2, 3, 4, 5, 6]`.

#### Level 2

- **Exercise 4**: `for-in`. You have an object with key-value pairs: `let obj = { name: 'Ona', age: 25, city: 'Barcelona' }`. Use a `for-in` loop to print each key and its corresponding value to the console.

- **Exercise 5**: `for-of` with `break`. You have an array of numbers. Use a `for-of` loop to print numbers to the console until you find the number 5, then stop the loop: `let numbers = [1, 2, 3, 4, 5, 6]`.

#### Level 3

- **Exercise 6**: `for-of` with index. Use a `for-of` loop to print each element of the array and its position (index): `let names = ['Anna', 'Bernat', 'Clara']`.

---

### Promises & Async/Await

#### Level 1

- **Exercise 1**: Creating a promise. Create a promise that resolves after 2 seconds and returns the string `'Hello, world'`.

- **Exercise 2**: Using a promise. Use the promise created in the previous exercise. Create a `.then` that prints the result to the console.

- **Exercise 3**: Promise with reject. Create a promise that resolves after 2 seconds if the input is `'Hello'`, and rejects if the input is anything else.

- **Exercise 4**: Using async/await. Write an async function that uses the `await` keyword to wait for the result of the promise created in Exercise 1, then prints that result to the console.

#### Level 2

- **Exercise 5**: Error handling with async/await. Modify the function from Exercise 4 to catch any potential errors using a try/catch block.

#### Level 3

- **Exercise 6**: `Promise.all`. Create two promises that resolve after 2 and 3 seconds, respectively. Use `Promise.all` to wait for both promises to resolve, then print the results to the console.


<br>

## 💻 Technologies Used

- JavaScript (ES6+)

<br>

## 📋 Requirements

- **Node.js** or **Browser Console**
- **Code Editor** (e.g., [VS Code](https://code.visualstudio.com/))

<br>

## 🛠️ Installation

1. Clone this repository: 
   ```bash
   git clone https://github.com/dracudev/S2.1-Basic-JavaScript
   ```
2. Navigate to the project directory: 
   ```bash
   cd S2.1-Basic-JavaScript
   ```
3. Open the project in your text editor: 
   ```bash
   code .
   ```

<br>

## ▶️ Execution


1. **Usando Node.js:**
   - Ejecuta el proyecto con el comando `node --watch` en tu terminal.

2. **Inspección en el Navegador:**
   - Abre el proyecto en tu navegador y utiliza la opción de "inspeccionar" para acceder a la consola.


<br>

## 🌐 Deployment

No needed for this project.
