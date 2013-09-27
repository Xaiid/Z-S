// A wall is an entity that works as an actor and is solid
ZombieWorld.Entity.Entrance = function(options){ 
  return Crafty.e(ZombieWorld.properties.solid_components + 'Entrance')
  .color('rgb(161, 31, 50)')
  .attr({
    x: (options.x * ZombieWorld.map.title.width),
    y: (options.y * ZombieWorld.map.title.height),
    w: ZombieWorld.map.title.width,
    h: ZombieWorld.map.title.height
  });

};
