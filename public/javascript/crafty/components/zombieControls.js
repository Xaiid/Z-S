ZombieWorld.Component.ZombieControls = Crafty.c('ZombieControls', {
  _speed: ZombieWorld.properties.zombie.speed,

  ZombieControls: function() {
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
