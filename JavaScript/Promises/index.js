// A JavaScript Promise is an object representing the eventual completion or failure of an asynchronous operation and its resulting value.
// It acts as a placeholder for a value that may not be available yet but will be at some point in the future.

// State of Promise
// pending -> user request
// fullfill -> if server accept user request then we called promise resolved handle with .then()
// failed -> if server reject user request then we called promise rejected handle with .catch()

// simple analogy _
// Suppose you ask your dad for pocket money. then your father may give you pocket money or may not give you pocket money.

let promise = new Promise((resolve, reject) => {
    let num = 10;
    if (num == 10) {
        resolve("num is a Number ");
    } else {
        reject("num is not a Number ");
    }
})

promise.then((msg) => {
    console.log(msg);
}).catch((msg) => {
    console.log(msg);
})