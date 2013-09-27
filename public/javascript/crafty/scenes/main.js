ZombieWorld.Scene.main = {
  options: {
    name: 'main',
    zombies: 2,
    walls: 0,
    obstacle: 0,
    color: 'rgb(119, 119, 119)'
  },

  init: function(){
    ZombieWorld.Scene.createWorld(this);

    //TODO this should after user picks a player
    var playerID = 'player1'; //Player number for the sprite
    ZombieWorld.Entity.player(playerID);
  }

};

