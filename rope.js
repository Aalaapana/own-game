class Rope{
    constructor(body1, point2){
        var options = {
            bodyA: body1,
            pointB: point2,
            length: 200,
            stiffness: 0.002
        }      
        
        this.rope = Constraint.create(options);
        this.pointB = point2
        World.add(world,this.rope);
        

    }
    
    display(){
        
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position
            var pointB = this.pointB
            push();
            strokeWeight(10)
            line(pointA.x,pointA.y,pointB.x,pointB.y);
                      
            pop()
            
            
        }
    }

    fall(){
        this.rope.bodyA = null
    }

    attach(body){
        this.rope.bodyA = body
        Matter.Body.setAngle(body,PI/2)
    }

  
}