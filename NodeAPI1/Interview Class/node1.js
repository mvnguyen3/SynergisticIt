console.log("*********** Example 1 **************")
// What will be the output
console.log(5<6<7);
console.log(7>6>5);


console.log("*********** Example 2 **************")
let i = Number.MIN_VALUE;

console.log(i * i);
console.log(i + 1);
console.log(i - 1);
console.log(i / i);

console.log("*********** Example 3 **************")
// T1
console.log("Synchronous code 1");

// T2 
setTimeout( _ => console.log("Timeout 2"), 0);

// T3
Promise.resolve().then( _ => console.log("Promise 3"))

// T4
console.log("Synchronous code 4");

