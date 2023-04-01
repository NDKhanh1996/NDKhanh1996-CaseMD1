const birdImage = new Image();
birdImage.src = "./images.png";
let score = 0

class Bird {
    constructor(image, left, top, width, height) {
        this.image = image
        this.top = top
        this.left = left
        this.width = width
        this.height = height
        this.gameOverTriggered = false
    }

    drawBird() {
        ctx.drawImage(this.image, this.left, this.top, this.width, this.height);
    }

    moveTop() {
        this.top -= 50
        console.log('speed ' + speed)
    }
    GameOverAlert(){
        if (!this.gameOverTriggered) {
            ctx.fillStyle = 'brown'
            ctx.font = "80px Arial";
            ctx.fillText(`GAME OVER ` , 150, 180, 10000)
            ctx.fillText(`F5 TO CONTINUE ` , 70, 290, 10000)
            ctx.fillText(`:v` , 390, 400, 10000)
            cancelAnimationFrame(animationId)
            this.gameOverTriggered = true
        }
    }

    GameOver() {
        const pipes = [pipe1, pipe3, pipe2, pipe4];
        if (this.top >= canvas.height) {
            this.GameOverAlert();
        } else {
            for (let i = 0; i < pipes.length; i++) {
                if (this.top + 40 >= pipes[i].top && this.top <= pipes[i].top + 500 && this.left + 40 >= pipes[i].left && this.left <= pipes[i].left + 100) {
                    this.GameOverAlert();
                    break;
                }
            }
        }
    }

    scored() {
        const pipes = [pipe1, pipe2, pipe3, pipe4];
        for (let i = 0; i < pipes.length; i++) {
            if (this.left === pipes[i].left + 100) {
                score++;
            }
        }
        ctx.clearRect(10, 6, 250, 30)
        ctx.font = "30px Arial";
        ctx.fillText("Score " + score/2, 10, 30, 10000)
        document.getElementById('score').innerHTML = 'score: ' + score
    }

    moveBot() {
        if (this.top < canvas.height) {
            ctx.clearRect(this.left, this.top, this.width, this.height)
            this.top += 1;
            this.drawBird()
            this.scored()
        }
    }
}
