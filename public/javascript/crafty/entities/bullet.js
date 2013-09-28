ZombieWorld.Entity.Bullet = function(options){
  return Crafty.e("2D, DOM, Color, Bullet")
        .attr({
          x: options.x,
          y: options.y,
          w: 5,
          h: 2
        })
        .color('rgb(250,0,0)');
};
