const meteorImage = new Image();
meteorImage.src = "./Meteor.png";


class Meteor {
    constructor(image, left, top, width, height) {
        this.image = image
        this.top = top
        this.left = left
        this.width = width
        this.height = height
    }

    drawMeteor() {
        ctx.drawImage(this.image, this.left, this.top, this.width, this.height);
    }

    meteorFall() {
        this.meteorDead()
        if (this.top < canvas.height) {
            ctx.clearRect(this.left, this.top - 2, this.width + 3, this.height + 3)
            this.top += 2;
            this.left -= 2;
            this.meteorLoop()
            this.drawMeteor()
        }
    }

    randomMeteor() {
        this.left = Math.random() * 880 + 400
        this.top = Math.random() * -600
    }

    meteorLoop() {
        if (this.top > 760) {
            this.randomMeteor()
        }
    }

    meteorDead() {
        if (this.top + this.height >= bullet.top && this.top <= bullet.top + bullet.height && this.left + this.width >= bullet.left && this.left <= bullet.left + bullet.width) {
            ctx.clearRect(this.left, this.top - 2, this.width + 3, this.height + 3)
            this.randomMeteor()
        }
    }
}