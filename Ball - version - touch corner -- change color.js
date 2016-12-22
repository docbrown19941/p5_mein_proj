function Ball(speed) {
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
  this.r = slider.value();
  this.clr = color(233,0,0);
  this.stkore = color(255);

  this.move = function() {

    // ПРОВЕРКА: не выйдет за границы?
    if (this.r + this.y + this.sy > height) 
    {
      this.sy = -(this.sy);
      this.changeColor();

    }
    if (-this.r + this.y + this.sy < 0) 
    {
      this.sy = -(this.sy);
      this.changeColor();

    }
    if (-this.r + this.x + this.sx < 0) 
    {
      this.sx = -(this.sx);
      this.changeColor();

    }
    if (this.r + this.x + this.sx > width) 
    {
      this.sx = -(this.sx);
      this.changeColor();
    }

    // подвигать шарик
    this.x += this.sx;
    this.y += this.sy;
  };

  this.changeColor = function() {
    // расстояние от цецнтра мышки до шарика
    // var d = dist(mouseX, mouseY, this.x, this.y);

    // // смена цвета
    // if (d <= this.r) {
    //   this.clr = color(random(255), random(255), random(255));
    // }

    this.clr = color(random(255), random(255), random(255));
  };

  this.update_r = function() {
    this.r = slider.value();
  };

  this.show = function() {

    // fill(this.clr);
    noFill();
    strokeWeight(3);
    stroke(this.clr);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);

    // pos.x.html("x: " + floor(this.x));
    // pos.y.html("y: " + floor(this.y));
  };

  this.unstuck = function(){

    if (this.x + this.r > width ) {
      this.x -= 10;
    }

    if (this.x - this.r < 0 ) {
      this.x += 10;
    }

    if (this.y + this.r > height ) {
      this.y -= 10;
    }

    if (this.y - this.r < 0 ) {
      this.y += 10;
    }

  }

  return this
}