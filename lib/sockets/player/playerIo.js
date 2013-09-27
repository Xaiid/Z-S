module.exports.createPlayer = function(socket){

  return function(user){

    if( !user.username || !user.arena){
      //Message to local user
      socket.emit('Error', 'Server: Missign username or arena'); 
      return false;
    }

    //set up socket information
    socket.username = user.username;
    socket.room     = user.arena;

    this.players[user.username] = user;

    console.log(this.players);

    socket.join(user.arena);

    //Message to local user
    socket.emit('update players', 'You have join ' + user.arena, this.players); 
    //Message to rest of the users
    socket.broadcast.to(user.arena).emit('update players', user.username + ' has join to this arena', this.players);
  };

};
