// A wall is an entity that works as an actor and is solid
ZombieWorld.Entity.Obstacle = function(options){ 
  return Crafty.e(ZombieWorld.properties.solid_components + 'Obstacle')
  .color(ZombieWorld.properties.obstacle[options.type].color)
  .attr({
    x: (options.x * ZombieWorld.map.title.width),
    y: (options.y * ZombieWorld.map.title.height),
    w: (ZombieWorld.map.title.width * (ZombieWorld.properties.obstacle[options.type].width + 1)),
    h: (ZombieWorld.map.title.height * (ZombieWorld.properties.obstacle[options.type].height))
  });

};
