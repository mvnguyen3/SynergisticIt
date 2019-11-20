// 6. Use Promise to Show UserDetails from a function, upon resolved show user details and upon rejected show message that unable to call api
// var promise1 = new Promise((resolve, reject) => {
//   // setTimeout(() =>{
//   //     resolve(showUserDetails())
//   // }, 300);

//   setTimeout(() => {
//     reject("Unable to call api");
//   }, 300);
// })
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

// var showUserDetails = () => {
//   return "Successfully getting all users data";
// };

//Add Number 1 to 10 using "reduce" where in the function accepts rest parameter and we pass the array as spread operator.
// var arr = [];
// for (var i=1; i<=10; i++){
//     arr.push(i);
// }

// function sum(...arr){
//     return arr.reduce((prev, curr) => {
//         return prev + curr;
//     })
// }
// console.log(sum(...arr));

//7. what will the following code output?

// const arr = [10, 12, 15, 21];

// //
// // let is lexical scope variable
// for (let i = 0; i < arr.length; i++) {
//   setTimeout(() => {
//     console.log("Index: " + i + ", element: " + arr[i]);
//   }, 299);
// }

// for (var i = 0; i < arr.length; i++) {
//   // pass in the variable i so that each function
//   // has access to the correct index
//   setTimeout(
//     (function(i_local) {
//       return function() {
//         console.log("The index of this number is: " + i_local);
//       };
//     })(i),
//     300
//   );
// }

//OutPut Of the following

var a = Person("apple"); // Wrong way to create an object, a will be undefined
var b = new Person("samsung");
var c = Person; // Default is undefind for every variable

// Constructor function
function Person(name) {
  this.first_name = name;
}

// console.log(a);
// console.log(b);
// console.log(c);

/*-- Answer : First of all, function definition will be hoisted and it’s possible to define it after the usage (although that isn’t the best practice).
a will be assigned with undefined, as executing Person as a function returns undefined, therefore logging its name will cause an exception to be thrown: “Cannot read property ‘first_name’ of undefined”.
b is the right way, to instantiate an object and will print ‘b’ as expected.
c is just a reference to a function and will return undefined since the function has no first_name value assigned to it. */

//What could be the proper way to check name and print the same
// Make change so it would print hey amy
function greet(person) {
  if (JSON.stringify(person) == JSON.stringify({ name: "amy" })) {
    return "hey amy";
  } else {
    return "hey arnold";
  }
}
console.log(greet({ name: "amy" }));

// function greet(person) {
//   if (typeof person == typeof { name: "amy" }) {
//     return "hey amy";
//   } else {
//     return "hey arnold";
//   }
// }
// console.log(greet({ name: "amy" }));
