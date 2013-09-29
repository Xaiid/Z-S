ZombieWorld.Component.PlayerControls = Crafty.c('PlayerControls', {
  _speed: ZombieWorld.properties.player.speed,

  stopOnSolids: function() {
    this.onHit('Solid', this.stopMovement);
    return this;
  },

  //A bullet hit a Zombie
  stopOnSolidsZ: function() {

    this.onHit('Solid', function(){
      this._speed = 0;
      if (this._movement) {
        this.x -= this._movement.x;
        this.y -= this._movement.y;
      }

      ZombieWorld.player.shouldMove = false;
    });

    return this;
  },
 
  // Stops the movement
  stopMovement: function() {
    this._speed = 0;
    if (this._movement) {
      this.x -= this._movement.x;
      this.y -= this._movement.y;
    }
  },


  //PlayerControls: function() {
    //this.bind('EnterFrame', function() {
      //if(this.isDown("RIGHT_ARROW")){
        //this.x += this._speed;
        //ZombieWorld.socket.emit('Move', {x: this.x, y: this.y, to: "RIGHT_ARROW"});
      //}

      //else if(this.isDown("LEFT_ARROW")){
        //this.x -= this._speed;
        //ZombieWorld.socket.emit('Move', {x: this.x, y: this.y, to: "LEFT_ARROW"});
      //}

      //else if(this.isDown("UP_ARROW")){
        //this.y -= this._speed;
        //ZombieWorld.socket.emit('Move', {x: this.x, y: this.y, to: "UP_ARROW"});
      //}


      //else if(this.isDown("DOWN_ARROW")){
        //this.y += this._speed;
        //ZombieWorld.socket.emit('Move', {x: this.x, y: this.y, to: "DOWN_ARROW"});
      //}

    //});
  //},

  bullet: function(){
    if(!this.shoot){
      this.shoot = true;
      ZombieWorld.socket.emit('Shoot', {player: ZombieWorld.currentPlayer.username, facing: this.facing});

      var bullet;
      var self   = this;

      setTimeout(function(){
        self.shoot = false;
      }, ZombieWorld.properties.bullet_speed);


      if(this.facing==='left'){
        bullet = ZombieWorld.Entity.Bullet({x: this.x, y:this.y, w: 5, h:2});
        var x1 = this.x;
        var i1 = 0;
        for(x1; x1 > 0 ; x1--){
          i1+= 10;
          _.delay(function(pos){
            bullet.x = pos;
          }, i1, x1);
        }
      }

      if(this.facing ==='up'){
        bullet = ZombieWorld.Entity.Bullet({x: this.x + 13, y:this.y, w:2, h:5});
        var y1 = this.y;
        var i2 = 0;
        for(y1; y1 > 0 ; y1--){
          i2 +=10;
          _.delay(function(pos){
            bullet.y = pos;
          }, i2 , y1);
        }
      }


      if(this.facing ==='right'){
        bullet = ZombieWorld.Entity.Bullet({x: this.x + 25, y:this.y, w: 5, h: 2});
        var x2 = this.x + 25;
        var maxX = ZombieWorld.map.width * ZombieWorld.map.title.width;
        var i3 = 0;
        for(x2; x2 < maxX ; x2++){
          i3 +=10;
          _.delay(function(pos){
            bullet.x = pos;
          }, i3 , x2);
        }
      }

      if(this.facing ==='down'){
        bullet = ZombieWorld.Entity.Bullet({x: this.x + 15, y:this.y, w: 2, h: 5});
        var y2 = this.y;
        var maxY = ZombieWorld.map.height * ZombieWorld.map.title.height;
        var i4 = 0;
        for(y2; y2 < maxY ; y2++){
          i4 +=10;
          _.delay(function(pos){
            bullet.y = pos;
          }, i4 , y2);
        }
      }


    }

  },

  listenTo: function(){
    var self = this;

    ZombieWorld.socket.on('Shoot', function(data){
      self.facing = data.facing;
      self.bullet2(data.player);
    });

    ZombieWorld.socket.on('Move player', function(data){

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

    ZombieWorld.socket.on('Move zombie', function(data){

      ZombieWorld.currentPlayer.Enemy[data.who].Entity.x = data.x;
      ZombieWorld.currentPlayer.Enemy[data.who].Entity.y = data.y;
      ZombieWorld.currentPlayer.Enemy[data.who].Entity.animate(data.to, 10);

    });
  },

  bullet2: function(username){
    var self = ZombieWorld.players[username].Entity;

    if(!self.shoot){
      self.shoot = true;

      var bullet;

      setTimeout(function(){
        self.shoot = false;
      }, ZombieWorld.properties.bullet_speed);


      if(self.facing==='left'){
        bullet = ZombieWorld.Entity.Bullet({x: self.x, y:self.y, w: 5, h:2});
        var x1 = self.x;
        var i1 = 0;
        for(x1; x1 > 0 ; x1--){
          i1+= 10;
          _.delay(function(pos){
            bullet.x = pos;
          }, i1, x1);
        }
      }

      if(self.facing ==='up'){
        bullet = ZombieWorld.Entity.Bullet({x: self.x + 13, y:self.y, w:2, h:5});
        var y1 = self.y;
        var i2 = 0;
        for(y1; y1 > 0 ; y1--){
          i2 +=10;
          _.delay(function(pos){
            bullet.y = pos;
          }, i2 , y1);
        }
      }


      if(self.facing ==='right'){
        bullet = ZombieWorld.Entity.Bullet({x: self.x + 25, y:self.y, w: 5, h: 2});
        var x2 = self.x + 25;
        var maxX = ZombieWorld.map.width * ZombieWorld.map.title.width;
        var i3 = 0;
        for(x2; x2 < maxX ; x2++){
          i3 +=10;
          _.delay(function(pos){
            bullet.x = pos;
          }, i3 , x2);
        }
      }

      if(self.facing ==='down'){
        bullet = ZombieWorld.Entity.Bullet({x: self.x + 15, y:self.y, w: 2, h: 5});
        var y2 = self.y;
        var maxY = ZombieWorld.map.height * ZombieWorld.map.title.height;
        var i4 = 0;
        for(y2; y2 < maxY ; y2++){
          i4 +=10;
          _.delay(function(pos){
            bullet.y = pos;
          }, i4 , y2);
        }
      }


    }

  },

});
