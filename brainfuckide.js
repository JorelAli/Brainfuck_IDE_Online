var http = require('http');
var fs = require('fs');

/* Web imports */
var path = require('path');
var socketio = require('socket.io');
var express = require('express');
var bodyParser = require('body-parser');

/* Starts up the web server */
var router = express();
var server = http.createServer(router);
var io = socketio.listen(server);
var ip = '127.0.0.1';
var serverVersion = "1.11.2";

router.use(express.static(path.resolve(__dirname, 'client')));

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
router.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
router.use(bodyParser.json());

io.on('connection', function (socket) {
	// When a person sends a message using the message form
    socket.on('leave', function(msg) {
      console.log("leave received")
    }); 
  });
  
  
// Server listens for new people
server.listen(process.env.PORT || 3000, process.env.IP || ip, function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});