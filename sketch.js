
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var park;

function preload(){
	park = loadImage("garden.jpg");
}

function setup() {
	createCanvas(1200, 450);

	engine = Engine.create();
	world = engine.world;

	ball = new paper(200,400,40,40);

	Dustbin1 = new dustbin(965,320,10,10);
	
	Ground1 = new ground(600,600,1900,505);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(park);
  Ground1.visible = false;
  ball.display();
  Dustbin1.display();
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){
	   Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-105});
	}
}


