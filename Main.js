let ctx = document.getElementById('canvas').getContext('2d');
let canvas = document.getElementById('canvas')
let pipe1 = new Pipe(pipeTopIMG, 1200,  -250, 100, 500, 50) // pipeTop
let pipe2 = new Pipe(pipeBotIMG, 1200, pipe1.top + 750, 100, 500, 50) // pipeBot

let pipe3 = new Pipe(pipeTopIMG, 1900,  -300, 100, 500, 50) // pipeTop1
let pipe4 = new Pipe(pipeBotIMG, 1900, pipe3.top + 750, 100, 500, 50) // pipeBot1

let bird = new Bird(birdImage, 300, 200, 40, 40);
let speed = 0
let animationId;
function autoMove() {
    bird.moveBot();
    pipe1.moveLeft();
    pipe3.moveLeft();
    pipe2.moveLeft();
    pipe4.moveLeft();
    animationId = requestAnimationFrame(autoMove);
    bird.GameOver();
}

autoMove();
window.addEventListener('keydown', function (event) {
        if (bird.top > 0) {
            if (event.key === ' ') {
                ctx.clearRect(bird.left, bird.top, bird.width, bird.height);
                bird.moveTop();
            }
        }
    }
)
