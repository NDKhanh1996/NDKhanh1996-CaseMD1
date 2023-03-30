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

    drawPipe() {
        ctx.drawImage(this.image, this.left, this.top, this.width, this.height);
    }

    moveLeft() {
        ctx.clearRect(this.left, this.top, this.width, this.height)
        if (speed <= 10){
            speed = score + 2
        }
        this.left -= speed;
        this.drawPipe();
        if (this.left < -400) {
            ctx.clearRect(this.left, this.top, this.width, this.height)
            this.left = 800
            this.moveLeft()
        }
    }
}