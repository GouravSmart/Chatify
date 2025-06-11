const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

io.on('connection', socket => {
  console.log('User connected');

  socket.on('join', name => {
    socket.username = name;
    io.emit('chat message', { name: 'System', message: `${name} joined the chat.` });
  });

  socket.on('chat message', ({ name, message }) => {
    io.emit('chat message', { name, message });
  });

  socket.on('leave', name => {
    io.emit('chat message', { name: 'System', message: `${name} left the chat.` });
  });

  socket.on('disconnect', () => {
    if (socket.username) {
      io.emit('chat message', { name: 'System', message: `${socket.username} disconnected.` });
    }
  });
});

http.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});