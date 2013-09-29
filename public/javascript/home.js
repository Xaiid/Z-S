$( function(){

  $('#introduction .next').on('click',function(){
      $cont = $('#introduction');
      scroll = $cont.scrollLeft();
      $cont.animate({scrollLeft: scroll + $cont.width()}, 500);
  });
  $('#introduction .prev').on('click',function(){
      $cont = $('#introduction');
      scroll = $cont.scrollLeft();
      $cont.animate({scrollLeft: scroll - $cont.width()}, 500);
  });

  $('.chat-icon').on('click',function(){
      $('#chat-slide').toggleClass('visible');
  });
});

