var ZombieWorld = {

  map: {
    width: 400,
    height: 320
  },

  Component: {},
  Entitie:   {},
  Scene:     {},

  initialize: function(){
    console.log('Ready to kill zombies');
    ZombieWorld.Scene.main();
  }
};

$(function(){
  ZombieWorld.initialize();
});
