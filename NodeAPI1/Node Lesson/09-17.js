//Earlier We had Multipage application system
//Single Page Application
//We load html for once from server
//per subsequent request html is generated on the browser on the go
//libraries or frameworks like angular, react, vue.js, polyfill, backbone.js help us in the same


//SOA - Service Oriented Architecture : Separation of Jobs and segregated to various services, 
//MicroServices, UltraServices
//Authentication/Autherization

//RESTFul API's :
//work over HTTPS protocol
//HTTPS : HyperText Transfer Protocol
//REST : Representational State Transfer 
//Each Restful API be unique
//URI : Uniform Resource Identifier
//CreateOrder by UserId

//Should Support CRUD :
//C : Create API (Post) : Should have a body of JSON data to be saved in http request(orders)
//R : Read API (Get/Get by Id) : It Should return (http response) JSON data to client (created orders by user id or order id)
//U : Update API (Put/Patch) : It should update order by order id and passed in Body (http request)
//D : Delete API (Delete By Id) : It should contain id in body (http request) to delete order


let fs = require("fs");

let FileData = fs.readFileSync("09-17Copy.js", "UTF8"); //blocking operation
console.log(FileData);
console.log("Do rest of the work");

console.log("==========Non Blocking Code Starts =================")

fs.readFile("09-17Copy.js", "UTF8", (err,FileData) => {
    console.log(FileData);
}); //non-blocking operation
console.log("Do rest of the work NonBlocking");





























