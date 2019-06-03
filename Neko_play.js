pos_y = 5
var hp = 0
function setup() {
    createCanvas(1000, 1000);
    neko = new Neko(100,20);
    food = new Food(100,20);

}

function draw() {
    background(205)
    text('Feed', 900,50)
    textSize(20)
    neko.show()
    neko.follow()
    food.show()
}
class Food {
    constructor() {
        this.x = 900
        this.y = 100
    }
    show(){
        fill('maroon')
        ellipse(this.x,this.y,10,20)
        ellipse(this.x+15,this.y,10,20)
        ellipse(this.x+15,this.y+15,10,20)
        ellipse(this.x,this.y+15,10,20)


    }
}



