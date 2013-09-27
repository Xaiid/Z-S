ZombieWorld.land.walls = function(cb){

  var times = ( ZombieWorld.map.width) + ( ZombieWorld.map.height );

  var sendCb = _.after(times, cb);

    for (var i = 0; i < ZombieWorld.map.width; i++) {
      ZombieWorld.Entity.Wall({x: i, y: 0, name: 'wall_top'});
      ZombieWorld.Entity.Wall({x: i, y: ZombieWorld.map.height - 1, name: 'wall_bottom'});
      sendCb();
    }

    for (var i = 0; i < ZombieWorld.map.height; i++) {
      ZombieWorld.Entity.Wall({x: 0, y: i, name: 'wall_left'});
      ZombieWorld.Entity.Wall({x: ZombieWorld.map.width - 1, y: i, name: 'wall_right'});
      sendCb();
    }

};
