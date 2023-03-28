let ctx = document.getElementById('canvas').getContext('2d');

let bird = new Bird(birdImage,300, 180,40,40,40)

requestAnimationFrame(bird.drawBird)
setInterval(function fall() {
    if (bird.top < window.innerHeight -260){
        ctx.clearRect(bird.left, bird.top, bird.width, bird.height)
        bird.moveBot()
        bird.drawBird()

    }
}, 300)
window.addEventListener('keydown', function (event) {
    if (event.key === ' '){
        ctx.clearRect(bird.left, bird.top, bird.width, bird.height)
        bird.moveTop()
    }
})


let pipeTop = new Pipe(pipeTopIMG,800, 0, 100, 200,50)
let pipeBot = new Pipe(pipeBotIMG,1000, 250, 100, 200,50)

let pipeTop1 = new Pipe(pipeTopIMG,1200, 0, 100, 200,50)
let pipeBot1 = new Pipe(pipeBotIMG,1400, 250, 100, 200,50)

setInterval(function moveLeft(){
    if (pipeTop.left > -200){
        ctx.clearRect(pipeTop.left, pipeTop.top, pipeTop.width, pipeTop.height)
        pipeTop.moveLeft()
        pipeTop.drawPipe()
        if (pipeTop.left < 0){
            ctx.clearRect(pipeTop.left, pipeTop.top, pipeTop.width, pipeTop.height)
            pipeTop.left = 700
        }else if (pipeTop.left === 400){
            pipeTop.drawPipe()
        }
    }
}, 300)

setInterval(function moveLeft(){
    if (pipeBot.left > -200){
        ctx.clearRect(pipeBot.left, pipeBot.top, pipeBot.width, pipeBot.height)
        pipeBot.moveLeft()
        pipeBot.drawPipe()
        if (pipeBot.left < 0){
            ctx.clearRect(pipeBot.left, pipeBot.top, pipeBot.width, pipeBot.height)
            pipeBot.left = 700
        }else if (pipeBot.left === 600){
            pipeBot.drawPipe()
        }
    }
}, 300)

//
// setInterval(function moveLeft(){
//     if (pipeTop1.left > -200){
//         ctx.clearRect(pipeTop1.left, pipeTop1.top, pipeTop1.width, pipeTop1.height)
//         pipeTop1.moveLeft()
//         pipeTop1.drawPipe()
//         if (pipeTop1.left < 0){
//             ctx.clearRect(pipeTop1.left, pipeTop1.top, pipeTop1.width, pipeTop1.height)
//             pipeTop1.left = 700
//         }
//     }
// }, 300)
//
// setInterval(function moveLeft(){
//     if (pipeBot1.left > -200){
//         ctx.clearRect(pipeBot1.left, pipeBot1.top, pipeBot1.width, pipeBot1.height)
//         pipeBot1.moveLeft()
//         pipeBot1.drawPipe()
//         if (pipeBot1.left < 0){
//             ctx.clearRect(pipeBot1.left, pipeBot1.top, pipeBot1.width, pipeBot1.height)
//             pipeBot1.left = 700
//         }
//     }
// }, 300)














