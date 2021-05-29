const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var groll;
var wall,wall1,wall2,wall3;
var soccer;
var sling;

function setup(){
createCanvas(1200,800);
engine=Engine.create();
world=engine.world;
groll= new ground(300,550,600,300);
wall = new box(50,100,100,50);
wall1 = new box(100,150,100,50);
wall2 = new box(150,200,100,50);
wall3 = new box(200,250,100,50);

soccer = new ball(200,200,80,80);
sling = new rope(ball.body,{x:500,y:50});

}

function draw(){
background("green");
groll.display();
wall.display();
wall1.display();
wall2.display();
wall3.display();
soccer.display();
sling.display();

}

function mouseDragged(){
Matter.Body.setPosition(ball.body,{x:mouseX , y:mouseY})


}