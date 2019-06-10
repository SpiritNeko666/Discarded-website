


class Neko {
    constructor() {
        this.x = 0 = pos_x
        this.y = 0 + pos_y
        danger.x = 0
        danger.y = 0
        this.hp = neko_hp
        this.taken = neko_taken
        var pos_y = 5

    }

    show() {
        push()
        noStroke('white')
        beginShape()
        fill('white')
        push()
        fill('white')
        beginShape()
        strokeWeight(3)
        stroke('blue')
        pop()

        push()
        beginShape()
        stroke('blue');
        noFill()
        strokeWeight(4.5)
        bezier(this.x, this.y + 25 + pos_y, this.x + 36, this.y + 25 + pos_y, this.x + 29, this.y - 29 + pos_y, this.x - 20, this.y + 38 + pos_y);
        endShape()
        pop()
        push()
        noStroke()
        ellipse(this.x, this.y + pos_y, 20, 20)
        ellipse(this.x, this.y + 6 + pos_y, 2, 2)
        pop()
        push()
        ellipse(this.x, this.y + 20 + pos_y, 11, 30)
        pop()
        push()
        fill('yellow')
        ellipse(this.x + 3.5, this.y + pos_y, 5, 5)
        ellipse(this.x - 3.5, this.y + pos_y, 5, 5)
        stroke('black')

        line(this.x + 3, this.y + 1 + pos_y, this.x + 3, this.y - 1.5 + pos_y)
        line(this.x - 4, this.y + 1 + pos_y, this.x - 4, this.y - 1.5 + pos_y)
        pop();
        push()
        noFill()
        stroke('blue')
        strokeWeight(5)
        bezier(this.x + 5, pos_y + this.y + 7, this.x + 5, this.y + 13 + pos_y, this.x + 15, this.y + 13 + pos_y, this.x + 5, this.y + 28 + pos_y);
        bezier(this.x - 5, this.y + 7 + pos_y, this.x - 5, this.y + 13 + pos_y, this.x - 15, this.y + 13 + pos_y, this.x - 5, this.y + 28 + pos_y);
        pop()
        push()
        bezier(this.x + 0, this.y + 55 + pos_y, this.x + 20, this.y - 10 + pos_y, this.x - 20, this.y - 10 + pos_y, this.x - 0, this.y + 55 + pos_y);
        pop()
        pop()
    }

    follow() {
        this.x = mouseX;
        this.y = mouseY;
    }

    life() {

        textAlign(CENTER);
        fill('white')
        text('life:'+[neko_hp-neko_taken], this.x, this.y-50)
    }
    take(){
        if (20 < this.x - danger.x){
            neko_taken = neko_taken+10
        }
    }
}


class Food {
    constructor() {
        this.x = 900
        this.y = 100
    }
    show(){
        push()
        fill('maroon')
        ellipse(this.x,this.y,10,20)
        ellipse(this.x+15,this.y,10,20)
        ellipse(this.x+15,this.y+15,10,20)
        ellipse(this.x,this.y+15,10,20)
pop()

    }
}

class Danger {
    constructor() {
        this.x = 500
        this.y = 500
    }

    show() {
        push()
        fill('red')

        ellipse(this.x + 15, this.y + 15, 100, 200)

        pop()
    }
}


