// function sum(x) {
//   if (y !== undefined) {
//     return x + 1;
//   } else {
//     return function(x) {
//       return x + 1;
//     };
//   }
// }

// console.log(sum(2, 3)); //5

// function sum(x, y) {
//   if (y !== undefined) {
//     return x + y;
//   } else {
//     return function(y) {
//       return x + y;
//     };
//   }
// }

// console.log(sum(2, 3)); //5
// console.log(sum(2)(4)); // its function invocation

// 2. Create a function to populate user details.
// func - populateDetail prints Adress and accepts a callBackFunction which prints Name, Age and Topic

// var userDetails = {
//   Name: "",
//   Age: "",
//   Topic: ""
// };

// var populateDetail = (name, age, topic) => {
//   userDetails.Name = name;
//   userDetails.Age = age;
//   userDetails.Topic = topic;
// };

// var user = (topics, callback) => {
//   console.log(`Topic ${topics}`);
//   callback();
// };

// user("Example of callBack function", () => {
//   populateDetail("Kadhik", "22", "Best SpringBoot Developer");
//   console.log(userDetails);
// });

// const ud = { name: "asdasd", age: "25" };
// var ud2 = [ud];

// console.log(ud2.map(u => (u.name ? u.name : "MyName")));
// function print(printing) {
//   return function (printer) {
//     console.log(printing + ", " + printer + "!");
//   };
// }

// print("somethinng")("Hi");

//4. output of the following
console.log(typeof undefined);
console.log(typeof null); 
console.log(typeof typeof wdawl); // Always be string
















