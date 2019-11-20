let express = require('express'),
router = express.Router({caseSensitive:true}),
useDataModel = require("./DataModel/UserDataModel");

router.get("/getName", function(req,res){
   //console.log("Response Object Meaningful: ", res);

    res.json({
        "status":200,
        "name":req.query.name
    });
});

// Save to mongoDB
router.get("/saveuser", function(req,res){
    let userDetails = new userDataModel(req.query);
    console.log("UserDetails: " + userDetails);

    

});

// Default Call
router.get("*", function(req,res){
    res.send("Hello, Please check your url");
});

module.exports = router;