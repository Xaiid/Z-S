ZombieWorld.land.Obstacle = function(options, cb){ 

  var grid = options.grid;
  var obstacles = options.obstacles;

  var times = obstacles.large + obstacles.medium + obstacles.small;

  var count = {
    large: obstacles.large,
    medium: obstacles.medium,
    small: obstacles.small
  };

  var sendCb = _.after(times, cb);

  while(count.large > 0 || count.medium > 0 || count.small > 0){
    for (var x = 1; x < ZombieWorld.map.width - 2; x++) {
      for (var y = 1; y < ZombieWorld.map.height - 2; y++) {
        if (Math.random() < 0.02) {
          // Place a obstacle at the current tile
          var type = _.sample(['small', 'medium', 'large']);

          if(!grid[x][y]){
            //Take spots necessary fot that object
            populateGrid({x: x, y: y, type: type, grid: grid});

            //Create object
            if(Crafty('Obstacle').length < times && count[type] > 0){
              count[type] -= 1;
              //grid[x][y] = true;
              ZombieWorld.Entity.Obstacle({ x: x, y: y, type: type});
              sendCb();
            }
          }
        }
      }
    }
  }
};


var populateGrid = function(options){
  var x = options.x;
  var y = options.y;

  var new_x = x + ZombieWorld.properties.obstacle[options.type].width;
  var new_y = y + ZombieWorld.properties.obstacle[options.type].height;

  _.each(_.range(x,new_x), function(x){
    _.each(_.range(y,new_y), function(y){
      options.grid[x][y] = true;
    });
  });
};
