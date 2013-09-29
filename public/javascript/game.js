var ZombieWorld = {

  land: {},

  players: {},
  player: {},
  zombies: {},

  socket: io.connect(),
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
  properties: {},

  width: function(){
    return this.map.width * this.map.title.width;
  },

  height: function(){
    return this.map.height * this.map.title.height;
  },

  initialize: function(){
    console.log('Ready to kill zombies');

    ZombieWorld.socket.on('Error', function(error){
      console.log(error);
    });

    ZombieWorld.socket.on('Send message', function(data){
      $('#chat').append('<p>'+ data +'</p>');
    });

    //Initialize game space
    Crafty.init(ZombieWorld.width(), ZombieWorld.height(), 'game-area');

    ZombieWorld.Scene.main.init();
  }
};

$(function(){
  ZombieWorld.initialize();
});
