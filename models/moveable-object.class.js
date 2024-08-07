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
        // Berechnung der Parameter der ersten Ellipse
        let oX1 = this.x + (this.width + this.offsetWidth) / 2 + this.offsetX; 
        let oY1 = this.y + (this.height + this.offsetHeight) / 2 + this.offsetY;
        let oWidth1 = (this.width + this.offsetWidth) / 2;
        let oHeight1 = (this.height + this.offsetHeight) / 2;
    
        // Berechnung der Parameter der zweiten Ellipse
        let oX2 = obj.x + (obj.width + obj.offsetWidth) / 2 + obj.offsetX; 
        let oY2 = obj.y + (obj.height + obj.offsetHeight) / 2 + obj.offsetY;
        let oWidth2 = (obj.width + obj.offsetWidth) / 2;
        let oHeight2 = (obj.height + obj.offsetHeight) / 2;
    
        // Berechnung des Abstands zwischen den Mittelpunkten der beiden Ellipsen
        let dx = oX1 - oX2;
        let dy = oY1 - oY2;
        let distance = Math.sqrt(dx * dx + dy * dy);
    
        // Berechnung der Radien der Ellipsen entlang der Kollisionsrichtung
        let angle = Math.atan2(dy, dx);
        let r1 = (oWidth1 * oHeight1) / 
                 Math.sqrt(oHeight1 * oHeight1 * Math.cos(angle) * Math.cos(angle) + 
                           oWidth1 * oWidth1 * Math.sin(angle) * Math.sin(angle));
        let r2 = (oWidth2 * oHeight2) / 
                 Math.sqrt(oHeight2 * oHeight2 * Math.cos(angle) * Math.cos(angle) + 
                           oWidth2 * oWidth2 * Math.sin(angle) * Math.sin(angle));
    
        // Überprüfung, ob die Ellipsen kollidieren
        return distance <= (r1 + r2);
    }

    //ctx.ellipse(mo.x + mo.offsetX, mo.y + mo.offsetY, mo.width + mo.offsetWidth / 2, mo.height + mo.offsetHeight / 2, 0, 0, 2 * Math.PI);

}