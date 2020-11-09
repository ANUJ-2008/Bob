const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() 
{
	createCanvas(800,800);


	engine = Engine.create();
	world = engine.world;

	roof=new Roof(width/2,height/2,width/7,20)
	roof.shapeColor="green"

	bobObject1=new Bob(width/2-80,height/4+500,40)
	bobObject1.scale=0.5

	rope=createSprite(bobObject1.body,roof.body,-bobDiameter*2,0)

	Engine.run(engine);
  
}


function draw() 
{
  background("pink");
  
  drawSprites();


 
  bobObject1.display()
  roof.display()
 
}





