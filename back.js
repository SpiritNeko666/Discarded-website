
pos_y = 5
function setup() {
  createCanvas(400, 400);
  neko = new Neko(100,20);
}

function draw() {
  neko.show()

}

function mouseWheel(event) {
  //move the square according to the vertical scroll amount

  pos_y += event.delta;
  //uncomment to block page scrolling
  return(false)
}
