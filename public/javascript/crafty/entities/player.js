ZombieWorld.Entity.player = function(ID){
  return Crafty.e(ID + ", 2D, Canvas, Controls, Color, Collision, PlayerControls")
        .attr({
          x: Crafty.math.randomInt(100,130),
          y: Crafty.math.randomInt(100,130),
          w: 32,
          h: 32
        })
        .requires('Keyboard')
        .PlayerControls()
        .bind("EnterFrame", function(e) {
          //.. Logic for sprite
        }).bind("keyup", function(e) {
          this.stop();
        });
};
