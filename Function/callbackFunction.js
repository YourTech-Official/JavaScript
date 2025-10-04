// callback function -
// A function passes as an argument to another function.
// it gets executed after a certain task is completed.

let Hello = () => {
    console.log("Adi");
}

let greet = (hello) => {
    console.log("Hiiiiiii !");
    hello();
}

greet(Hello); // Hello function passes as an argument

let sum = (a, b) => {
    console.log(a + b);
}

// let callSum = (a, b, sumCallback) => {
//     console.log(`Sum of ${a} and ${b} is : `);
//     sumCallback(a, b);
// }

// callSum(2, 3, sum);
// callSum(2, 3, () => {
//     console.log("Multiplication of 2 and 3 is : ", 2 * 3);
// })

// multiple callback

let callSum = (a, b, ...callback) => {
    console.log(`Sum of ${a} and ${b} is : `);
    callback.forEach(callback => {
        callback(a, b);
    })
}


callSum(2, 3, sum, (a, b) => {
    console.log("Multiplication of 2 and 3 is : ", a * b);
})

// nested callback example

let getData = (callback) => {
    console.log("Getting data...");
    setTimeout(() => {
        callback("User data");
    }, 1000);
}

let processData = (data, callback) => {
    console.log("Processing:", data);
    setTimeout(() => {
        callback("Processed " + data);
    }, 1000);
}

let saveData = (data, callback) => {
    console.log("Saving:", data);
    setTimeout(() => {
        callback("Saved successfully");
    }, 1000);
}

// Nested callbacks (Callback Hell)
getData((data) => {
    processData(data, (processedData) => {
        saveData(processedData, (result) => {
            console.log("Final result:", result);
        });
    });
});

// another example of nested callback (callback hell)

let arithmetic = (a, b, callback) => {
    let result = a + b;
    console.log("Addition:", result);
    callback(result);
}

let multiplication = (num, callback) => {
    let result = num * 2;
    console.log("Multiplication:", result);
    callback(result);
}

let subtraction = (num, callback) => {
    let result = num - 5;
    console.log("Subtraction:", result);
    callback(result);
}

// Nested callback chain
arithmetic(10, 5, (addResult) => {
    multiplication(addResult, (mulResult) => {
        subtraction(mulResult, (finalResult) => {
            console.log("Final Result:", finalResult);
        });
    });
});