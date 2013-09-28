ZombieWorld.land.walls = function(options, cb){

  var times = ( ZombieWorld.map.width) + ( ZombieWorld.map.height );

  var sendCb = _.after(times, cb);

    for (var i = 0; i < ZombieWorld.map.width; i++) {
      options.grid[i][0] = true;
      options.grid[i][ZombieWorld.map.height] = true;
      ZombieWorld.Entity.Wall({x: i, y: 0, name: 'wall_top'});
      ZombieWorld.Entity.Wall({x: i, y: ZombieWorld.map.height - 1, name: 'wall_bottom'});
      sendCb();
    }

    for (var i = 0; i < ZombieWorld.map.height; i++) {
      options.grid[0][i] = true;
      options.grid[ZombieWorld.map.width - 1 ][i] = true;
      ZombieWorld.Entity.Wall({x: 0, y: i, name: 'wall_left'});
      ZombieWorld.Entity.Wall({x: ZombieWorld.map.width - 1, y: i, name: 'wall_right'});
      sendCb();
    }

};
