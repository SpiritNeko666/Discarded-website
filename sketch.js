 let spirit;
let souls  = []
function setup() {
createCanvas(600, 400);
  for (let i = 0; i  < 2; i++) {
  souls[i] = new Soul(300,200);
  }
}

function draw() {
background(255);
    for (let i = 0; i  < 2; i++){

souls[i].move();
souls[i].show();
    }
}

class Soul {
  constructor() {
    this.x = 300;
    this.y = 200;
  }

move() {
this.x = this.x 
this.y = this.y 
}

show() {

beginShape()  
push()
  ellipse(this.x,this.y+20, 10,30)
    ellipse(this.x+15,this.y+10, 35,8)
    ellipse(this.x-15,this.y+10, 35,8)
    ellipse(this.x,this.y+40, 10,35)

  ellipse(this.x,this.y ,20,20)
  push()
  fill(255, 255,0)
  ellipse(this.x+3.5,this.y,5,5)
  ellipse(this.x-3.5,this.y ,5,5)
pop()
  line(this.x+3,this.y+1 ,this.x+3, this.y-1.5 )
  line(this.x-4,this.y +1,this.x-4, this.y-1.5 )
}


}
