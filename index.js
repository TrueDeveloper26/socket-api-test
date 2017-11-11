const express = require("express");
const socket = require("socket.io");

const app = express();
const server = app.listen(3001, () => {
	console.log('port 3000...');
});

const io = socket(server);

io.on('connection', connection => {
	console.log('OLOLO', connection.id);

	connection.on('chat', data => {
		// io.sockets.emit('chat', data);
		connection.broadcast.emit('chat', data);
	});
});
