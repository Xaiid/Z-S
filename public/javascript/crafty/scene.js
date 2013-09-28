ZombieWorld.Scene.createWorld = function(world, cb){

  //Set background initial color
  Crafty.background(world.options.color);

  var wait = ['grass', 'walls', 'safe', 'obstacles'];

  var sendCb = _.after(wait.length, cb);

  ZombieWorld.land.safeZone({grid: world.grid},function(){
    console.log('Safe zone ready');
    sendCb();
  });

  ZombieWorld.land.grass(function(){
    console.log('Grass ready');
    sendCb();
  });

  ZombieWorld.land.walls(function(){
    console.log('Walls ready');
    sendCb();
  });

  ZombieWorld.land.Obstacle({grid: world.grid, obstacles: world.options.obstacles}, function(){
    console.log('Obstacles ready');
    sendCb();
  });

};

ZombieWorld.Scene.createGrid = function(){
  var grid = [];
 
  _.each(_.range(ZombieWorld.map.width - 1), function(x){
    grid[x] = [];
    _.each(_.range(ZombieWorld.map.height - 1), function(y){
      grid[x][y] = false;
    });
  });

  return grid;
};
