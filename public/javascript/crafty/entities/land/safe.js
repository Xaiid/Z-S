ZombieWorld.land.safeZone = function(options, cb){

  var i = Math.ceil(ZombieWorld.map.height/2);

  var sendCb = _.after((4*4),cb);

  for(var x = 1; x < 5; x++){
    for(var y = i; y < i+4; y++){
      options.grid[x][y] = true;
      options.grid[x][y] = true;
      options.grid[x][y] = true;
      options.grid[x][y] = true;
      //Quick fix, need to figure out something better
      options.grid[5][y] = true;
      options.grid[x][i+4] = true;

      // A wall is an entity that works as an actor and is solid
      Crafty.e('2D, Canvas, SafeZone')
      .attr({
        x: x * ZombieWorld.map.title.width,
        y: y * ZombieWorld.map.title.height,
      });

      sendCb();
    }
  }
};
