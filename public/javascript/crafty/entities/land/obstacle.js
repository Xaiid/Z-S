ZombieWorld.land.Obstacle = function(options, cb){ 

  var grid = options.grid;
  var obstacles = options.obstacles;

  if(options.noBuild){
    var times = (ZombieWorld.map.width - 2) * (ZombieWorld.map.height - 2);
  } else {
    var times = obstacles.large + obstacles.medium + obstacles.small;
  }

  var count = {
    large: obstacles.large,
    medium: obstacles.medium,
    small: obstacles.small
  };

  var sendCb = _.after(times, function(){
    return cb();
  });

  if(options.noBuild){
    for (var x = 1; x < ZombieWorld.map.width - 1; x++) {
      for (var y = 1; y < ZombieWorld.map.height - 1; y++) {
        if (grid[x][y]){
          //Create object
          ZombieWorld.Entity.Obstacle({ x: x, y: y, type: type});
        }
        sendCb();
      }
    }
  } else {
    while(count.large > 0 || count.medium > 0 || count.small > 0){
      for (var x = 1; x < ZombieWorld.map.width - 2; x++) {
        for (var y = 1; y < ZombieWorld.map.height - 2; y++) {
          if (Math.random() < 0.02){
            // Place a obstacle at the current tile
            var type = _.sample(['small', 'medium', 'large']);

            if(count[type] > 0){
              //Take spots necessary fot that object
              populateGrid({x: x, y: y, type: type, grid: grid}, function(free){
                if(free){
                  //Create object
                  count[type] -= 1;
                  sendCb();
                }
              });
            }
          }
        }
      }
    }
  }
};

var populateGrid = function(options, cb){
  var origin = {
    x: options.x,
    y: options.y
  };

  var destiny = {
    x: options.x + ZombieWorld.properties.obstacle[options.type].width,
    y: options.y + ZombieWorld.properties.obstacle[options.type].height
  };

  var available = true; 

  _.each(_.range(origin.x,destiny.x + 1), function(x){
    _.each(_.range(origin.y,destiny.y), function(y){
      if((y > ZombieWorld.map.height - 2) || x > (ZombieWorld.map.width - 1) || options.grid[x][y]){
        available = false;
      }
    });
  });

  if(available){
  _.each(_.range(origin.x,destiny.x + 1), function(x){
    _.each(_.range(origin.y,destiny.y), function(y){
      options.grid[x][y] = true;
      ZombieWorld.Entity.Obstacle({ x: x, y: y, type: options.type});
    });
  });
  }

  return cb(available);
};
