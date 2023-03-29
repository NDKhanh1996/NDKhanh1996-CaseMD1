let ctx = document.getElementById('canvas').getContext('2d');
let pipeTop = new Pipe(pipeTopIMG, 800, -100, 100, 200, 50)
let pipeBot = new Pipe(pipeBotIMG, 1100, 300, 100, 200, 50)
let pipeTop1 = new Pipe(pipeTopIMG, 1400, -150, 100, 200, 50)
let pipeBot1 = new Pipe(pipeBotIMG, 1700, 250, 100, 200, 50)
let bird = new Bird(birdImage, 300, 200, 40, 40)

function autoMove() {
    bird.moveBot();
    pipeTop.moveLeft()
    pipeTop1.moveLeft()
    pipeBot.moveLeft()
    pipeBot1.moveLeft()
    requestAnimationFrame(autoMove);
}

autoMove();
window.addEventListener('keydown', function (event) {
    if (event.key === ' ') {
        ctx.clearRect(bird.left, bird.top, bird.width, bird.height)
        bird.moveTop()
    }
})


