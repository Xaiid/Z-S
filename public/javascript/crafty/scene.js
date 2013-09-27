ZombieWorld.Scene.createWorld = function(world, cb){
  //Set background initial color
  Crafty.background(world.options.color);

  Crafty.scene(world.options.name, function(){
    //Track occupied spots
    this.occupied = new Array(ZombieWorld.map.width);
    for (var i = 0; i < ZombieWorld.map.width; i++) {
      this.occupied[i] = new Array(ZombieWorld.map.height);
      for (var y = 0; y < ZombieWorld.map.height; y++) {
        this.occupied[i][y] = false;
      }
    }

    graphBasics(this.occupied, function(occupied){
    });
  });

  Crafty.scene(world.options.name);

  return cb();
};

var graphBasics = function(occupied){
  //Create the exit of the level and asafe zone
  var coordinates = {
    x: 0,
    y: random_position(ZombieWorld.map.height - 6 , 1)
  };

  for(var y = 0; y < 3; y++){
    occupied[coordinates.x][coordinates.y+y] = true;
  }

  occupied[coordinates.x][coordinates.y] = true;

  ZombieWorld.Entity.Exit(coordinates);

  var coordinates = {
    x: coordinates.x + 1,
    y: coordinates.y
  };

  for (var i = coordinates.x; i < coordinates.x + 2; i++) {
    for (var y = coordinates.y; y < coordinates.y + 3; y++) {
      occupied[i][y] = true;
    }
  }

  ZombieWorld.Entity.SafeZone(coordinates);

  //Create the entrance of the level
  var coordinates = {
    x: ZombieWorld.map.width - 1,
    y: random_position(ZombieWorld.map.height - 4 , 1)
  };

  for(var y = 0; y < 3; y++){
    occupied[coordinates.x][coordinates.y+y] = true;
  }

  ZombieWorld.Entity.Entrance(coordinates);

  //Create walls
  for (var x = 0; x < ZombieWorld.map.width; x++) {
    for (var y = 0; y < ZombieWorld.map.height; y++) {
      var border = x === 0 || x === ZombieWorld.map.width - 1 || y === 0 || y === ZombieWorld.map.height - 1;

      if(border && !occupied[x][y]) {
        ZombieWorld.Entity.Wall({x: x, y: y});
        occupied[x][y] = true;
      } 
    }
  }
};

var random_position = function(max, min){
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
