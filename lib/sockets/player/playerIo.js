var players = {};

module.exports.createPlayer = function(socket){

  return function(username, arena){

    if(!username || !arena){
      //Message to local user
      socket.emit('Error', 'Server: Missign username or arena'); 
      return false;
    }

    //set up socket information
    socket.username = username;
    socket.room     = arena;

    players[username] = {
      username: username,
      arena: arena
    };

    console.log(players);

    socket.join(arena);

    //Message to local user
    socket.emit('update players', 'You have join ' + arena, players); 
    //Message to rest of the users
    socket.broadcast.to(arena).emit('update players', username + ' has join to this arena', players);
  };

};
