ZombieWorld.land.walls = function(cb){

  var times = ( ZombieWorld.map.width) + ( ZombieWorld.map.height );

  var sendCb = _.after(times, cb);

    for (var i = 0; i < ZombieWorld.map.width; i++) {
      ZombieWorld.Entity.Wall({x: i, y: 0});
      ZombieWorld.Entity.Wall({x: i, y: ZombieWorld.map.height - 1});
      sendCb();
    }

    for (var i = 0; i < ZombieWorld.map.height; i++) {
      ZombieWorld.Entity.Wall({x: 0, y: i});


      ZombieWorld.Entity.Wall({x: ZombieWorld.map.width - 1, y: i});
      sendCb();
    }
  

  //Create walls
  // for (var x = 0; x < ZombieWorld.map.width; x++) {
  //   for (var y = 0; y < ZombieWorld.map.height; y++) {
  //     var border = x === 0 || x === ZombieWorld.map.width - 1 || y === 0 || y === ZombieWorld.map.height - 1;

  //     if(border && !occupied[x][y]) {
  //       ZombieWorld.Entity.Wall({x: x, y: y});
  //       occupied[x][y] = true;
  //     } 
  //   }
  // }

};
