ZombieWorld.Scene.createWorld = function(world, cb){

  //Set background initial color
  Crafty.background(world.options.color);

  var wait = ['grass', 'walls', 'safe'];

  var sendCb = _.after(wait.length, function(){
    ZombieWorld.land.Obstacle({grid: world.grid, obstacles: world.options.obstacles}, function(){
      console.log('Obstacles ready');
      return cb();
    });
  });

  ZombieWorld.land.walls({grid: world.grid}, function(){
    console.log('Walls ready');
    sendCb();
  });

  ZombieWorld.land.safeZone({grid: world.grid},function(){
    console.log('Safe zone ready');
    sendCb();
  });

  ZombieWorld.land.grass(function(){
    console.log('Grass ready');
    sendCb();
  });
};

ZombieWorld.Scene.createGrid = function(){
  var grid = [];
 
  _.each(_.range(ZombieWorld.map.width), function(x){
    grid[x] = [];
    _.each(_.range(ZombieWorld.map.height), function(y){
      grid[x][y] = false;
    });
  });

  return grid;
};
