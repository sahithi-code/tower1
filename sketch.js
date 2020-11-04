
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var img;
function preload()
{
 // img = loadImage('assets/gradient.png');
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  roof= new Ground(500,330,200,15)
  roof2 = new Ground(880,200,200,15)

  //up of roof boxes
  box1 = new Box(430,300,30,40)
  box2 = new Box(465,300,30,40)
  box3 = new Box(500,300,30,40)
  box4 = new Box (535,300,30,40)
  box5 = new Box (570,300,30,40)

  box6 = new Box(450,255,30,40)
  box7 = new Box(485,255,30,40)
  box8 = new Box (520,255,30,40)
  box9 = new Box (555,255,30,40)

  box10 = new Box(465,210,30,40)
  box11 = new Box (500,210,30,40)
  box12 = new Box(535,210,30,40)

  box13 = new Box(500,165,30,40)

  //up of the roof 2 boxes
  bin = new Box(810,170,30,40)
  bin2 = new Box(845,170,30,40)
 bin3 = new Box(880,170,30,40)
 bin4 = new Box(915,170,30,40)
 bin5 = new Box(950,170,30,40)


 kittu = new Poly(50,100,20,20)
  Engine.run(engine);
  shot=new SlingShot(kittu.body,{x:100,y:200});
  
}


function draw() {
  rectMode(CENTER);
  background(178,190,181);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();


  box6.display();
  box7.display();
  box8.display();
  box9.display();

  box10.display();
  box11.display();
  box12.display();

  box13.display();

  bin.display()
  bin2.display()
  bin3.display()
  bin4.display()
  bin5.display()

  roof.display();
  roof2.display();

  kittu.display();
  shot.display();
  drawSprites();
 
}



