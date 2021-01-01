class Paper{

    constructor(x,y){
      var myOpt={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2


        }




        this.body=Bodies.circle(x,y,30,myOpt)
        this.radius=30
        

        World.add(world,this.body)

    }
    display(){
        var pos=this.body.position
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,this.radius,this.radius)

    }}