ZombieWorld.land.safeZone = function(options, cb){

  options.grid[0][9] = true;
  options.grid[0][10] = true;
  options.grid[0][11] = true;
  options.grid[0][12] = true;
  // A wall is an entity that works as an actor and is solid
    Crafty.e(ZombieWorld.properties.components + 'SafeZone')
    .color('rgb(94, 198, 25)')
    .attr({
      x: 0,
      y: 300,
      w: ZombieWorld.map.title.width * 4,
      h: ZombieWorld.map.title.height * 5
    });

    return cb();

};


