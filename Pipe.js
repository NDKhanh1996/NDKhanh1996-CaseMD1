const pipeTopIMG = new Image();
pipeTopIMG.src = "./R 2.png";

const pipeBotIMG = new Image();
pipeBotIMG.src = "./R.png";


class Pipe {
    constructor(image, left, top, width, height, speed) {
        this.image = image
        this.top = top
        this.left = left
        this.width = width
        this.height = height
        this.speed = speed
    }
    moveLeft(){
        this.left -= this.speed;
    }
    drawPipe() {
        ctx.drawImage(this.image, this.left, this.top, this.width, this.height);
    }

}

