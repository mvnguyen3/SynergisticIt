// T1
console.log("Synchronous code 1");

// T2
setTimeout( _ => console.log( "Timeout 2"), 0);

// T3

Promise.resolve().then( _ => console.log( "Promise 3"))
Promise.resolve().then( _ => console.log( "Promise 3"))
Promise.resolve().then( _ => console.log( "Promise 3"))
Promise.resolve().then( _ => console.log( "Promise 3"))
Promise.resolve().then( _ => console.log( "Promise 3"))

// T4
console.log("Synchronous code 4");



