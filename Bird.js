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

    drawBird() {
        ctx.drawImage(this.image, this.left, this.top, this.width, this.height);
    }

    moveBot() {
        if (this.top < 410) {
            ctx.clearRect(this.left, this.top, this.width, this.height)
            this.top += 2;
            this.drawBird()
        }
    }

    moveTop() {
        this.top -= this.speed;
    }
}







