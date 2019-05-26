pos_y = 5
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
  this.x = 200
this.y = 200+pos_y    
  }
show() {
push()  
noStroke('black')
beginShape()
fill(0,0,0)
push()
fill(200,0,255)
  beginShape()
  bezier(this.x+10, this.y+55+pos_y , this.x+20, this.y-10+pos_y , this.x-20, this.y-10+pos_y , this.x-10, this.y+55+pos_y );
  strokeWeight(3)
  stroke('black')  
pop()

  
push()
beginShape()
stroke('cyan');
noFill()
strokeWeight(4.5)
bezier(this.x, this.y+25+pos_y , this.x+36, this.y+25+pos_y , this.x+29, this.y-29+pos_y , this.x-20, this.y+38+pos_y );
endShape()
pop()
push()
noStroke()
ellipse(this.x,this.y+pos_y ,20,20)
ellipse(this.x,this.y+6+pos_y  ,2,2)
pop()
push()
ellipse(this.x, this.y+20+pos_y , 11, 30)
pop()
push()
fill(255, 255,0)
stroke('black')
ellipse(this.x+3.5,this.y+pos_y ,5,5)
ellipse(this.x-3.5,this.y+pos_y  ,5,5)    
line(this.x+3,this.y+1+pos_y  ,this.x+3, this.y-1.5+pos_y  )
line(this.x-4,this.y +1+pos_y ,this.x-4, this.y-1.5+pos_y  )
pop();
push()
noFill()
  stroke('black')
  strokeWeight(5)
bezier(this.x+5, pos_y+this.y+7, this.x+5, this.y+13+pos_y , this.x+10, this.y+13+pos_y , this.x+15, this.y+28+pos_y );
  bezier(this.x-5, this.y+7+pos_y , this.x-5, this.y+13+pos_y , this.x-10, this.y+13+pos_y , this.x-15, this.y+28+pos_y );
 pop()
  push()
bezier(this.x+0, this.y+55+pos_y , this.x+20, this.y-10+pos_y , this.x-20, this.y-10+pos_y , this.x-0, this.y+55+pos_y );
  pop()
  pop()
}

}
function mouseWheel(event) {
  //move the square according to the vertical scroll amount

  pos_y += event.delta;
  //uncomment to block page scrolling
  return(false)
}
