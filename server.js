var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = 8888;
app.listen(port);

var messages = [];

app.use(bodyParser.json());

app.use(function(req, res, next){
  res.setHeader('Access-Cnotrol-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
})

app.get('/', function(req, res) {         //listening for get requests at this endppoint
  res.send(JSON.stringify(messages));
  // res.json('test');
})

app.post('/', function(req, res){
    messages.push(req.body);
    res.send(JSON.stringify(messages));
});


// var messages = ["werkin"];

// var onRequest = function(req, res) {
// 	if(req.method === 'GET') {
// 		res.writeHead(200, {
// 		'Connection': 'close',
// 		'Content-Type': 'application/json',
// 		'Access-Control-Allow-Origin': '*'
// 		})
// 	res.end(JSON.stringify({
//     message: messages}))
// 	}
//     if (req.method == 'POST') {
//        var postData = '';
//        req.on('data', function(chunk) {
//            postData += chunk.toString();
//         })    
//         req.on('end', function() {
//             console.log("Got POST data:");
//             console.log(JSON.parse(postData));
//             messages.createdAt = new Date().toString();
//             messages.push(JSON.parse(postData));
        
//         res.writeHead(200, {
//         'Connection': 'close',
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*'
//         'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, '

//       })
//     res.end(JSON.stringify(messages));
// 	}
// }




// http.createServer(onRequest).listen(port);
// console.log('listening on port ' + port);







