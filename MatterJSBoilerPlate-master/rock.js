class Stone{
constructor(){
var options={
    isStatic:false,
    restitution:0,
    friction:1,
    density:1.2
}
this.body = Bodies.rectangle(60,500,30,40,options);
this.x= 60;
this.y = 500;
this.width = 30;
this.height = 40;
this.image = loadImage("stone.png");

}
display(){

    imageMode(CENTER);
    image(this.image,this.x,this.y,this.width,this.height);
    

}




}