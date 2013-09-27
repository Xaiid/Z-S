// A wall is an entity that works as an actor and is solid
ZombieWorld.Entity.Exit = function(options){ 
  return Crafty.e(ZombieWorld.properties.solid_components + 'Exit')
  .color('rgb(40, 76, 16)')
  .attr({
    x: (options.x * ZombieWorld.map.title.width),
    y: (options.y * ZombieWorld.map.title.height),
    w: ZombieWorld.map.title.width,
    h: ZombieWorld.map.title.height * 3
  });

};
