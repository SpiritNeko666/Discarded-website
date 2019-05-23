var sel;

function setup() {
  textAlign(CENTER);
  background(200);
  sel = createSelect();
  sel.position(10, 10);
  sel.option('Creature 1');
  sel.option('Creture 2');
  sel.option('Creture 3');
  sel.changed(mySelectEvent);
}

function mySelectEvent() {
  var item = sel.value();
  background(200);
  text('you choose' + item + '!', 50, 50);
}
