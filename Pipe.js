const pipeTopIMG = new Image();
pipeTopIMG.src = "./R 2.png";
const pipeBotIMG = new Image();
pipeBotIMG.src = "./R.png";

class Pipe {
    constructor(image, left, top, width, height) {
        this.image = image
        this.top = top
        this.left = left
        this.width = width
        this.height = height
    }

    randomHeight() {
        this.top = Math.floor(Math.random() * (350 - 250 + 1)) + this.top
    }

    drawPipe() {
        ctx.drawImage(this.image, this.left, this.top, this.width, this.height);
    }

    moveLeft() {
        ctx.clearRect(this.left, this.top, this.width, this.height)
        this.left -= 2;
        this.drawPipe();
        if (this.left === -400) {
            ctx.clearRect(this.left, this.top, this.width, this.height)
            if (this.top < 0) {
                this.top = -100
                this.randomHeight()
                // this.top = Math.floor(Math.random() * (350 - 250 + 1)) + this.top

            } else if (this.top > 200) {
                this.top = 250
                this.randomHeight()
                // this.top = Math.floor(Math.random() * (350 - 250 + 1)) + this.top
            }
            this.left = 800
            this.moveLeft()
        }
    }
}