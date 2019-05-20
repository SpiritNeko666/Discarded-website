let input, button, greeting;
function setup() {
 createCanvas(710, 400);

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
  constructor() {
    this.x = 300;
    this.y = 200;
  }

 beginShape()  
push()
  
  ellipse(this.x,this.y ,20,20)
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
