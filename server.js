var http = require("http");
var url = require("url");

function iniciar(route, handle){
	function onRequest(request, response){
		var dataPosteada = "";
		var pathname = url.parse(request.url).pathname;
		console.log("Peticion para " + pathname + " recibida.");

		request.setEncoding("utf8");

		request.addListener("data", function(postDataChunk){
			dataPosteada += postDataChunk;
			console.log("Recibido trozo POST '" + postDataChunk + "'.");
		});

		request.addListener("end", function(){
			route(handle, pathname, response, dataPosteada);	
		});

	}

	http.createServer(onRequest).listen(8080);
	console.log("Servidor Iniciado.");
};

exports.iniciar = iniciar;