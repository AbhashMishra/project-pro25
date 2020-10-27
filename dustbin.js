class dustbin {
    constructor(x,y){
        var options ={
            isStatic : true
        }
        this.body = Matter.Bodies.rectangle(x,y,155,155,options);

        World.add(world,this.body);
          
        this.image = loadImage("dustbin.png");

    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,155,155);
        pop();
    }
}