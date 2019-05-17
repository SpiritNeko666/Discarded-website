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
    
    pop();
  }

function draw() {
 background(220);
   
  
  stroke('black')
  
  ellipseMode(RADIANS)
  
  ellipse(195,220,10,30)
ellipse(205,220,10,30)
  ellipse(193,200,10,30)
  

  
  ellipse(207,200,10,30)
  
 
 push()
  noStroke()
    ellipse(200,200,10,30)
  pop()
  ellipse(200,180,20,20)
  ellipse(203.5,180,5,5)
  ellipse(196.5,180,5,5)
   


  
  
}
}
