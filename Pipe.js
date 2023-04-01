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
        if(pipe1.left < -200){
            pipe1.top = Math.random() * 500 -500
            pipe2.top = pipe1.top + 750
        }
        if (pipe3.left < -200){
            pipe3.top = Math.random() * 500 -500
            pipe4.top = pipe3.top + 750
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
        ctx.clearRect(this.left, this.top -1, this.width, this.height + 1)
        if (speed <= 10){
            speed = score + 2
        }
        // this.left -= speed;
        this.left -= 2;
        this.loop()
        this.drawPipe();


    }
}