$( function(){
  $('#loginForm').submit(function(event){
       console.log(asd);
    $.ajax({
      url: '/login',
      method: 'POST',
      data: {username: $('#username').val(), password: 1234},
    }).done(function(data){
       console.log(data);
    });
    event.preventDefault();
  });
});
