class Box{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        switch(Math.round(random(1,4))){
          case 1:
              this.image = l1;
              break;

          case 2:
              this.image = l2;
              break;

          case 3:
              this.image = l3;
              break;
                  
          case 4:
              this.image = l4;
              break;        


        }
        Matter.Body.setAngle(this.body,angle)


      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0, 0, this.width, this.height);
        //rectMode(CENTER)
        //rect(0, 0, this.width, this.height)
        pop();
      }
}