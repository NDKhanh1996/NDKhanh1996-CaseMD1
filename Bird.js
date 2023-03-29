const birdImage = new Image();
birdImage.src = "./images.png";

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

    moveBot() {
        if (this.top < 450) {
            ctx.clearRect(this.left, this.top, this.width, this.height)
            this.top += 2;
            this.drawBird()
            this.GameOver()

        }
    }

    moveTop() {
        this.top -= 50

    }
    GameOver(){
        if (this.top >= 450){
            alert('Game Over')
        }else if ((pipeTop.top + 200) >= this.top && this.top >= pipeTop.top && (pipeTop.left + 100) >= this.left && this.left >= pipeTop.left){
            if(!this.gameOverTriggered){
                alert('Game Over')
                this.gameOverTriggered = true
            }
            }
        else if ((pipeTop1.top + 200) >= this.top && this.top >= pipeTop1.top && (pipeTop1.left + 100) >= this.left && this.left >= pipeTop1.left){
            if(!this.gameOverTriggered){
                alert('Game Over')
                this.gameOverTriggered = true
            }
        }
        else if ((pipeBot.top + 200) >= this.top && this.top >= pipeBot.top && (pipeBot.left + 100) >= this.left && this.left >= pipeBot.left){
            if(!this.gameOverTriggered){
                alert('Game Over')
                this.gameOverTriggered = true
            }
        }
        else if ((pipeBot1.top + 200) >= this.top && this.top >= pipeBot1.top && (pipeBot1.left + 100) >= this.left && this.left >= pipeBot1.left){
            if(!this.gameOverTriggered){
                alert('Game Over')
                this.gameOverTriggered = true
            }
        }
    }
}