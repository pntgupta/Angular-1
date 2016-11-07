var fs = require('fs');
var express = require('express');
var app = express();

app.get("/",function(req,res){
	var rs = fs.createReadStream("index.html");
	res.writeHead(200,{'Content-Type': 'text/html'});
	rs.pipe(res);
});

app.use(express.static(__dirname));

app.get("*",function(req,res){
	res.end("No file found!");
});

app.listen(1234);