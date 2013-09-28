var ZombieWorld = {
  socket: io.connect(),
  user: {}
};

$( function(){

  ZombieWorld.socket.on('welcome player', function(message){
    console.log(message);

    setTimeout(function(){
      window.localStorage.setItem('user', JSON.stringify(ZombieWorld.user));
      window.location.assign('/game');
    }, 300);

  });

  $('#loginForm').submit(function(event){
    event.preventDefault();

    ZombieWorld.user.username = $('#username').val();
    ZombieWorld.user.arena    = 'Stage 1';

    var request = $.ajax({
      url: '/login',
      method: 'POST',
      data: {username: ZombieWorld.user.username, password: 1234},
    });

    request.done(function(data){
      ZombieWorld.socket.emit('Create player', ZombieWorld.user);
    });

    request.error(function(error){
      console.log(error.responseText);
    });

  });

});
