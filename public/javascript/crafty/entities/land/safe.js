ZombieWorld.land.safeZone = function(cb){

  // A wall is an entity that works as an actor and is solid
    Crafty.e(ZombieWorld.properties.components + 'SafeZone')
    .color('rgb(94, 198, 25)')
    .attr({
      x: 0,
      y: 300,
      w: ZombieWorld.map.title.width * 2,
      h: ZombieWorld.map.title.height * 3
    });

    return cb();

};


