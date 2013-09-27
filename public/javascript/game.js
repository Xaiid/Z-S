var ZombieWorld = {

  map: {
    width: 57,
    height: 32,
    title: {
      width: 20,
      height: 20
    }
  },

  Component: {},
  Entity:    {},
  Scene:     {},

  properties:{
    solid_components: '2D, Canvas, Solid, Color, DOM, ',
    components: '2D, Canvas, Color, DOM, ',
    player: {
      speed: 3
    }
  },

  width: function(){
    return this.map.width * this.map.title.width;
  },

  height: function(){
    return this.map.height * this.map.title.height;
  },

  initialize: function(){
    console.log('Ready to kill zombies');
    //Initialize game space
    Crafty.init(ZombieWorld.width(), ZombieWorld.height());

    ZombieWorld.Scene.main.init();
  }
};

$(function(){
  ZombieWorld.initialize();
});
