let mongoose = require("mongoose"),
Schema = mongoose.Schema;

mongoose.connect("mongodb://127.0.0.1/npmPracticeMongodb"); 

let newSchema = new Schema({
    name: {type:String, required:true},
    age: Number,
    designation: String,
    address:Object
});

// user is the table name
let userSchema = mongoose.model("user", newSchema);

module.exports = userSchema;








