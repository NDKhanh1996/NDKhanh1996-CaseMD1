const birdImage = new Image();
birdImage.src = "./images.jpeg";

class Bird {
    constructor(image, left, top, width, height, speed) {
        this.image = image
        this.top = top
        this.left = left
        this.width = width
        this.height = height
        this.speed = speed
    }
    moveBot(){
        this.top += this.speed;
    }
    moveTop(){
        this.top -= this.speed;
    }
    drawBird() {
    ctx.drawImage(this.image, this.left, this.top, this.width, this.height);


}

}

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






