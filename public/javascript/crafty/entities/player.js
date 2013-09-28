ZombieWorld.Entity.Player = function(local, player){
  var playerProto = Crafty.e(ZombieWorld.properties.player_character + "Collision, Fourway, SpriteAnimation, PlayerControls, " + player)
        .attr({
          x: player.x,
          y: player.y,
        })
        .requires('Keyboard')
        .animate("walk_left", 0 , 1,  2)
        .animate("walk_right", 0 , 2 ,2)
        .animate("walk_up", 0,  3, 2)
        .animate("walk_down", 0, 0 , 2);

    if(local){
      playerProto.fourway(ZombieWorld.properties.player.speed)
      .bind('NewDirection', function(data) {
        if (data.x > 0) {
          this.animate('walk_right', ZombieWorld.properties.animation_speed, -1);
        } else if (data.x < 0) {
          this.animate('walk_left', ZombieWorld.properties.animation_speed, -1);
        } else if (data.y > 0) {
          this.animate('walk_down', ZombieWorld.properties.animation_speed, -1);
        } else if (data.y < 0) {
          this.animate('walk_up', ZombieWorld.properties.animation_speed, -1);
        } else {
          this.stop();
        }
      })
      .stopOnSolids()
      .bind("EnterFrame", function(e) {
        if(this.isDown("LEFT_ARROW")) {
          ZombieWorld.socket.emit('Move player', {x: this.x, y: this.y, to: "LEFT_ARROW"});
        } else if(this.isDown("RIGHT_ARROW")) {
          ZombieWorld.socket.emit('Move player', {x: this.x, y: this.y, to: "RIGHT_ARROW"});
        } else if(this.isDown("UP_ARROW")) {
          ZombieWorld.socket.emit('Move player', {x: this.x, y: this.y, to: "UP_ARROW"});
        } else if(this.isDown("DOWN_ARROW")) {
          ZombieWorld.socket.emit('Move player', {x: this.x, y: this.y, to: "DOWN_ARROW"});
        }
      });
    }else{
      playerProto.listenTo();
    }

    return playerProto;

};
