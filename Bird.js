const birdImage = new Image();
birdImage.src = "./Bird.png";
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

    GameOverAlert() {
        if (!this.gameOverTriggered) {
            ctx.fillStyle = 'brown'
            ctx.font = "80px Arial";
            ctx.fillText(`GAME OVER `, 400, 300, 10000)
            ctx.fillText(`F5 TO CONTINUE `, 320, 410, 10000)
            ctx.fillText(`:v`, 550, 520, 10000)
            cancelAnimationFrame(animationId)
            this.gameOverTriggered = true
        }
    }

    GameOver() {
        const pipes = [pipe1, pipe3, pipe2, pipe4];
        const meteors = [meteor1, meteor2, meteor3, meteor4, meteor5, meteor6];
        const mobs = [mob, mob1, mob2]
        if (this.top >= canvas.height) {
            this.GameOverAlert();
        } else {
            for (let i = 0; i < pipes.length; i++) {
                if (this.top + this.height >= pipes[i].top && this.top <= pipes[i].top + pipe1.height && this.left + this.width >= pipes[i].left && this.left <= pipes[i].left + pipe1.width) {
                    this.GameOverAlert();
                    break;
                }
            }
            for (let i = 0; i < meteors.length; i++) {
                if (this.top + this.height >= meteors[i].top && this.top <= meteors[i].top + meteor1.height && this.left + this.width >= meteors[i].left && this.left <= meteors[i].left + meteor1.width) {
                    this.GameOverAlert();
                    break;
                }
            }
            for (let i = 0; i < mobs.length; i++) {
                if (this.top + this.height >= mobs[i].top && this.top <= mobs[i].top + mob.height && this.left + this.width >= mobs[i].left && this.left <= mobs[i].left + mob.width) {
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
        ctx.fillText("Score " + score / 2, 10, 30, 10000)
        document.getElementById('score').innerHTML = 'score: ' + score
    }

    moveBot() {
        if (this.top < canvas.height) {
            ctx.clearRect(this.left, this.top - 1, this.width, this.height + 100)
            this.top += 1.5;
            this.drawBird()
            this.scored()
        }
    }
}
