let ctx = document.getElementById('canvas').getContext('2d');
let canvas = document.getElementById('canvas')
let pipe1 = new Pipe(pipeTopIMG, 1200, -250, 100, 600) // pipeTop
let pipe2 = new Pipe(pipeBotIMG, 1200, pipe1.top + 850, 100, 600) // pipeBot
let pipe3 = new Pipe(pipeTopIMG, 1900, -300, 100, 600) // pipeTop1
let pipe4 = new Pipe(pipeBotIMG, 1900, pipe3.top + 850, 100, 600) // pipeBot1
let bird = new Bird(birdImage, 500, 200, 40, 40);
let meteor1 = new Meteor(meteorImage, 1280, 0, 30, 30)
let meteor2 = new Meteor(meteorImage, 1280, 0, 30, 30)
let meteor3 = new Meteor(meteorImage, 1280, 0, 30, 30)
let meteor4 = new Meteor(meteorImage, 1280, 0, 30, 30)
let meteor5 = new Meteor(meteorImage, 1280, 0, 30, 30)
let meteor6 = new Meteor(meteorImage, 1280, 0, 30, 30)
let bullet = new Bullet(bulletImage, bird.left + 40, bird.top + 20, 100, 100)
let mob = new Mob(mobImage, 1300, 0, 100, 100)
let mob1 = new Mob(mobImage, 2000, 700, 100, 100)
let mob2 = new Mob(mobImage, 2700, 400, 100, 100)
let speed = 0
let animationId;

function autoMove() {
    bullet.bulletMoveRight()
    bird.moveBot();
    mob.moveLeft()
    mob1.moveLeft()
    mob2.moveLeft()
    meteor1.meteorFall()
    meteor2.meteorFall()
    meteor3.meteorFall()
    meteor4.meteorFall()
    meteor5.meteorFall()
    meteor6.meteorFall()
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
