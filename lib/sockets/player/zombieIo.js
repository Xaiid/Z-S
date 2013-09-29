module.exports.moveZombie = function(socket){
  return function(zombie){
    socket.broadcast.to(socket.room).emit('Move zombie', zombie);
  };
};

module.exports.hit = function(socket){
  return function(username, name, lifes){
    socket.broadcast.to(socket.room).emit('Zombie hits', username, name, lifes);
    socket.emit('Zombie hits', username, name, lifes);
  };
};
