//chamando frameworks
const app = require ('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {cors: {origin: 'http://localhost:3000'}})

const PORT = 3001

io.on("connection", (socket) => {
  console.log("User Connected", socket.id); 

  socket.on('disconnect', reason => {
    
  })

  socket.on("set_username", username => {
    socket.data.username = username
    
  socket.on('message', text => {
    io.emit('receive_message', {
      text,
      authorId: socket.id,
      author:socket.data.username
    })
  })
  })
});

server.listen(PORT, () => {
    console.log('Servidor Ligado com sucesso na porta ' + PORT)
  })