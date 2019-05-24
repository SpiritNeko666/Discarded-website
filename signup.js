var sel;

function setup() {
  textAlign(CENTER);
  createCanvas(400,400)
  background(200)
  sel = createSelect();
  button = createButton('Continue');
  button.position(100,10)
  button.mousePressed(Continue);
  sel.position(10, 10);
  sel.option(' Creature 1');
  sel.option(' Creature 2');
  sel.option(' Creature 3');
  sel.changed(mySelectEvent);
}
function Continue() {
  
  remove();
  }
function mySelectEvent() {
  
  var item = sel.value();
  background(200);
  text('Press Continue to Choose' + item + '', 50, 50);
  
}
