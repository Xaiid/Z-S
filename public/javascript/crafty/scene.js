ZombieWorld.Scene.createWorld = function(world, cb){

  //Set background initial color
  Crafty.background(world.options.color);

  var wait = ['grass', 'walls', 'safe'];

  var sendCb = _.after(wait.length, cb);

  ZombieWorld.land.safeZone(function(){
    console.log('Safe zone ready');
    sendCb();
  });

  ZombieWorld.land.grass(function(){
    console.log('Grass ready');
    sendCb();
  });

  ZombieWorld.land.walls(function(){
    console.log('Walls ready');
    sendCb();
  });


};
