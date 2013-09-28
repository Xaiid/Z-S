ZombieWorld.land.grass = function(cb){

  var times = ZombieWorld.map.width * ZombieWorld.map.height;

  var sendCb = _.after(times, cb);

    //generate the grass along the x-axis
    for(var i = 0; i < ZombieWorld.map.width; i++) {
      //generate the grass along the y-axis
      for(var j = 0; j < ZombieWorld.map.height; j++) {
        Crafty.e("2D, Canvas, floor, Mouse").attr({x: i * 30, y: j * 30})
        .bind('Click', function(e){

          if(ZombieWorld.player.x && !ZombieWorld.player.moving && ZombieWorld.control){
            ZombieWorld.player.moving     = true;
            ZombieWorld.player.shouldMove = true;
            
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
                  ZombieWorld.player.animate('walk_left', 10, -1);
                  startX-=speed;
                  ZombieWorld.player.x = startX;
                  ZombieWorld.socket.emit('Move zombie', {x: startX, y: startY, to: "walk_left", who: ZombieWorld.player.name});
                  if(startX > self.x && ZombieWorld.player.shouldMove){
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
                  ZombieWorld.player.animate('walk_right', 10, -1);
                  startX+=speed;
                  ZombieWorld.socket.emit('Move zombie', {x: startX, y: startY, to: "walk_right", who: ZombieWorld.player.name});
                  ZombieWorld.player.x = startX;
                  if(startX < self.x && ZombieWorld.player.shouldMove){
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
                  ZombieWorld.player.animate('walk_up', 10, -1);
                  startY-=speed;
                  ZombieWorld.player.y = startY;
                  ZombieWorld.socket.emit('Move zombie', {x: startX, y: startY, to: "walk_up", who: ZombieWorld.player.name});
                  if(startY > self.y && ZombieWorld.player.shouldMove){
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
                  ZombieWorld.socket.emit('Move zombie', {x: startX, y: startY, to: "walk_down", who: ZombieWorld.player.name});
                  ZombieWorld.player.y = startY;
                  if(startY < self.y && ZombieWorld.player.shouldMove){
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
};
