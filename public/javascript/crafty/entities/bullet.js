ZombieWorld.Entity.Bullet = function(options){
  return Crafty.e('2D, Canvas, Solid, Color, Collision, Bullet')
        .attr({
          x: options.x,
          y: options.y,
          w: options.w,
          h: options.h
        })
        .collision()
        .onHit('Solid', function(){
          this.destroyed = true;
          this.destroy();
        })
        .color('rgb(250,0,0)');
};
