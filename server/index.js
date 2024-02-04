//chamando frameworks
const app = require ('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {cors: {origin: 'http://localhost:3000'}})

//porta local em que o server vai ficar rodando
const PORT = 3001

//conecta e da um id para o usuário
io.on("connection", (socket) => {
  console.log("User Connected", socket.id); 

//desconecta o user
  socket.on('disconnect', reason => {
    
  })

//salva o nome do usuário
  socket.on("set_username", username => {
    socket.data.username = username

//salva a menssagem que o usuário escreveu
  socket.on('message', text => {
    io.emit('receive_message', {
      text,
      authorId: socket.id,
      author:socket.data.username
    })
  })
  })
});

//ativa o servidor
server.listen(PORT, () => {
    console.log('Servidor Ligado com sucesso na porta ' + PORT)
  })