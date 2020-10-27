class paper {
    constructor(x,y,width,height) {
        var options ={
           isStatic : false,
           'density' : 1.2,
           'friction' : 1,
           'restitution' : 0.2
        }
        this.width = width;
        this.height = height;

        this.body = Matter.Bodies.rectangle(x,y,this.width,this.height,options);

        this.image = loadImage("bin.png");

        World.add(world,this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}