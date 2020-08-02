class chain{
constructor(bodyA,pointB){
    var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.9,
        length:2
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);

}


display(){

    var pointA = this.sling.bodyA.position;
    var pointB = this.pointB;
    strokeWeight(8);
    line(pointA.x,pointA.y,pointB.x,pointB.y);

}
}








