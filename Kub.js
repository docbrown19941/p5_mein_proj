function Kub(speed) {
  // x
  // y
  // sx
  // sy
  // r
  // clr

  // move
  // changeColor
  // mouseCleckd
  // update_r
  // show
  // touch

  this.x = random(10, width-10);
  this.y = random(10, height-10);
  this.sx = random(-speed,speed);
  this.sy = random(-speed,speed+5);
  this.vusota = slider.value();
  this.shurota =slider.value();
  this.clr = color(233,0,0);
  this.stkore = color(255);

  this.move = function(willChange) {

    // ПРОВЕРКА: не выйдет за границы?
    if (this.y + this.vusota + this.sy > height) 
    {
      this.sy = -(this.sy);

      if(willChange){
        this.changeColor();
      }

    }
    if (this.y + this.sy < 0) 
    {
      this.sy = -(this.sy);

      if(willChange){
        this.changeColor();
      }

    }
    if (this.x + this.sx < 0) 
    {
      this.sx = -(this.sx);

      if(willChange){
        this.changeColor();
      }

    }
    if (this.shurota + this.x + this.sx > width) 
    {
      this.sx = -(this.sx);

      if(willChange){
        this.changeColor();
      }
    }

    // подвигать кубик
    this.x += this.sx;
    this.y += this.sy;
  };

  this.changeColor = function() {
    // расстояние от цецнтра мышки до шарика
    // var d = dist(mouseX, mouseY, this.x, this.y);

    // // смена цвета
    // if (d <= this.size) {
    //   this.clr = color(random(255), random(255), random(255));
    // }

    this.clr = color(random(255), random(255), 0);
  };

  this.update_r = function() {
    this.vusota = slider.value();
    this.shurota = slider.value();
  };

  this.show = function() {

    // fill(this.clr);
    noFill();
    strokeWeight(3);
    stroke(this.clr);
    rect(this.x, this.y, this.vusota, this.shurota);

    // pos.x.html("x: " + floor(this.x));
    // pos.y.html("y: " + floor(this.y));
  };

  this.unstuck = function(){

    if (this.x + this.sx > width ) {
      this.x -= 10;
    }

    if (this.x - this.sx < 0 ) {
      this.x += 10;
    }

    if (this.y + this.size > height ) {
      this.y -= 10;
    }

    if (this.y - this.size < 0 ) {
      this.y += 10;
    }
      if (this.x + this.shurota > width ) {
         this.x -= this.shurota - ( width - this.x ) +2
      }

      if (this.y + this.vusota > height) {
        this.y -= this.vusota - ( height - this.y ) +2
      }
  }

  this.live = function(willChange) {
    
    this.move(willChange);
    this.update_r();
    this.unstuck();
    this.show();
  }

  return this
}