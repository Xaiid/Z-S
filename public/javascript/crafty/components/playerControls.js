ZombieWorld.Component.PlayerControls = Crafty.c('PlayerControls', {
  _speed: ZombieWorld.properties.player.speed,

  PlayerControls: function() {
    this.bind('EnterFrame', function() {
      if(this.isDown("RIGHT_ARROW")){ 
        this.x += this._speed; 
      }

      else if(this.isDown("LEFT_ARROW")){ 
        this.x -= this._speed; 
      }

      else if(this.isDown("UP_ARROW")){ 
        this.y -= this._speed; 
      }


      else if(this.isDown("DOWN_ARROW")){ 
        this.y += this._speed; 
      }

    });
    return this;
  }


});
