var snake;
var food;
var rez=2;
var w,h;
var gameState=0;

function setup(){
  createCanvas(400,400);
  snake=new Snake();
  frameRate(15);
  w=floor(width/rez);
  h=floor(height/rez);
  foodLocation();
}

function draw(){
  scale(rez);
  console.log(gameState);
  if(gameState==0){
    background("red");

    if(snake.eat(food)){
      console.log("snake eat food");
      foodLocation();
    }
    snake.update();
    snake.show();

    if(snake.end()){
      gameState=1;
     }

    fill("green");
    rect(food.x,food.y,10,10)
  }
  else if(gameState===1){
    background("green");
    var endMessage = createElement("h2");
    endMessage.html("Game End");
    endMessage.position(20,20);
  }
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    snake.setDir(0,-2);
  }
  if(keyCode===DOWN_ARROW){
    snake.setDir(0,2);
  }
  if(keyCode===LEFT_ARROW){
    snake.setDir(-2,0);
  }
  if(keyCode===RIGHT_ARROW){
    snake.setDir(2,0);
  }
}

function foodLocation(){
  x=floor(random(w));
  y=floor(random(h));
  food=createVector(x,y);
}
