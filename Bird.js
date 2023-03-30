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

    }

    // GameOver() {
    //     if (this.top >= 450) {
    //         alert('Game Over')
    //     } else if ((pipeTop.top + 200) >= this.top && this.top >= pipeTop.top && (pipeTop.left + 100) >= this.left && this.left >= pipeTop.left) {
    //         if (!this.gameOverTriggered) {
    //             alert('Game Over')
    //             this.gameOverTriggered = true
    //         }
    //     } else if ((pipeTop1.top + 200) >= this.top && this.top >= pipeTop1.top && (pipeTop1.left + 100) >= this.left && this.left >= pipeTop1.left) {
    //         if (!this.gameOverTriggered) {
    //             alert('Game Over')
    //             this.gameOverTriggered = true
    //         }
    //     } else if ((pipeBot.top + 200) >= this.top && this.top >= pipeBot.top && (pipeBot.left + 100) >= this.left && this.left >= pipeBot.left) {
    //         if (!this.gameOverTriggered) {
    //             alert('Game Over')
    //             this.gameOverTriggered = true
    //         }
    //     } else if ((pipeBot1.top + 200) >= this.top && this.top >= pipeBot1.top && (pipeBot1.left + 100) >= this.left && this.left >= pipeBot1.left) {
    //         if (!this.gameOverTriggered) {
    //             alert('Game Over')
    //             this.gameOverTriggered = true
    //         }
    //     }
    // }




    GameOver() {
        if (this.top >= 450) {
            alert('Game Over')
        } else if (this.top + 40 >= pipeTop.top && this.top <= pipeTop.top + 200 && this.left + 40 >= pipeTop.left && this.left <= pipeTop.left + 100) {
            if (!this.gameOverTriggered) {
                alert('Game Over')
                this.gameOverTriggered = true
            }
        } else if (this.top + 40 >= pipeTop1.top && this.top <= pipeTop1.top + 200 && this.left + 40 >= pipeTop1.left && this.left <= pipeTop1.left + 100) {
            if (!this.gameOverTriggered) {
                alert('Game Over')
                this.gameOverTriggered = true
            }
        } else if (this.top + 40 >= pipeBot.top && this.top <= pipeBot.top + 200 && this.left + 40 >= pipeBot.left && this.left <= pipeBot.left + 100) {
            if (!this.gameOverTriggered) {
                alert('Game Over')
                this.gameOverTriggered = true
            }
        } else if (this.top + 40 >= pipeBot1.top && this.top <= pipeBot1.top + 200 && this.left + 40 >= pipeBot1.left && this.left <= pipeBot1.left + 100) {
            if (!this.gameOverTriggered) {
                alert('Game Over')
                this.gameOverTriggered = true
            }
        }
    }

    scored() {
        if (this.left === pipeTop.left + 100) {
            score = score + 1
        }
        if (this.left === pipeTop1.left + 100) {
            score++
        }
        if (this.left === pipeBot.left + 100) {
            score++
        }
        if (this.left === pipeBot1.left + 100) {
            score++
        }
        ctx.clearRect(95, 6, 30, 30)
        ctx.font = "30px Arial";
        ctx.fillText("Score " + score, 10, 30, 10000)
        document.getElementById('score').innerHTML = 'score: ' + score
    }

    moveBot() {
        if (this.top < 450) {
            ctx.clearRect(this.left, this.top, this.width, this.height)
            this.top += 2;
            this.drawBird()
            this.GameOver()
            this.scored()
        }
    }
}
