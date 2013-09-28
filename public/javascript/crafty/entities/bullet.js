ZombieWorld.Entity.Bullet = function(options){
  return Crafty.e(ZombieWorld.properties.solid_components + 'Collision')
        .attr({
          x: options.x,
          y: options.y,
          w: options.w,
          h: options.h
        })
        .collision()
        .onHit('Obstacle', function(){
          this.destroyed = true;
          this.destroy();
        })
        .color('rgb(250,0,0)');
};
