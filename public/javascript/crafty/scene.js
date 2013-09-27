ZombieWorld.Scene.runScene = function(world){
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


    //Create walls
    for (var x = 0; x < ZombieWorld.map.width; x++) {
      for (var y = 0; y < ZombieWorld.map.height; y++) {
        var border = x === 0 || x === ZombieWorld.map.width - 1 || y === 0 || y === ZombieWorld.map.height - 1;

        if (border) {
          ZombieWorld.Entity.Wall({x: x, y: y});
          this.occupied[x][y] = true;
        } 
      }
    }
  });

  Crafty.scene(world.options.name);
};
