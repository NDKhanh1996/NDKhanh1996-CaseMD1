const bulletImage = new Image();
bulletImage.src = "./Bullet.png";

class Bullet {
    constructor(image, left, top, width, height) {
        this.image = image
        this.top = top
        this.left = left
        this.width = width
        this.height = height
    }

    drawBullet() {
        ctx.drawImage(this.image, this.left, this.top, this.width, this.height);
    }
    bulletMoveRight() {
        ctx.clearRect(this.left, this.top -5 , this.width, this.height)
        this.left += 5;
        this.drawBullet();
        this.bulletLoop();

    }

    bulletLoop(){
        if ( this.left > 1300){
            this.left = bird.left + 40
            this.top = bird.top + 20
        }

    }


}



