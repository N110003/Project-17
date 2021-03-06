var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var survivalTime=0;


function preload(){
    
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 }

function setup(){
  canvas(500,1000);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  banana = createSprite();
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  stroke("white");
  textSize(20);
  fill("black");
  text("SCORE: "+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("SurvivalTime: "+survivalTime,100,50)
  
}


function draw() {
  background("pink");
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  drawSprites();
}






