class Dustbin{
   
    constructor(x,y,height,angle){

        var myOpt={
            isStatic:true,
            restitution:0.8,
            friction:1.3,
            density:2
        }



        this.body=Bodies.rectangle(x,y,17,height,myOpt)
        this.width=17
        this.height=height
        Matter.Body.setAngle(this.body,angle)
        World.add(world,this.body)
    }

    display(){
        var pos=this.body.position
        var angle=this.body.angle;
        
         push();
         translate(pos.x,pos.y);
         rotate(angle);
         stroke("blue");
         strokeWeight(4);


         fill("lightblue");
         rectMode(CENTER);
         rect(0,0,this.width,this.height);
         pop();



    }










}