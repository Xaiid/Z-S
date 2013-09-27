// A wall is an entity that works as an actor and is solid
ZombieWorld.Entity.wall = function(options){ 
  return Crafty.e(ZombieWorld.properties.solid_components + 'Wall')
  .color('rgb(0, 0, 0)')
  .attr({
    x: options.x,
    y: options.y,
    w: ZombieWorld.map.title.width,
    h: ZombieWorld.map.title.height
  });

};
