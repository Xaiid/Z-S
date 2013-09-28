ZombieWorld.land.grass = function(cb){

  var times = ZombieWorld.map.width * ZombieWorld.map.height;

  var sendCb = _.after(times, cb);

  //Build grass
  Crafty.load(["/images/arenas.png"], function() {
    //generate the grass along the x-axis
    for(var i = 0; i < ZombieWorld.map.width; i++) {
      //generate the grass along the y-axis
      for(var j = 0; j < ZombieWorld.map.height; j++) {
        Crafty.e("2D, Canvas, grass1").attr({x: i * 30, y: j * 30});
        sendCb();
      }
    }
  });

};
