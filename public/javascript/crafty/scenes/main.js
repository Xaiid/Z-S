ZombieWorld.Scene.main = {
  options: {
    name: 'main',
    zombies: 2,
    walls: 5,
    obstacle: 10,
    color: 'rgb(119, 119, 119)'
  },

  init: function(){
    ZombieWorld.Scene.createWorld(this, function(){
      //TODO this should after user picks a player

      // var playerID = 'player1'; //Player number for the sprite
      // ZombieWorld.Entity.Player(playerID);
      ZombieWorld.Entity.zombie('zombie1');
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

