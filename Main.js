let ctx = document.getElementById('canvas').getContext('2d');
let pipeTop = new Pipe(pipeTopIMG, 800,  -50, 100, 200, 50)
let pipeBot = new Pipe(pipeBotIMG, 800, pipeTop.top + 350, 100, 200, 50)

let pipeTop1 = new Pipe(pipeTopIMG, 1400,  -100, 100, 200, 50)
let pipeBot1 = new Pipe(pipeBotIMG, 1400, pipeTop1.top + 350, 100, 200, 50)

let bird = new Bird(birdImage, 300, 200, 40, 40)
let speed = 0
function autoMove() {
    bird.moveBot();
    pipeTop.moveLeft()
    pipeTop1.moveLeft()
    pipeBot.moveLeft()
    pipeBot1.moveLeft()
    bird.GameOver()
    requestAnimationFrame(autoMove);
}

autoMove();
window.addEventListener('keydown', function (event) {
        if (bird.top > 0) {
            if (event.key === ' ') {
                ctx.clearRect(bird.left, bird.top, bird.width, bird.height)
                bird.moveTop()
            }
        }
    }
)
