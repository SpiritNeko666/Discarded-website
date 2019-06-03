class Neko {
    constructor() {
        this.x = 200
        this.y = 200 + pos_y
        this.hp = 300
    }

    show() {
        push
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

}
