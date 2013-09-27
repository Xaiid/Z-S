ZombieWorld.Component.ZombieControls = Crafty.c('ZombieControls', {
  _speed: ZombieWorld.properties.zombie.speed,
  _lastKey: '',

  ZombieControls: function() {
    this.bind('EnterFrame', function() {

      var stop = function(){ 
        this._speed = 0;

        switch(this._lastKey){
          case 'right':
            this.x -=1;
          break;
          case 'left':
            this.x +=1;
          break;
          case 'up':
            this.y +=1;
          break;
          case 'down':
            this.y -=1;
          break;
        }

      };

      var cont = function(){ this._speed = ZombieWorld.properties.player.speed; };

      this.collision().onHit('Solid', stop, cont);

      if(this.isDown("RIGHT_ARROW")){ 
        this._lastKey = 'right';
        this.x += this._speed; 
      }

      else if(this.isDown("LEFT_ARROW")){ 
        this._lastKey = 'left';
        this.x -= this._speed; 
      }

      else if(this.isDown("UP_ARROW")){ 
        this._lastKey = 'up';
        this.y -= this._speed; 
      }


      else if(this.isDown("DOWN_ARROW")){ 
        this._lastKey = 'down';
        this.y += this._speed; 
      }

    });

    return this;
  }

});
