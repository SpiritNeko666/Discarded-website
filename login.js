
let input, button, greeting;

function setup() {
  // create canvas
  createCanvas(710, 400);

  username = createInput();
  username.position(150, 65);
  password = createInput();
  password.position(150, 165);
  button = createButton('submit');

  button.mousePressed(greet);
  button.mousePressed(greet);
  passcode = createElement('h2', 'Password');
  passcode.position(20, 140);
  greeting = createElement('h2', 'Username');
  greeting.position(20, 40);
  textAlign(CENTER);
  textSize(50);
}

function greet() {
  const name = username.value();
  const code = password.value();
  greeting.html('hello ' + name + '!');
  username.value('');
  password.value('');

  
}
