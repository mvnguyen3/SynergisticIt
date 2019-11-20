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

const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout( ()=> {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  },299);
}


for(var i=0; i<arr.length; i++){
    console.log('Index: ' + i + ', element: ' + arr[i]);
}


































