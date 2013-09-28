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
  }


});
