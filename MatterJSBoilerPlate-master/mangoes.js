class Mango{
constructor(x,y,width,height){
var options={
    isStatic:true,
    restitution:0,
    friction:1
}
this.mg = Bodies.rectangle(x,y,width,height,options);
this.x = x;
this.y = y;
this.width = width;
this.height = height;
this.IMG = loadImage("mango.png");
World.add(world,this.mg);
}
display(){


image(this.IMG,this.x,this.y,this.width,this.height);








}
}







