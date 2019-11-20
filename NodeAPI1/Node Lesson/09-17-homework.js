// // Reading from a stream
// var fs = require("fs");
// // Create a readable stream
// var readerStream = fs.createReadStream('input.txt');
// //Set the encoding to be utf8.
// //readerStream.setEncoding('UTF8');
// var data = "";
// // Handle stream events --> data, end, and error
// readerStream.on('data', function(text){data += text;});
// readerStream.on('end', function() {console.log(data);});
// //readerStream.on('error', function(err){console.log(err.stack);});

 

// Writing to a Stream
// Create a file with some data
var fs = require("fs");
var data = "This is 'ffefsdgs'fsefsefojbjsejgj;vjb ";
var json_data = {
    name: "Mike",
    age: "22",
    designation: "Programmer"
};
var json_data_string = JSON.stringify(json_data);
// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');
//Write the data to stream with encoding to be utf8
writerStream.write(json_data_string, 'UTF8');
// Mark the end of file
writerStream.end();
//Handle stream events --> finish, and error
writerStream.on('finish', function(){console.log("Write completed.");});
writerStream.on('error', function(err){console.log(err.stack);});
console.log("Program Ended");





















