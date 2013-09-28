ZombieWorld.Scene.main = {

  options: {
    name: 'main',
    zombies: 2,
    walls: 5,
    obstacle: 10,
    color: 'rgb(119, 119, 119)'
  },

  init: function(){

    ZombieWorld.socket.on('update players', function(message, players){

      var my_player = JSON.parse(localStorage.getItem('user'));

      _.each(players, function(player, username){

        if(!ZombieWorld.players[username]){
          // player.Entity = ZombieWorld.Entity.zombie(my_player === username, 'zombie1');
          ZombieWorld.players[username] = player;
          // var playerID = 'player1'; //Player number for the sprite
          ZombieWorld.players[username].Entity = ZombieWorld.Entity.Player(my_player.username === username, 'player1');
        }

      });

    });

    ZombieWorld.Scene.createWorld(this, function(){
      var my_player = JSON.parse(localStorage.getItem('user'));
      ZombieWorld.socket.emit('Create player', my_player);
      ZombieWorld.socket.emit('Player list');
    });

    ZombieWorld.sprites = {

      zombies: Crafty.sprite(32, "/images/Zombie-C.png", {
        zombie1: [0,0]
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

