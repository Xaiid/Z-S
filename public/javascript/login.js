$( function(){
  $('#loginForm').submit(function(event){
    
    var username = $('#username').val();
    var arena   = $('#arena').val();

   var request =  $.ajax({
      url: '/login',
      method: 'POST',
      data: {username: username, password: 1234},
    });

    request.done(function(data){
       console.log(data);
       ZombieWorld.socket.emit('Create player', {username: username, arena: arena});
    });

    request.error(function(err){
       console.log(err.responseText);
    });

    event.preventDefault();
  });
});
