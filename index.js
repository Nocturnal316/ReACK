var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});


io.total = 0;
io.on('connection', function(socket){
  	console.log('a user connected with id# ' + socket.id);
 	io.total++;
  	io.to(socket.id).emit('hi', 'You are user #' + io.total);

	socket.on('disconnect', function(){
		console.log('user disconnected');
		io.total--;
	});

 	socket.on("action", function(data) {
 		console.log(data);
        socket.broadcast.emit(data.team, data.msg);
    });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
