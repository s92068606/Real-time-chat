 // server.js
 const express = require("express");
 const path = require("path");
 //const http = require('http');
 //const { Server } = require('socket.io');
 const mysql = require("mysql");
 
 const app = express();
 //const server = http.createServer(app);
 const server = require("http").createServer(app);
 
 //const io = new Server(server);
 const io = require("socket.io")(server);
 app.use(express.static(path.join(__dirname+ "/public")));
 
 io.on("connection", function(socket){
   //console.log("A user connected"); // Optional: Log when a user connects
   socket.on("newuser", function(username){
     socket.broadcast.emit("update", username + " joined the conversation");
   });
 
   socket.on("exituser", function(username){
     socket.broadcast.emit("update", username + " left the conversation");
   });
 
   socket.on("chat", function(message){
     socket.broadcast.emit("chat", message);
   });
 });
 /*
   io.on('connection', (socket) => {
   console.log('a user connected');
   
   socket.on('disconnect', () => {
     console.log('user disconnected');
   });
 
   socket.on('chat message', (msg) => {
     io.emit('chat message', msg);
   });
 });  
             */
 
 server.listen(3000 /* () => {
   console.log('listening on *:3000');
 }    */
 );
 