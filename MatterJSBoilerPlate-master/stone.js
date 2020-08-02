class Stone{
constructor(){
var options={
    isStatic:false,
    restitution:0,
    friction:1,
    density:1.2
}
this.body = Bodies.rectangle(200,200,20,20,options);
this.x  = 200;
this.y = 200;
this.width = 20;
this.height = 20;
this.image = loadImage("stone.png");
World.add(world,this.body);
}
display(){

image(this.image,200,200,20,20);






}















}