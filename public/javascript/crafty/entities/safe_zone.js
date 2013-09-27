// A wall is an entity that works as an actor and is solid
ZombieWorld.Entity.SafeZone = function(options){ 
  return Crafty.e(ZombieWorld.properties.components + 'SafeZone')
  .color('rgb(94, 198, 25)')
  .attr({
    x: (options.x * ZombieWorld.map.title.width),
    y: (options.y * ZombieWorld.map.title.height),
    w: ZombieWorld.map.title.width * 2,
    h: ZombieWorld.map.title.height * 3
  });

};
