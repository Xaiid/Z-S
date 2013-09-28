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

          if(ZombieWorld.player && !ZombieWorld.player.moving){
            ZombieWorld.player.moving = true;

            var startX  = ZombieWorld.player.x;
            var startY  = ZombieWorld.player.y;
            var speed   = ZombieWorld.properties.zombie.speed;
            var self    = this;
            var count   = [];

            var ready = function(num){
              ZombieWorld.player.stop();
              count.push(num);
              if(count.length === 4){
                ZombieWorld.player.moving = false;
              }
            };

            removeX = function(cb){
              if(startX <= self.x){ return cb(); }
              var timer = function(){
                setTimeout(function(){
                  ZombieWorld.player.animate('walk_left', 15, -1);
                  startX-=speed;
                  ZombieWorld.player.x = startX;
                  if(startX > self.x){
                    timer();
                  }else{ return cb(); }
                }, 30);
              };
              timer();
            };

            addX = function(cb){
              if(startX >= self.x){ return cb(); }

              var timer = function(){
                setTimeout(function(){
                  ZombieWorld.player.animate('walk_right', 15, -1);
                  startX+=speed;
                  ZombieWorld.player.x = startX;
                  if(startX < self.x){
                    timer();
                  }else{ return cb(); }
                }, 30);
              };
              timer();
            };

            removeY = function(cb){
              if(startY <= self.y){ return cb(); }

              var timer = function(){
                setTimeout(function(){
                  ZombieWorld.player.animate('walk_up', 15, -1);
                  startY-=speed;
                  ZombieWorld.player.y = startY;
                  if(startY > self.y){
                    timer();
                  }else{ return cb(); }
                }, 30);
              };
              timer();
            };

            addY = function(cb){
              if(startY >= self.y){ return cb(); }

              var timer = function(){
                setTimeout(function(){
                  ZombieWorld.player.animate('walk_down', 10, -1);
                  startY+=speed;
                  ZombieWorld.player.y = startY;
                  if(startY < self.y){
                    timer();
                  }else{ return cb(); }
                }, 30);
              };
              timer();
            };


            removeX(function(){
              ready(1);
            });

            addX(function(){
              ready(2);
            });

            removeY(function(){
              ready(3);
            });

            addY(function(){
              ready(4);
            });

          }

        });

        sendCb();
      }
    }
  });

};
