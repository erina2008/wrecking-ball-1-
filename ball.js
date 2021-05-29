class ball{
constructor(x,y,width,height,angle){
var options ={
density:0.6,
frictionAir:0.5
}
this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height= height;
World.add(world,this.body);

}
display(){
var pos = this.body.position;
var angle = this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
fill("pink");
ellipse(pos.x,pos.y,this.width,this.height);
pop();
}
};