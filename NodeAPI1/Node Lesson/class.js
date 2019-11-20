
/*
//class 

class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width
    }

    calculateArea()
    {
        return this.height*this.width;
    }
}

var objRectangle = new Rectangle(5,6);

console.log(objRectangle.calculateArea());

let myMap = new Map(); 

let keyString = 'a string', 
keyObj = {}, 
keyFunc = function() {}; 

myMap.set(keyString, "value associated with 'a string'"); 
myMap.set(keyObj, 'value associated with keyObj'); 
myMap.set(keyFunc, 'value associated with keyFunc');

console.log(myMap.size);

console.log(myMap.get(keyObj));
console.log(myMap.get(keyString));

const student = {
    name: 'John Doe',
    age: 16,
    scores: {
        maths: 74,
        english: 63
    }
};

// We define 3 local variables: name, maths, science
const { name, scores: {maths, science = 50} } = student;

console.log(`${name} scored ${maths} in Maths and ${science} in Elementary Science.`);

let promise = new Promise(function (resolve, reject){
    setTimeout(() => {
        resolve({
           "status":200,
           "resolution": "Done" 
        });

        reject({
            "status":100,
            "resolution": "Could not complete",            
        });
    }, 1000);
});

promise.then(function (success){
    console.log("Success", success);
}).catch(function(error){
    console.log("Error", error);
});


//filter

let persons = [
    {id : 1, name : "John", tags : "javascript"},
    {id : 2, name : "Alice", tags : "javascript"},
    {id : 3, name : "Roger", tags : "java"},
    {id : 4, name : "Adam", tags : "javascript"},
    {id : 5, name : "Alex", tags : "java"}
];

// Print out the whole list
// let personsWithJsATags = persons.filter(person => person.tags.indexOf("javascript") > -4);
// console.log(personsWithJsATags);

// Print out only name
// let namesWithJsATags = persons.map(person => person.tags.indexOf("javascript") > -4 ? person.name: "").filter(p => p != "");
// console.log(namesWithJsATags);

// Check with boolean type
// let skillWithCSharp = persons.some(person => person.tags == "CSharp");
// console.log(skillWithCSharp);

let printUniqueTags = persons.reduce((acc, persn) => {
    console.log(acc);
    acc[persn.tags] = 1;
    return acc;
}, {});
console.log(printUniqueTags);

//generator 

function *name(params) {
    var myVal = 25;
    yield params+params;
    
    yield params*params;
 
    yield params*params+myVal;
 }

var test = name(5);
console.log(test.next());

console.log(test.next());

console.log(test.next());

console.log(test.next());
*/

//async and await
//async and await
function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
console.log('asyn starts');

async function asyncCall() {
    console.log('calling');
    var result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: 'resolved'
}
asyncCall();
console.log("main thread execute completes");




























