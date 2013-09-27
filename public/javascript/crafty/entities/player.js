ZombieWorld.Entity.player = function(ID){
  return Crafty.e(ID + ", 2D, Canvas, Controls, Color, Collision, PlayerControls")
        .attr({
          x: Crafty.math.randomInt(100,130),
          y: Crafty.math.randomInt(100,130),
          w: ZombieWorld.map.title.width,
          h: ZombieWorld.map.title.height
        })
        .requires('Keyboard')
        .PlayerControls()
        .bind("EnterFrame", function(e) {
          //.. Logic for sprite
        }).bind("keyup", function(e) {
          this.stop();
        });
};
