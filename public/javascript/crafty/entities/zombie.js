ZombieWorld.Entity.zombie = function(zombie){
  return Crafty.e("2D, Canvas, Controls, Collision, SpriteAnimation, ZombieControls, " + zombie)
        .attr({
          x: Crafty.math.randomInt(100,130),
          y: Crafty.math.randomInt(100,130)
        })
        .requires('Keyboard')
        .ZombieControls()
                            //x, y, frames
        .animate("walk_left", 0 , 1,  2)
        .animate("walk_right", 0 , 2 ,2)
        .animate("walk_up", 0,  3, 2)
        .animate("walk_down", 0, 0 , 2)
        .bind("EnterFrame", function(e) {
          if(this.isDown("LEFT_ARROW")) {
            if(!this.isPlaying("walk_left")){
              this.stop().animate("walk_left", 10);
            }
          } else if(this.isDown("RIGHT_ARROW")) {
            if(!this.isPlaying("walk_right")){
              this.stop().animate("walk_right", 10);
            }
          } else if(this.isDown("UP_ARROW")) {
            if(!this.isPlaying("walk_up")){
              this.stop().animate("walk_up", 10);
            }
          } else if(this.isDown("DOWN_ARROW")) {
            if(!this.isPlaying("walk_down")){
              this.stop().animate("walk_down", 10);
            }
          }
        }).bind("keyup", function(e) {
          this.stop();
        })
        .onHit("wall_left", function() {
          this.x += this._speed;
          this.stop();
        }).onHit("wall_right", function() {
          this.x -= this._speed;
          this.stop();
        }).onHit("wall_bottom", function() {
          this.y -= this._speed;
          this.stop();
        }).onHit("wall_top", function() {
          this.y += this._speed;
          this.stop();
        });
        
};
