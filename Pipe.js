const pipeTopIMG = new Image();
pipeTopIMG.src = "./PipeTop.png";
const pipeBotIMG = new Image();
pipeBotIMG.src = "./PipeBot.png";
let firstScore = false

class Pipe {
    constructor(image, left, top, width, height) {
        this.image = image
        this.top = top
        this.left = left
        this.width = width
        this.height = height
    }

    randomHeight() {
        if (pipe1.left < -200) {
            pipe1.top = Math.random() * 650 - 650
            pipe2.top = pipe1.top + 850
        }
        if (pipe3.left < -200) {
            pipe3.top = Math.random() * 650 - 650
            pipe4.top = pipe3.top + 850
        }
    }

    loop() {
        if (this.left < -200) {
            this.randomHeight()
            score++;
            this.left = 1300
        }
    }
    drawScore() {
        if (!firstScore && pipe1.left + pipe1.width < bird.left){
            score += 2
            firstScore = true
        }
        ctx.clearRect(10, 6, 250, 30)
        ctx.font = "30px Arial";
        ctx.fillText("Score " + score / 2, 10, 30, 10000)
        document.getElementById('score').innerHTML = 'score: ' + score
    }

    drawPipe() {
        ctx.drawImage(this.image, this.left, this.top, this.width, this.height);
    }

    moveLeft() {
        this.drawScore()
        ctx.clearRect(this.left, this.top - 5, this.width, this.height + 5)
        speed = score + 2
        // this.left -= speed;
        this.left -= 1.5;
        this.loop()
        this.drawPipe();
    }
}