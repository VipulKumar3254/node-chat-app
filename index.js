const { Socket } = require('dgram');
const express = require('express')
const app = new express();

const http = require('http')
const server= http.createServer(app)
const {Server } = require('socket.io')
const io = new Server(server)
 
app.get('/',(req,res)=>{
    res.status(200).sendFile(__dirname +'/index.html')
})

io.on('connection',(Socket)=>{
    Socket.on('input',(message)=>{
        console.log(message);
        io.emit('input',message)
        // console.log(io.emit(message));
    })
    })

        // io.on('connection', (socket) => {
        //     socket.on('input', (msg) => {
        //       io.emit('input', msg);
        //     });
        //   });
    
server.listen(3000,()=>{
    console.log("server is listening on port 3000");

})