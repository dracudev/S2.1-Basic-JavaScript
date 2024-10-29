//Ex1.7 - Promises & Async/Await
console.log("Ex1.7 - Promises & Async/Await");

//Lv1
//Ex1
console.log("Lv1 - Ex1 (promise)");

const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello, world")
    }, 2000)
})

//Lv1
//Ex2
console.log("Lv1 - Ex2 (then)");

promise.then((result) => {
    console.log(result)
})

//Lv1
//Ex3
console.log("Lv1 - Ex3 (reject)");

const inputGreet = (input) => {
    return new Promise((resolve, reject) => {
        if (input == "hello")
        {
            setTimeout(() => {
                resolve("Input is hello")
            }, 2000)
        }
        else
            reject("Input is not hello")
    })
}

inputGreet("hello")
    .then((result) => console.log(result))
    .catch((error) => console.log(error))

    
//Lv1
//Ex4
console.log("Lv1 - Ex4 (asyncAwait)");

async function myAsync(promise) {
    const result = await promise;
    console.log(result);
}

myAsync(promise)



//Lv2
//Ex5
console.log("Lv2 - Ex5 (tryCatch)");

async function myAsync2(promise){
    try {
        const result = await promise;
        console.log(result);
    } catch (error) {
        console.error("Error:", error);
    }
}

myAsync2(promise)

//Lv3
//Ex6
console.log("Lv3 - Ex6 (promiseAll)");

const promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("promise3 worked!")
    }, 2000)
})

const promise4 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("promise4 worked!")
    }, 3000)
})

const promiseAll = Promise.all([promise3, promise4])
    .then(result => console.log(result))