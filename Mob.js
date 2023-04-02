const mobImage = new Image();
mobImage.src = "./Mob.gif";
let direction = 1
let direction1 = 1
let direction2 = 1

class Mob {
    constructor(image, left, top, width, height) {
        this.image = image
        this.top = top
        this.left = left
        this.width = width
        this.height = height
    }

    drawMob() {
        ctx.drawImage(this.image, this.left, this.top, this.width, this.height);
    }

    direction() {
        if (mob.top <= 0 && mob.top >= -200) {
            direction = 1;
        } else if (mob.top >= 700 && mob.top <= 900) {
            direction = -1;
        }
        if (mob1.top <= 0 && mob1.top >= -200) {
            direction1 = 1;
        } else if (mob1.top >= 700 && mob1.top <= 900) {
            direction1 = -1;
        }
        if (mob2.top <= 0 && mob2.top >= -200) {
            direction2 = 1;
        } else if (mob2.top >= 700 && mob2.top <= 900) {
            direction2 = -1;
        }
    }

    mobRandomHeight() {
        this.direction()
        mob.top += direction
        mob1.top += direction1
        mob2.top += direction2
    }

    mobLoop() {
        if (this.left < -700) {
            this.left = 1600
        }
    }

    mobDead() {
        if (this.top + this.height >= bullet.top && this.top <= bullet.top + bullet.height && this.left + this.width >= bullet.left && this.left <= bullet.left + bullet.width) {
            ctx.clearRect(this.left, this.top - 2, this.width + 3, this.height + 3)
            this.left = 1700
        }
    }

    moveLeft() {
        this.mobDead()
        ctx.clearRect(this.left, this.top - 5, this.width, this.height + 10)
        this.left -= 2;
        this.mobLoop()
        this.mobRandomHeight()
        this.drawMob();
    }
}