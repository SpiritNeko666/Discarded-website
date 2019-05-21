let input, button, greeting;

function setup() {
  // create canvas
  createCanvas(710, 400);

  username = createInput();
  username.position(150, 65);
  password = createInput();
  password.position(150, 165);
  button = createButton('submit');

  button.position(username.x + username.width, 265);
  button.mousePressed(greet);
  button.mousePressed(greet);
  greeting = createElement('h2', 'Username');
  greeting.position(20, 40);
  greeting = createElement('h2', 'Password');
  greeting.position(20, 145);
  textAlign(CENTER);
  textSize(50);
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
