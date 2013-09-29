
module.exports.moveZombie = function(socket){
  return function(zombie){
    socket.broadcast.to(socket.room).emit('Move zombie', zombie);
  };
};
