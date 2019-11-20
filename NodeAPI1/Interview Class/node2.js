// Question 1
// (() => {
//     let x, y;
//     try {
//       throw new Error();
//     } catch (x) {
//       (x = 1), (y = 2);
//       console.log(x);
//     }
//     console.log(x);
//     console.log(y);
//   })();


  // Question 2
  // [[0, 1], [2, 3]].reduce(
  //   (acc, cur) => {
  //     return acc.concat(cur);
  //   },
  //   [1, 2]
  // );

// Question 3
[1, 2, 3].map(num => {
  console.log( typeof num === "number")
  if (typeof num === "number") return;
  return num * 2;
});







  