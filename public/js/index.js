var socket = io();
socket.on('connect', function () {
  console.log('Connected to server');
  /*
  socket.emit('createEmail', {
    to:'jen@ex.com',
    text: 'hey this is jen'
  });
  */
  socket.emit('createMessage', {
    to:'jen',
    text: 'hey this is Adi'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected sfrom server');
});

socket.on('newEmail', function (email) {
  console.log('new email', email);
});

socket.on('newMessage', function (message) {
  console.log('new message', message);

});
