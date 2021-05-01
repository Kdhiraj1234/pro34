const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1;
var mainsprite;
var backGround;
var heroImage;
var engine,world;
var SS;
var score=0;

var block8,block9,block10,block11,block12,block13;
function preload() {
  bg= loadImage("images/bg.png");
}

function setup() {
  createCanvas(1100, 600);
 
  engine = Engine.create();
  world= engine.world;

  ground1 = new Ground(550,575,1100,10);
  mainsprite = new Hero(600,30,100,100);

  SS = new SlingShot(mainsprite.body,{x : 250, y : 300});

  block8 = new Block(600,565,50,70);
  block9 = new Block(650,565,50,70)
  block10 = new Block(700,565,50,70)
  block11 = new Block(675,505,50,70)
  block12 = new Block(635,505,50,70)
  block13 = new Block(655,435,50,70)

}

function draw() {
  background(0,0,0);
  Engine.update(engine);
  textSize(15)
  fill("white")
  text("score :"+score,100,50);

  ground1.show(); 
  mainsprite.show();
  SS.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(mainsprite.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  SS.fly();
}
function keyPressed(){
  if (keyCode === 32){
    SS.attach(mainsprite.body)
  }
}

