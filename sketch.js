const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var runningMan,bg;
var runningManImg,birdImg,collidedMan,bgImg;
var food1Img,food2Img;

function preload()
{
	runningManImg = loadAnimation("rm1.png","rm2.png","rm3.png");
	collidedMan = loadAnimation("collided man.png");

	birdImg = loadAnimation("bird1.png","bird2.png","bird3.png");

	food1Img = loadImage("food1.png");
	food2Img = loadImage("food2.png");

	bgImg = loadImage("background1.jpg");
}

function setup() {
	createCanvas(windowWidth,windowHeight);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bg = createSprite(width/2*2,height/2,windowWidth,windowHeight);
    bg.addImage("backgroundImage",bgImg);
	bg.velocityX = -3;
	bg.scale = 1;

	runningMan = createSprite(300,370);
	runningMan.addAnimation("running",runningManImg);
	runningMan.addAnimation("collided",collidedMan);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  if (bg.x < 100)
  {
	bg.x = bg.width;
  }


  spawnBirds();
  spawnFood();
  
  drawSprites();
 
}

function spawnBirds(){
	if(frameCount%500 === 0){
	
		var bird = createSprite(displayWidth,random(displayHeight-350,displayHeight-450));
		bird.addAnimation("birdFlying",birdImg);
		bird.velocityX = -5;
		bird.scale = 0.5;
		bird.lifetime = 300;
		bird.mirrorX(bird.mirrorX()*-1);
	}
}

function spawnFood(){
	if(frameCount%200 === 0){
		var food = createSprite(displayWidth-5,random(displayHeight-350,displayHeight-550));
		var rand = Math.round(random(1,2));
    	switch (rand) {
		case 1:
			food.addImage("strawberry",food1Img);
			break;
		case 2:
			food.addImage("carrot",food2Img);
			break;
		default:
			break;
		}

	food.scale = 0.5;
	food.velocityX = -4;
	
	}

}