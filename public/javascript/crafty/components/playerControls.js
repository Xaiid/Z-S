ZombieWorld.Component.PlayerControls = Crafty.c('PlayerControls', {
  _speed: ZombieWorld.properties.player.speed,

  PlayerControls: function() {
    this.bind('EnterFrame', function() {
      if(this.isDown("RIGHT_ARROW")){ 
        this.x += this._speed; 
        ZombieWorld.socket.emit('Move', {x: this.x, y: this.y, to: "RIGHT_ARROW"});
      }

      else if(this.isDown("LEFT_ARROW")){ 
        this.x -= this._speed; 
        ZombieWorld.socket.emit('Move', {x: this.x, y: this.y, to: "LEFT_ARROW"});
      }

      else if(this.isDown("UP_ARROW")){ 
        this.y -= this._speed; 
        ZombieWorld.socket.emit('Move', {x: this.x, y: this.y, to: "UP_ARROW"});
      }


      else if(this.isDown("DOWN_ARROW")){ 
        this.y += this._speed; 
        ZombieWorld.socket.emit('Move', {x: this.x, y: this.y, to: "DOWN_ARROW"});
      }

    });
    return this;
  },

  listenTo: function(){

    ZombieWorld.socket.on('Move', function(data){

      var self = ZombieWorld.players[data.username].Entity;
      if(!self){ return false; }

      self.x = data.x;
      self.y = data.y;

      if(data.to === "LEFT_ARROW") {

        if(!self.isPlaying("walk_left")){
          self.stop().animate("walk_left", 10);
        }

      } else if(data.to === "RIGHT_ARROW") {

        if(!self.isPlaying("walk_right")){
          self.stop().animate("walk_right", 10);
        }

      } else if(data.to === "UP_ARROW") {

        if(!self.isPlaying("walk_up")){
          self.stop().animate("walk_up", 10);
        }

      } else if(data.to === "DOWN_ARROW") {

        if(!self.isPlaying("walk_down")){
          self.stop().animate("walk_down", 10);
        }

      }

    });

  }


});
