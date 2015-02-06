var http = require('http');
var port = 8666;


var messages = ["werkin"];

var onRequest = function(req, res) {
	if(req.method === 'GET') {
		res.writeHead(200, {
		'Connection': 'close',
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*'
		})
	res.end(JSON.stringify({
    message: messages}))
	}
    if (req.method == 'POST') {
       var postData = '';
       req.on('data', function(chunk) {
           postData += chunk.toString();
        })    
        req.on('end', function() {
            console.log("Got POST data:");
            console.log(JSON.parse(postData));
            messages.push(JSON.parse(postData));
       })
    res.end(JSON.stringify(messages));
	}
}


http.createServer(onRequest).listen(port);
console.log('listening on port ' + port);







