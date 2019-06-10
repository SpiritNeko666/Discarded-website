pos_y = 0
var nekoinfo = ["hitpoints","attack:"]

var neko_hp = 300
var neko_taken = 10
function setup() {
    createCanvas(1000, 1000);
    neko = new Neko(100,20);
    food = new Food(100,20);
}

function draw() {
    background(40,40,40)
    neko.show()
    neko.follow()
    neko.life()
    food.show()
    text('Feed', 900,50)
    textSize(20)



}



