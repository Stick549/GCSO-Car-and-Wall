var car, wall;
var weight, speed, deformation;

function setup() {
  speed = random(55, 90)
  weight = random(400, 1500)
  car = createSprite(-50, 200, 50, 50)
  wall = createSprite(300, 200, 60, 200)
  deformation = (0.5*weight*speed*speed)/22500
  car.velocityX = 40
  createCanvas(800,400);
}

function draw() {
  background(255,255,255);  
  if(car.isTouching(wall)){
    car. velocityX = 0
    if(deformation<100){
      car.shapeColor = "green"
    }
    if(deformation>= 100 && deformation<= 180){
      car.shapeColor = "yellow"
    }
    if(deformation>180){
      car.shapeColor = "red"
    }
  }
  drawSprites();
}