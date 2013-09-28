
module.exports.sendMessage = function(socket){
  return function(message){
    var text = socket.username + " says: " +  message;
    socket.broadcast.to(socket.room).emit('Send message', text);
  };
};
