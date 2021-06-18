var monkey, monkey_running
var bananaImage, obstacleImage
var foodGroup, obstacleGroup
var ground
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x)
}


function draw() {
  background(255);
  
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  drawSprites();
}

function spawnBananas() {
  if (frameCount % 80 === 0){
    var banana = createSprite(400, 320, 40, 10);
    banana.y = Math.round(random(120, 200));
    banana.addImage(bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -3;

    banana.lifetime = 200;

    foodGroup.add(banana);
  }
}

function spawnObstacles(){
  if(frameCount % 300 === 0){
    var obstacle = createSprite(400,365,10,40);
    obstacle.addImage(obstacleImage);
    
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    
    obstacleGroup.add(obstacle);
  }
}
