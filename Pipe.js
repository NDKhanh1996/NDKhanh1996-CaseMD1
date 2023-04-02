const pipeTopIMG = new Image();
pipeTopIMG.src = "./PipeTop.png";
const pipeBotIMG = new Image();
pipeBotIMG.src = "./PipeBot.png";

class Pipe {
    constructor(image, left, top, width, height) {
        this.image = image
        this.top = top
        this.left = left
        this.width = width
        this.height = height
    }
    randomHeight() {
        if(pipe1.left < -200){
            pipe1.top = Math.random() * 650 - 600
            pipe2.top = pipe1.top + 850
        }
        if (pipe3.left < -200){
            pipe3.top = Math.random() * 650 - 600
            pipe4.top = pipe3.top + 850
        }
    }

    loop(){
        if (this.left < -200) {
            this.randomHeight()
            this.left = 1300
        }
    }

    drawPipe() {
        ctx.drawImage(this.image, this.left, this.top, this.width, this.height);
    }

    moveLeft() {
        ctx.clearRect(this.left, this.top -5, this.width, this.height + 5)
        if (speed <= 10){
            speed = score + 2
        }
        // this.left -= speed;
        this.left -= 1.5;
        this.loop()
        this.drawPipe();


    }
}