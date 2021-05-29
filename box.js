class box{

constructor(x,y,width,height){
    var option ={
        restitution:0.5,
        friction:0.3,
        density:0.8
        
    }
    this.body = Bodies.rectangle(x,y,width,height,option);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    }
    display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("black");
    rect(pos.x,pos.y,this.width,this.height);
    pop();
    }
    
    
    };
  




 

