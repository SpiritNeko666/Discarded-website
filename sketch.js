
let spirit;
let souls  = []

function setup() {
createCanvas(600, 400);
  for (let i = 0; i  < 2; i++) {
    let x = 10 *i
  souls[i] = new Soul(x,300,200);
  }
}

function draw() {
background(0);
    for (let i = 0; i  < 2; i++){

souls[i].move();
souls[i].show();
    }
}

class Soul {
  constructor() {
    this.x = 300;
    this.y = 200;
  }

move() {
this.x = this.x + random(-5, 5);
this.y = this.y + random(-5, 5);
}

show() {
stroke('violet');
strokeWeight(4);

fill('blue');
ellipse(this.x, this.y, 24, 24);
}


}
