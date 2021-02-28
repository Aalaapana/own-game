
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint


var boxes = []

function preload()
{
	l1 = loadImage("images/luggage1.png")
	l2 = loadImage("images/luggage2.png")	
	l3 = loadImage("images/luggage3.png")	
	l4 = loadImage("images/luggage4.png")	
	Crane = loadImage("images/crane.png")
}

function setup() {
	createCanvas(1500, 1200);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	// object using Box
	
	ground = new Ground(600,height,1200,20)
	boxes.push(new Box(500,400,100,150,PI/2));
    
	rope =  new  Rope(boxes[0].body,{x:460,y:440})
	Matter.Body.setAngle(boxes[boxes.length-1].body,PI/2)
    
	Engine.run(engine);
 
}


function draw() {

  background(168,255,255);
  for(box in boxes){	 
	  boxes[box].display()
  }
  //box.display()
  ground.display()
  image(Crane,30,10,600,1000) 
  rope.display()
  
  if(rope.rope.bodyA === null && boxes[boxes.length - 1].body.speed < 1){
	console.log(boxes[boxes.length - 1].body.speed)
	//var y = boxes[boxes.length - 1].body.position.y - 150 
	boxes.push(new Box(500,600,100,150,PI/2));	
	rope.attach(boxes[boxes.length-1].body);	
  }

  /*if(boxes.length === 5){
	  for(box in boxes){
		  if(box !== 4){
		  World.remove(world,boxes[box])
		  boxes[box]
		  }
	  }
	  console.log(boxes.length)
	  
    
  }*/
  push()
  fill("brown")
  rect(150,900,100,300)
  pop()
}

function mouseClicked(){

	 rope.fall()	
	 
	
}



