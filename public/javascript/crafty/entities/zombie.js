ZombieWorld.Entity.zombie = function(zombie){
  return Crafty.e("2D, Canvas, Controls, Collision, Fourway, SpriteAnimation, ZombieControls, " + zombie)
        .attr({
          x: Crafty.math.randomInt(100,130),
          y: Crafty.math.randomInt(100,130)
        })
        .fourway(ZombieWorld.properties.zombie.speed)
        .stopOnSolids()
        .requires('Keyboard')
        .animate("walk_left", 0 , 1,  2)
        .animate("walk_right", 0 , 2 ,2)
        .animate("walk_up", 0,  3, 2)
        .animate("walk_down", 0, 0 , 2)
        .bind('NewDirection', function(data) {
          if (data.x > 0) {
            this.animate('walk_right', ZombieWorld.properties.animation_speed, -1);
          } else if (data.x < 0) {
            this.animate('walk_left', ZombieWorld.properties.animation_speed, -1);
          } else if (data.y > 0) {
            this.animate('walk_down', ZombieWorld.properties.animation_speed, -1);
          } else if (data.y < 0) {
            this.animate('walk_up', ZombieWorld.properties.animation_speed, -1);
          } else {
            this.stop();
          }
        })
        .stopOnSolids()
        .bind("EnterFrame", function(e) {
          if(this.isDown("LEFT_ARROW")) {
            ZombieWorld.socket.emit('Move', {x: this.x, y: this.y, to: "LEFT_ARROW"});
          } else if(this.isDown("RIGHT_ARROW")) {
            ZombieWorld.socket.emit('Move', {x: this.x, y: this.y, to: "RIGHT_ARROW"});
          } else if(this.isDown("UP_ARROW")) {
            ZombieWorld.socket.emit('Move', {x: this.x, y: this.y, to: "UP_ARROW"});
          } else if(this.isDown("DOWN_ARROW")) {
            ZombieWorld.socket.emit('Move', {x: this.x, y: this.y, to: "DOWN_ARROW"});
          }
        //.bind("EnterFrame", function(e) {
          //if(this.isDown("LEFT_ARROW")) {
            //if(!this.isPlaying("walk_left")){
              //this.stop().animate("walk_left", 10);
            //}
          //} else if(this.isDown("RIGHT_ARROW")) {
            //if(!this.isPlaying("walk_right")){
              //this.stop().animate("walk_right", 10);
            //}
          //} else if(this.isDown("UP_ARROW")) {
            //if(!this.isPlaying("walk_up")){
              //this.stop().animate("walk_up", 10);
            //}
          //} else if(this.isDown("DOWN_ARROW")) {
            //if(!this.isPlaying("walk_down")){
              //this.stop().animate("walk_down", 10);
            //}
          //}
        //}).bind("keyup", function(e) {
          //this.stop();
        });
};
