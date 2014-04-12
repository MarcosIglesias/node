function route(handle, pathname, response, postData){
	console.log("A punto de routear una peticion para [" + pathname + "]");
	if (typeof handle[pathname] === 'function') {
		handle[pathname](response, postData);
	}else{
		console.log("No se encontro manipulador para " + pathname);
		response.writeHead(404, {"Content-Type": "text/html"});
		response.write("404 Not found");
		response.end();
	}
}

exports.route = route;