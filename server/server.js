const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const publicPath = path.join(__dirname,'../public');

const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New User Connected');

// server emitting listener in client
/*
socket.emit('newEmail', {
  from: 'mike@example.com',
  text:'hey',
  createdAt: 123

});
*/
socket.emit('newMessage', {
  from: 'Adi',
  text:'hey sup?',
  createdAt: 123
});

socket.on('createMessage', function(message) {
  console.log('new message', message);
});
// server listening for createEMail, client emits
socket.on('createEmail', function(newEmail) {
  console.log('createEmail', newEmail);
});

socket.on('disconnect', () => {
    console.log('User disonnected');
  });

});

server.listen(port, function () {
  console.log(`Server is up on ${port})`);
});
