var http=require('http');
var fs=require('fs');
var server=http.createServer(function(req,resp){
	console.log("going good");
	fs.readFile("./index.html",function(error,data){
		if (error){
			resp.writeHead(404);
			resp.writeHead("not found");
		}else{
			resp.write(data);
		}
		resp.end();
	});
});
server.listen(8081,'127.0.0.1');
console.log("server running at http://127.0.0.1:8081/");
