let input, button, greeting;
function setup() {
 createCanvas(1710, 1400);
background(200,200,200)
  input = createInput();
  input.position(20, 65);
   button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(greet);
  
  greeting = createElement('h2', 'username');
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);
  
 
  textSize(15);
  noStroke();
  }
  
function greet() {
  const name = input.value();
  greeting.html('Welcome ' + name + ' to creature city');
  input.value('');
  
  for (let i = 0; i < 200; i++) {
    push();
  


 beginShape()  
push()
  stroke('black')
    this.x = 300
    this.y = 200
    push()
    strokeJoin(ROUND);

  ellipse(this.x,this.y+20, 10,30)
    ellipse(this.x+15,this.y+10, 35,8)
    ellipse(this.x-15,this.y+10, 35,8)
    ellipse(this.x,this.y+40, 10,35)
    
      ellipse(this.x+5,this.y-8 ,10,10)
      ellipse(this.x-5,this.y-8 ,10,10)

  ellipse(this.x,this.y ,20,20)
  push()
  ellipse(this.x,this.y ,20,20)
  ellipse(this.x,this.y+6 ,2,2)

  push()
  fill(255, 255,0)
  ellipse(this.x+3.5,this.y,5,5)
  ellipse(this.x-3.5,this.y ,5,5)
    
pop()
  line(this.x+3,this.y+1 ,this.x+3, this.y-1.5 )
  line(this.x-4,this.y +1,this.x-4, this.y-1.5 )
  
   pop();
  }

  
}
