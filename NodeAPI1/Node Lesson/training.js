
// var printingNameLoop = setInterval(printName, 5000);
// var count = 0; 

// function printName(){
//     if(count <1){
//         console.log("Minh");
//         count++;
//     }
//     else
//         clearTimeout(printingNameLoop);
// }

/*
// Hoisting
//var a = undefined;
console.log("before: ", name());

a=10;
//console.log("After: ", a);



function name(){
    console.log("This is my name");
}
//console.log("Before: ", name());
*/



// var train2 = require("./training");

// function ModuleTest(){
    
//     return user = {
//         name: "Stephen",
//         colleague:"Karthik"
//     };
// }

// var obj = ModuleTest() //Instance of Object
// console.log(obj.name);
// console.log(obj.colleague);

/*
var newObj = new Object({"Name":"Stephen"}); //Object constructor
console.log(newObj);

console.log("\n**************************")

var publicVar = "sdasd";

function name(params){
    publicVar = 21;
    var privateVar = "sdasd";
    return privateVar;
}
name();
console.log(publicVar);
console.log(name());



// ************ Object ********
console.log("\n**************************")
var person = {name: 'Marvin', age:42, size: '2xM'};

var sayHello = function(){
    console.log('Hello, ' + this.name);
};
var sayGoodbye = function(){
    console.log('Goodbye, ' + this.name + " " + this.age + " " + this.size);
};

sayHello.call(person);
sayGoodbye.call(person);


//Closures: A parent function
// a child function that should return private scope




function parent(params){
    var privateVariable = "This is a private scope of parent function";

    return function (){
            return privateVariable + " " + params;
    }
}

var closureObj = parent("Object Name Param");

console.log("Closure Value: ", closureObj());


/********************************** */
/*
var car = {
    regNumber:"XXXXXXX",
    brand:"Toyota"
}

function displayCar(ownerName, ownerCity, ownerTele){

    console.log(ownerName +"\n"+ ownerCity +"\n"+ ownerTele
                +",\n this is your car : ",
                this.regNumber + " \n  ",
                this.brand
                );    
}

//displayCar.call(car, "Joyce","NY",899545);
displayCar.call(car, "Minh", "Chicago", "312-208-0096");

//displayCar.apply(car, ["Joyce","NY",899545]);
*/
/*
var x = undefined;
x=21
var girl = function(){
    var x = undefined;
    console.log(x);
    x = 20;
};
girl();
*/
/*
var myObject = {
    foo:"bar",
    foo1:"bar1",
    func: function(){
        var self = this;
        console.log("Outer func: this.boo = " + this.foo);
        console.log("Outer func: self.foo = " + self.foo);
    },
    func2: function(){
        var self = this;
        console.log("Inner func: this.foo1 = " + this.foo1);
        console.log("Inner func: this.foo1 = " + this.foo1);
    }
};
myObject.func();
myObject.func2();
*/

// Manipulate a so the inner function will run
/*
var a=1;
var a=2;
if(a==1 && a==2){
    console.log("hello world");
}
*/
/*
var myObject = {
    foo:"bar1", foo1:"bar2", foo2:"bar3",
    func:function(){
        console.log(this.foo);
    },
    function2(){
        console.log(this.foo1);
    },
    function3(){
        console.log(this.foo2);
    }
};
myObject.func();
myObject.function2();
myObject.function3();
*/
/*


// ****************** 09/12/2019 ******************
//let and const : lexical scoped {}
var a=1;

function name(params){
    var funcScopeVar = "TestThisScript";
    let lexScopeVar = "AlreadyTested";
}

{
    //var funcScopeVar = "TestThisScript";
    let lexScopeVar = "AlreadyTested";
}
    


console.log(funcScopeVar);
console.log(lexScopeVar);
*/
//let and const : Lexical scoped {}

// Let and const doesn't allow variable re-asignment

/*
const constVar = {
    name:'Joyce',
    age:21,
    job:"programmer"
};

console.log(constVar);
*/
/*
let person = {fname:"John", lname:"Doe", age:25};

let cars = ["BMW", "Volvo", "Mini"];
let y;
let text1 = "";
for(y of cars){ // y will be the value inside cars array
    text1 += y + " ";
}
console.log(text1);
*/
/*
function add(a, b, c, d, e){
    return a + b + c + d + e;
}
let arr = [1, 2, 3, 4, 5];
console.log(add(...arr));

console.log(arr);
*/
/*
// Array Destructuring
let destructArray = ["Minh", "16", "Graduate"];
[Name, Age, Education, Street = "Mapple"] = destructArray;
console.log(Name, " ", Age, " ", Education, " ", Street);

//template literal
let a="variable a";
let longstring = `This is a new training batch we are ${a}`;
console.log(longstring);
*/

//arrow function







































