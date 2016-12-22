var balls = [];
var kubs = [];
var slider;
var POS;
var amount;
var AMOUNT_P;

var ballsWillChangeBtn;
var kubsWillChangeBtn;

var ballsCol = false;
var kubsCol = false;


function ballsWillChange() {
  ballsCol = !ballsCol

  if (ballsCol)
    ballsWillChangeBtn.html("Change balls color: ON")
  else
    ballsWillChangeBtn.html("Change balls color: OFF")



}

function kubsWillChange() {
  kubsCol = !kubsCol

  if (kubsCol)
    kubsWillChangeBtn.html("Change kubs color: ON")
  else
    kubsWillChangeBtn.html("Change kubs color: OFF")

}

function setup() {

  createCanvas(800, 400);

  ballsWillChangeBtn = createButton("Change balls color:");
  ballsWillChangeBtn.mouseClicked(ballsWillChange)

  kubsWillChangeBtn = createButton("Change kubs color:");
  kubsWillChangeBtn.mouseClicked(kubsWillChange)




  slider = createSlider(1, 400, 20);
  slider.position(width/2,height);


  AMOUNT_P = createP("<b>AMOUNT_P");
  AMOUNT_P.position(0,height-10);

  slider_amount = createSlider(1,10,5);
  slider_amount.position(100,height)
  amount = slider_amount.value();

  POS_P = createP("<b>POS");
  POS_P.position(width/2-30,height-10);

  for (var i = 0; i < amount; i++) {
    balls.push(new Ball(random(2,3)));
    kubs.push(new Kub(random(4,7)));
  }

}

function update_amount() {

  if (slider_amount.value() == amount) { return }

  if (slider_amount.value() > amount) { 

    delta = slider_amount.value() - amount

    amount = slider_amount.value()

    for (var i = 0; i < delta; i++) {
      balls.push(new Ball(random(2,3)));
      kubs.push(new Kub(random(4,7)));

    
    }


    //зменьшити довжину масива
  }
  
  if(slider_amount.value() < amount) {
    delta = amount - slider_amount.value()

    amount = slider_amount.value()
    for (var i = 0; i < delta; i++) {
      balls.splice(balls.lenght-1,1);
      kubs.splice(kubs.lenght-1,1);

    }
  }

}

// 2718281828459045235360
//      0965625852
//      0-96-56-25852
// 314159265358979

function draw() {

  //задний фон
  background(120);

  //Рамка
  noFill();
  stroke(23, 0, 0);
  rect(1, 1, width - 2, height - 2);

  // for (var i = 0; i < balls.lenght ; i++) {
  // 	for (var j = i; j < balls.lenght; j++){
  // 		balls[i].touch(balls[j]);
  // 	}
  // }

  if (mouseIsPressed) update_amount();

  
  for (var i = 0; i < amount; i++) {
    balls[i].live(ballsCol);
    kubs[i].live(kubsCol);
  }

}