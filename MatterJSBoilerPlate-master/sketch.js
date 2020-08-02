
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree,treeimg,boy,boyimg;
function preload()
{
	treeimg = loadImage("tree.png");
	boyimg = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);
    tree = createSprite(500,480,40,40);
	tree.addImage(treeimg);
	tree.scale = 0.3;
	
	boy = createSprite(140,580,20,20);
	boy.addImage(boyimg);
	boy.scale = 0.13;
	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here. 
    ground = new Ground();        
	mango = new Mango(500,290,60,60);
	mango2 = new Mango(450,360,60,60);
	mango3 = new Mango(550,400,60,60);
	mango4 = new Mango(430,430,60,60);
	stone = new Stone();
   // Chain = new chain(stone.body,{x:80,y:500});
    
}																


function draw() {
  rectMode(CENTER);
  background("red");
  Engine.update(engine);
  ground.display();
  drawSprites(); 
  mango.display();
  mango2.display();
  mango3.display();
  mango4.display();
  
  stone.display();
  //Chain.display();
   
  
}
 function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}