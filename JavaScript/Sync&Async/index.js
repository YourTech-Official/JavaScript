// Synchronous - maintain program sequences, executes serially

console.log("Synchronous \n ");
console.log("Ram");//1 output
console.log("Syam");//2 output
console.log("Raju");//3 output

// Asynchronous - Ignor Sequences,

console.log("Asynchronous \n ");
console.log("Ram");//1 output
setTimeout(() => {
    console.log("Syam");//3 output
    
}, 1000);
console.log("Raju");//2 output