let path = require('path');
let express = require('express');
let app = express();
let mainRouter = require("./mainRoutes");

app.use('/',mainRouter);

//app.get('/', function (req,res) {
//	res.send('hello world');
//});

//app.get('/about',function(req,res){
//	res.sendFile(path.join(__dirname,'views','about.html'));
//});

app.listen(process.env.PORT||3000);
console.log("Express server running on port 3000");