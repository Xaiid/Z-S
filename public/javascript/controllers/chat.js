$( function(){

  $('#msg').on('keyup', function(event){
    if(event.keyCode === 13){
      $('#chatForm').submit();
    }
  });

  $('#chatForm').submit(function(event){
    var msg =  $('#msg');

    ZombieWorld.socket.emit('Send message', msg.val());
    $('#chat').append('<p>'+ msg.val() +'</p>');
    msg.val('');
    event.preventDefault();
  });

});
