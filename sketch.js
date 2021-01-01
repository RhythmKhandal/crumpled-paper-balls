
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbin1,dustbin2,dustbin3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	paper = new Paper(100,100)
	dustbin1 = new Dustbin(625,657,100,PI/2)
	dustbin2 = new Dustbin(550,600,160,-PI/9)
	dustbin3 = new Dustbin(700,600,160,PI/9)
	ground = new Ground(400,670,800,15)

	//Engine.run(engine);
  
}


function draw() {
  
  background(0);
  
	Engine.update(engine)

	paper.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
   ground.display();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:200,y:-120})
		}


}


