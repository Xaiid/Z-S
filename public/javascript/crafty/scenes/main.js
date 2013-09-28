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
      var me = JSON.parse(localStorage.getItem('user'));
      console.log('Me: ', me);

      console.log('Message: ', message);
      console.log('Players: ', players);

      // var playerID = 'player1'; //Player number for the sprite
      // ZombieWorld.Entity.Player(playerID);
      // ZombieWorld.Entity.zombie('zombie1');
    });

    ZombieWorld.Scene.createWorld(this, function(){
      ZombieWorld.socket.emit('Player list');
    });

    ZombieWorld.sprites = {

      zombies: Crafty.sprite(32, "/images/Zombie-C.png", {
        zombie1: [0,0]
      }),

      elements: Crafty.sprite(32, "/images/grass.png", {
        grass1: [0,0]
      })

    };

  }

};

