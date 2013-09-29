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
      $(this).toggleClass('open');
      $('#chat-slide').toggleClass('visible');
  });

  var path = window.location.pathname;
  var links = $('.navbar-nav li a');
  $.each(links, function(i,val){
      if ($(val).attr('href') === path){
          $(val).parent('li').addClass('active');
      }
  });
});
