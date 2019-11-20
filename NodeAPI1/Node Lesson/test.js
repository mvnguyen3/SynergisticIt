// var http = require('http');
// var total = 20;
// var server = http.createServer(function(req,res){
//     res.writeHead(200);
//     res.end(total + "");

// });
// server.listen(8081);

function factorial(num){
    for(var i=num-1; i>1; i--){
        num = num * i;
        console.log(num);
    }
    return num;
}
var factorial = factorial(5);
console.log(factorial);






