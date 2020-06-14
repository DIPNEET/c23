//namespacing
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;



var engine,world,box1,box2,ground;

function setup(){
   createCanvas(400,400);
   engine=Engine.create();
   world=engine.world;
   box1= new Box(200,200,30,50,"red"); 
   box2=new Box(250,250,20,30,"yellow");
   box3=new Box(275,200,10,10,"green");
   //json 
  var ground_option={

     isStatic:true
  }



   ground=Bodies.rectangle(200,380,400,10,ground_option);
   World.add(world,ground);

  // console.log(box);



}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    box3.display();
    rectMode(CENTER);
    fill("brown")
    rect(ground.position.x,ground.position.y,400,10);

}