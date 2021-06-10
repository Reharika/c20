const Engine = Matter.Engine//namespace
const Bodies =Matter.Bodies
const World = Matter.World

var myengine,myworld,ball;
var ground;
var fan;
var angle = 60;


function setup(){

  myengine = Engine.create()
 myworld =  myengine.world;
 createCanvas(400,400)

 var ball_options={
   restitution :1
 }

 ball =Bodies.circle(200, 50, 30,ball_options)
 World.add(myworld,ball)
 console.log(ball)



 var grnd_options ={
   isStatic: true,
 }

 ground =Bodies.rectangle(200,390,400,20,grnd_options);
 World.add(myworld,ground);
var fan_options ={
  isStatic : true,
}
 fan =Bodies.rectangle(100,200,100,20,fan_options);
 World.add(myworld,fan);
 
}
function draw(){
background("black")
  Engine.update(myengine)
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,30)

rectMode(CENTER)
rect(ground.position.x,ground.position.y,400,20);


push()
translate(fan.position.x,fan.position.y)
rotate(angle)
rect(0,0,100,20)
pop()

angle = angle+0.1
}