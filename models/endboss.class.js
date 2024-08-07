class Endboss extends MoveableObject {

    IMAGES_FLOAT = [
        'img/2.Enemy/3 Final Enemy/2.floating/1.png',
        'img/2.Enemy/3 Final Enemy/2.floating/2.png',
        'img/2.Enemy/3 Final Enemy/2.floating/3.png',
        'img/2.Enemy/3 Final Enemy/2.floating/4.png',
        'img/2.Enemy/3 Final Enemy/2.floating/5.png',
        'img/2.Enemy/3 Final Enemy/2.floating/6.png',
        'img/2.Enemy/3 Final Enemy/2.floating/7.png',
        'img/2.Enemy/3 Final Enemy/2.floating/8.png',
        'img/2.Enemy/3 Final Enemy/2.floating/9.png',
        'img/2.Enemy/3 Final Enemy/2.floating/10.png',
        'img/2.Enemy/3 Final Enemy/2.floating/11.png',
        'img/2.Enemy/3 Final Enemy/2.floating/12.png',
        'img/2.Enemy/3 Final Enemy/2.floating/13.png',
    ];


    constructor(x) {
        super().loadImage(this.IMAGES_FLOAT[0]);
        this.loadImages(this.IMAGES_FLOAT);
        this.x = 3750; 
        this.y = -50;
        this.width = 400;
        this.height = 400;
        this.animate();
        //this.otherDirection = true;
        this.speed = 0.75 + Math.random() * 0.75;
        this.offsetX = 180;
        this.offsetY = 260;
        this.offsetWidth = -480;
        this.offsetHeight = -690;
    }
 

    animate() {
       // this.checkMovingDirection();
        this.swimAnimation(this.IMAGES_FLOAT);
    }
}