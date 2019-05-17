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
  //const r = rSlider.value();
 // const g = gSlider.value();
  //const b = bSlider.value();
  //background(r, g, b);
 // text('red', rSlider.x + 50 + rSlider.width, 35);
  //text('green', gSlider.x + 50 + gSlider.width, 65);
  //text('blue', bSlider.x + 50 + bSlider.width, 95);
}
}
