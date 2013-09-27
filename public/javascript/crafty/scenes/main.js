ZombieWorld.Scene.main = {
  options: {
    name: 'main',
    zombies: 2,
    walls: 0,
    obstacle: 0,
    color: 'rgb(119, 119, 119)'
  },

  init: function(){
    Crafty.scene(this.options.name, function(){
      console.log('here');
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
            ZombieWorld.Entity.wall({x: x, y: y});
            this.occupied[x][y] = true;
          } 
        }
      }
    });

    ZombieWorld.Scene.runScene(this);
  }

};

