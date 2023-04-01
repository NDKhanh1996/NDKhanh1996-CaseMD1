const meteorImage = new Image();
meteorImage.src = "./download.png";


class Meteor {
    constructor(image, left, top, width, height) {
        this.image = image
        this.top = top
        this.left = left
        this.width = width
        this.height = height
    }

    drawMeteor() {
        ctx.drawImage(this.image, this.left, this.top, this.width, this.height);
    }

    meteorFall() {
            if (this.top < canvas.height) {
                ctx.clearRect(this.left, this.top - 2, this.width + 3, this.height + 3)
                this.top += 2;
                this.left -= 2;
                this.meteorLoop()
                this.drawMeteor()
            }
    }
    randomMeteor(){
        this.left = Math.random() * 880 + 400
        this.top = Math.random() * -400
    }
    meteorLoop(){
        if (this.top > 760) {
            this.randomMeteor()
        }
    }
}