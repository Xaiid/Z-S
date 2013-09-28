ZombieWorld.Scene.main = {

  options: {
    name: 'main',
    zombies: 2,
    obstacles: {
      large: 2,
      medium: 14,
      small: 20
    },
    color: 'rgb(119, 119, 119)'
  },

  init: function(){
    this.grid = ZombieWorld.Scene.createGrid();

    ZombieWorld.socket.on('Create world', function(grid){
      if(grid){
        ZombieWorld.Scene.main.grid = grid;
        ZombieWorld.Scene.main.noBuild = true;
      }

      ZombieWorld.Scene.createWorld(ZombieWorld.Scene.main, function(){
        var my_player = JSON.parse(localStorage.getItem('user'));

        my_player.grid = ZombieWorld.Scene.main.grid;

        if(!my_player.zombieController){
          var coordinates        = getFreeCoordinates((ZombieWorld.map.width-10),(ZombieWorld.map.width-4));
          var Zombiecoordinates1 = getFreeCoordinates(2,10);
          var Zombiecoordinates2 = getFreeCoordinates(2,10);

          my_player.x = coordinates.x;
          my_player.y = coordinates.y;

          my_player.Enemy = {
            Pedro: {name: 'Pedro', coordinates: Zombiecoordinates1},
            Juan:  {name: 'Juan',  coordinates: Zombiecoordinates2}
          };
        }

        ZombieWorld.socket.emit('Create player', my_player);
      });
    });

    ZombieWorld.socket.on('remove player', function(message, player){
      console.log(message);
      if(!ZombieWorld.players[player]){ return false; }
      _.each(ZombieWorld.players[player].Enemies, function(Enemie){
        Enemie.destroy();
      });

      ZombieWorld.players[player].Entity.destroy();
      delete ZombieWorld.players[player];
    });

    ZombieWorld.socket.on('update players', function(message, players){
      console.log(message);

      var my_player = JSON.parse(localStorage.getItem('user'));
      if(my_player.zombieController){
        ZombieWorld.control = true;
      }

      _.each(players, function(player, username){

        if(!ZombieWorld.players[username]){
          if(!player.zombieController){
            var local = my_player.username === username;
            ZombieWorld.players[username] = player;
            ZombieWorld.players[username].Entity = ZombieWorld.Entity.Player(local, player);

            _.each(ZombieWorld.players[username].Enemy, function(zombie, id){
              ZombieWorld.players[username].Enemy[id].Entity = ZombieWorld.Entity.zombie('zombie1', zombie.coordinates);
              ZombieWorld.players[username].Enemy[id].Entity.name = zombie.name;
            });

            if(local){
              ZombieWorld.currentPlayer = ZombieWorld.players[username];
            }

            //ZombieWorld.players[username].Enemies = [
              //ZombieWorld.Entity.zombie('zombie1'),
              //ZombieWorld.Entity.zombie('zombie2')
            //];
          }
        }

      });

    });

    ZombieWorld.sprites = {

      zombies: Crafty.sprite(32, "/images/Zombie-C.png", {
        zombie1: [0,0],
        zombie2: [0,0]
      }),

      players: Crafty.sprite(32, "/images/power-tanger.png", {
        player1: [0,0]
      }),

      elements: Crafty.sprite(32, "/images/arenas.png", {
        grass1: [0,0],
        desert: [1,0],
        rock:   [2,0],
        wood:   [3,0]
      }),

      safeZone: Crafty.sprite(32, "/images/safe-zone.png", {
        zone1: [0,0]
      })

    };

  }

};

var getFreeCoordinates = function(min,max){
  var grid = ZombieWorld.Scene.main.grid;
  var i = Math.ceil(ZombieWorld.map.height/2);
  for(var x = 1; x < 4; x++){
    for(var y = i; y < i+4; y++){
      grid[x][y] = true;
      grid[x][y] = true;
      grid[x][y] = true;
      grid[x][y] = true;
    }
  }

  var x = Crafty.math.randomInt(min,max);
  var y = Crafty.math.randomInt(3,(ZombieWorld.map.height-4));

  while( grid[x-1][y-1] || grid[x][y-1] || grid[x+1][y-1] || grid[x][y-1] || grid[x][y] || grid[x-1][y+1] || grid[x][y+1] || grid[x+1][y+1]){
    x = Crafty.math.randomInt(min,max);
    y = Crafty.math.randomInt(3,(ZombieWorld.map.height-4));
  }

  return {x: x, y: y};
};
