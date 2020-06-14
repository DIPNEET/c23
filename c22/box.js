class Box {
   //properties
    constructor(x,y,width,height,color="grey"){
       
        var option={

            restitution:0.7
         }
       
         this.body=Bodies.rectangle(x,y,width,height,option);
         this.w=width;
         this.h=height;
         this.c=color;
         World.add(world,this.body);

    }
    display(){

        var pos=this.body.position;

        rectMode(CENTER);
        fill(this.c);
        rect(pos.x,pos.y,this.w,this.h);


    }



}