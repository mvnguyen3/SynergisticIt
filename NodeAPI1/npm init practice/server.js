let express = require('express'),
app = express();

// Redirect to router.js file
router = require("./router"),
port = process.env.PORT || 1212,
bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json({limit:'200mb', extended:false}));

app.use('/',router);

console.log("we are listening at", port);
app.listen(port);
































