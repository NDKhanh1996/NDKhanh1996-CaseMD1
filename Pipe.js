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
        pipeTop.top = Math.floor(Math.random() * (250 - 250 + 1)) -100
        pipeTop1.top = Math.floor(Math.random() * (250 - 250 + 1)) -100
    }
    loop(){
        if (this.left < -400) {

            ctx.clearRect(this.left, this.top, this.width, this.height)
            this.randomHeight()
            this.left = 800
        }
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
        this.loop()

    }
}