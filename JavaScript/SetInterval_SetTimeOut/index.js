// setInterval() is used to execute a function repeatedly after a given interval of time (in milliseconds)
// clearInteval() : used to stop setInterval()
// setTimeout() : is used to execute a function after a specified delay(in milliseconds),
// but it only runs once.



let clear = setInterval(() => {
    console.log("hello");
}, 1000);


setTimeout(() => {
    console.log("Hello Bhai");
}, 2000);

clearInterval(clear);





