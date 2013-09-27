ZombieWorld.Scene.main = {

  options: {
    name: 'main',
    zombies: 2,
    obstacles: {
      large: 0,
      medium: 4,
      small: 10
    },
    color: 'rgb(119, 119, 119)'
  },

  init: function(){

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
            console.log(player);
            ZombieWorld.players[username] = player;
            ZombieWorld.players[username].Entity = ZombieWorld.Entity.Player(local, player);

            _.each(ZombieWorld.players[username].Enemy, function(zombie, id){
              ZombieWorld.players[username].Enemy[id].Entity = ZombieWorld.Entity.zombie('zombie1');
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

    ZombieWorld.Scene.createWorld(this, function(){
      var x = Crafty.math.randomInt(1070,1090);
      var y = Crafty.math.randomInt(100,500);
      var my_player = JSON.parse(localStorage.getItem('user'));

      my_player.x = x;
      my_player.y = y;

      my_player.Enemy = {
        Pedro: {name: 'Pedro'},
        Juan: {name: 'Juan'}
      };

      ZombieWorld.socket.emit('Create player', my_player);
      // ZombieWorld.socket.emit('Player list');
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

