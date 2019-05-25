
let neko;
function setup() {
  createCanvas(400, 400);
  neko = new Neko(100,20);
}

function draw() {
  background(200)
  neko.show()

}
class Neko {
  constructor() {
  this.x = 300
this.y = 200    
  }
show() {
push()  
noStroke('black')
beginShape()
fill(0,0,0)
push()
fill(200,0,255)
  beginShape()
  bezier(this.x+10, this.y+55, this.x+20, this.y-10, this.x-20, this.y-10, this.x-10, this.y+55);
  strokeWeight(3)
  stroke('black')  
pop()

  
push()
beginShape()
stroke('cyan');
noFill()
strokeWeight(4.5)
bezier(this.x, this.y+25, this.x+36, this.y+25, this.x+29, this.y-29, this.x-20, this.y+38);
endShape()
pop()
push()
noStroke()
ellipse(this.x,this.y ,20,20)
ellipse(this.x,this.y+6 ,2,2)
pop()
push()
ellipse(this.x, this.y+20, 11, 30)
pop()
push()
fill(255, 255,0)
stroke('black')
ellipse(this.x+3.5,this.y,5,5)
ellipse(this.x-3.5,this.y ,5,5)    
line(this.x+3,this.y+1 ,this.x+3, this.y-1.5 )
line(this.x-4,this.y +1,this.x-4, this.y-1.5 )
pop();
push()
noFill()
  stroke('black')
  strokeWeight(5)
bezier(this.x+5, this.y+7, this.x+5, this.y+13, this.x+10, this.y+13, this.x+15, this.y+28);
  bezier(this.x-5, this.y+7, this.x-5, this.y+13, this.x-10, this.y+13, this.x-15, this.y+28);
 pop()
  push()
bezier(this.x+0, this.y+55, this.x+20, this.y-10, this.x-20, this.y-10, this.x-0, this.y+55);
  pop()
  pop()
}

}
