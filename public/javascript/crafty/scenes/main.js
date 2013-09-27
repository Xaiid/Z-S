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
  }

};

