var http=require('http');
http.createServer(function(req,res){
res.write("hello i am yash");
res.end();
}).listen(5000)