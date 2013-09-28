ZombieWorld.land.grass = function(cb){

  var times = ZombieWorld.map.width * ZombieWorld.map.height;

  var sendCb = _.after(times, cb);

  //Build grass
  Crafty.load(["/images/arenas.png"], function() {
    //generate the grass along the x-axis
    for(var i = 0; i < ZombieWorld.map.width; i++) {
      //generate the grass along the y-axis
      for(var j = 0; j < ZombieWorld.map.height; j++) {
        Crafty.e("2D, Canvas, grass1, Mouse").attr({x: i * 30, y: j * 30})
        .bind('Click', function(e){
          var zombie = Crafty('zombie1');
          var endX = Math.floor(e.realX) -25;
          var endY = Math.floor(e.realY) -25;
          var directionX;
          var directionY; 

          var walk = function(cord, end, direction){

          zombie.stop().animate(direction, 15, -1);

            var interval =  setInterval(function(){
              if(zombie[cord] != end){

                if(zombie[cord] < end){
                  return zombie[cord]++;
                }else{
                  return zombie[cord]--;
                }
              }else{
                zombie.stop();
                walkY();
                clearInterval(interval); 
              }

            }, 30);

          };

          directionX = zombie.x < endX ? 'walk_right' : 'walk_left';
          walk('x', endX, directionX);

          var walkY = function(){
            if(zombie.y != endY){
              directionY =  zombie.y > endY ? 'walk_up' : 'walk_down';
              walk('y', endY, directionY);
            }
          };

        });

        sendCb();
      }
    }
  });

};
