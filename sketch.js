
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;


function preload()
{
   var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, roofObject;
   var rope1, rope2, rope3, rope4, rope5;
   var world;
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject = new roof(width/2, height/4, width/7, 20);

	bobDiameter = 40;
	startBobPositionX = 600;
	startBobPositionY = 650;

	bobObject1 = new bob(600,650,40);
	bobObject2 = new bob(650,650,40);
	bobObject3 = new bob(700,650,40);
	bobObject4 = new bob(750,650,40);
	bobObject5 = new bob(800,650,40);

	//creating the ground
	var render = Render.create({
		element : document.body,
		options :{
			width : 1200,
			height : 700,
			wireframes : false
		}
	});

	rope1 = new rope(bobObject1.body,roofObject.body, -bobDiameter*2,0);
	rope2 = new rope(bobObject2.body,roofObject.body, -bobDiameter*1,0);
	rope3 = new rope(bobObject3.body.roofObject.body,0,0);
	rope4 = new rope(bobObject4.body,roofObject.body, -bobDiameter*1,0);
	rope5 = new rope(bobOject5.body,roofObject.body, -bobDiameter*2,0);


	Engine.run(engine);
  //Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background(0);
  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body,position,{x: -50, y: -45});
	}
}


