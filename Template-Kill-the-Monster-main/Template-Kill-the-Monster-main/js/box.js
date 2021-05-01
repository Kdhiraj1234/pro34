class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.color = color(255,255,250)
        this.visibility = 255;
        World.add(world, this.body);
      }

      display(){
        var angle = this.body.angle;
        var pos= this.body.position;

     if(this.body.speed<10){  
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
        
     }
     else{
       World.remove(world,this.body);
      push();
      this.visibility = this.visibility-5;
      tint(255,this.visiblity);
      pop();
      score=random(1,50);
      push()
      strokeWeight(23)
      
      fill("white")
      text("excellento",500,300)
    pop();
    }
      }
}