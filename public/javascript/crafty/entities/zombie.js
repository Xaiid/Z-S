ZombieWorld.Entity.zombie = function(zombie){
  return Crafty.e("2D, Canvas, SpriteAnimation, Mouse, zombies, " + zombie)
        .attr({
          x: Crafty.math.randomInt(100,130),
          y: Crafty.math.randomInt(100,130)
        })
       .bind('Click', function(e) {

         if(!ZombieWorld.player.moving){
           ZombieWorld.player = this;
         }

       })
       .animate("walk_left", 0 , 1,  2)
       .animate("walk_right", 0 , 2 ,2)
       .animate("walk_up", 0,  3, 2)
       .animate("walk_down", 0, 0 , 2);
        //.stopOnSolids()
};
