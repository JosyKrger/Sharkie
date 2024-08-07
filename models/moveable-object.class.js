class MoveableObject {

    img;
    imageCache = [];
    currentImage = 0;
    otherDirection = false;
    direction = 1;
    moving_time = 5000 + Math.random() * 5000;
    movingUp = true;

    x = 200;
    y = 200;
    width = 200;
    height = 200;
    offsetX;
    offsetY;
    offsetWidth;
    offsetHeight;

    speed = 5;
    speedY = 0;
    acceleration = 2.5;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    loadImages(array) {
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }


    animateObject(array) {
        let i = this.currentImage % array.length;
        let path = array[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25)
    }


    isAboveGround() {
        return this.y < 210;
    }


    checkMovingDirection() {
        setInterval(() => {
            if (this.movingUp) {
                this.moveUp();
            } else {
                this.moveDown();
            }
            this.movingUp = !this.movingUp; //Ändert false wieder zu true, damit die Fische durch true wieder nach oben schwimmen damit die if-Bedingung in Zeile 34 erfüllt wird
        }, 4000);
    }


    moveUp() {
        const moveInterval = setInterval(() => {
            this.y -= this.speed;
            if (this.y <= 60) {
                clearInterval(moveInterval);
            }
        }, 1000 / 60);
    }

    
    moveDown() {
        const moveInterval = setInterval(() => {
            this.y += this.speed;
            if (this.y >= 400) {
                clearInterval(moveInterval);
            }
        }, 1000 / 60);
    }


    moveObjectsDirection(time) {
        this.moveObjectsRight();
        this.moveObjectsLeft(time);
    }


    moveObjectsRight() {
        setInterval(() => {
            this.x += this.speed * this.direction;
        }, 1000 / 60);
    }


    moveObjectsLeft(time) {
        setInterval(() => {
            this.direction *= -1;
            this.otherDirection = !this.otherDirection;
        }, time);
    }


    swimAnimation(images) {
        setInterval(() => {
            this.animateObject(images);
        }, 150);
    }


    isColliding(obj) {
       let character = (this.x + this.offsetX, this.y + this.offsetY, this.width + this.offsetWidth / 2, this.height + this.offsetHeight / 2, 0, 0, 2 * Math.PI);
       let enemy = (obj.x + obj.offsetX, obj.y + obj.offsetY, obj.width + obj.offsetWidth / 2, obj.height + obj.offsetHeight / 2, 0, 0, 2 * Math.PI);
       console.log(character, enemy);
       if (character < enemy) {
        console.log(character, enemy);
       }
    }

    //ctx.ellipse(mo.x + mo.offsetX, mo.y + mo.offsetY, mo.width + mo.offsetWidth / 2, mo.height + mo.offsetHeight / 2, 0, 0, 2 * Math.PI);

}