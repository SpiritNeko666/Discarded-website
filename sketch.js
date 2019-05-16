let input, button, greeting;
let rSlider, gSlider, bSlider;

function setup() {
  // create canvas
  createCanvas(710, 400);

  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(greet);

  greeting = createElement('h2', 'what is your name?');
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);
  
 
  textSize(15);
  noStroke();

  // create sliders
  rSlider = createSlider(0, 255, 100);
  rSlider.position(500, 20);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(500, 50);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(500, 80);
}

function greet() {
  const name = input.value();
  greeting.html('hello ' + name + '!');
  input.value('');

  for (let i = 0; i < 200; i++) {
    push();
    fill(random(255), 255, 255);
    translate(random(width), random(height));
    rotate(random(2 * PI));
    text(name, 0, 0);
    pop();
  }



}

function draw() {
  const r = rSlider.value();
  const g = gSlider.value();
  const b = bSlider.value();
  background(r, g, b);
  text('red', rSlider.x + 50 + rSlider.width, 35);
  text('green', gSlider.x + 50 + gSlider.width, 65);
  text('blue', bSlider.x + 50 + bSlider.width, 95);
}
