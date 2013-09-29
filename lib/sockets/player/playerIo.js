var _ = require('underscore');

module.exports.createPlayer = function(socket){

  return function(user){
    if(!user){ return socket.emit('Error', 'Server: Missign user'); }

    if( !user.username || !user.arena){
      //Message to local user
      socket.emit('Error', 'Server: Missign username or arena'); 
      return false;
    }

    //set up socket information
    socket.username = user.username;
    socket.room     = user.arena;

    //First user should kill the rest
    if(_.isEmpty(this.players)){
      user.zombieController = true;
    }

    this.players[user.username] = user;
    this.grid = this.grid || user.grid;
    this.stage = this.stage || user.stage;

    socket.join(user.arena);

    //Message to local user
    socket.emit('update players', 'You have join ' + user.arena, this.players); 
    //Message to rest of the users
    socket.broadcast.to(user.arena).emit('update players', user.username + ' has join to this arena', this.players);
  };

};

module.exports.movePlayer = function(socket){
  return function(user){

    user.username = socket.username;
    socket.broadcast.to(socket.room).emit('Move player', user);

  };
};


module.exports.shoot = function(socket){
  return function(user){
    console.log(user);
    socket.broadcast.to(socket.room).emit('Shoot', user);
  };
};
