class Character extends MoveableObject {

    y = 230;
    width = 250;
    height = 280;
    world;

    IMAGES_IDLE = [
        'img/1.Sharkie/1.IDLE/1.png',
        'img/1.Sharkie/1.IDLE/2.png',
        'img/1.Sharkie/1.IDLE/3.png',
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/5.png',
        'img/1.Sharkie/1.IDLE/6.png',
        'img/1.Sharkie/1.IDLE/7.png',
        'img/1.Sharkie/1.IDLE/8.png',
        'img/1.Sharkie/1.IDLE/9.png',
        'img/1.Sharkie/1.IDLE/10.png',
        'img/1.Sharkie/1.IDLE/11.png',
        'img/1.Sharkie/1.IDLE/12.png',
        'img/1.Sharkie/1.IDLE/13.png',
        'img/1.Sharkie/1.IDLE/14.png',
        'img/1.Sharkie/1.IDLE/15.png',
        'img/1.Sharkie/1.IDLE/16.png',
        'img/1.Sharkie/1.IDLE/17.png',
        'img/1.Sharkie/1.IDLE/18.png'
    ];

    IMAGES_SWIM = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png',
    ];


    constructor() {
        super().loadImage(this.IMAGES_IDLE[0]);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SWIM);
        this.animate();
        this.applyGravity();
        this.offsetX = 125;
        this.offsetY = 175;
        this.offsetWidth = - 350;
        this.offsetHeight = - 495;
    }


    animate() {
        this.moveCharacter();
        this.moveCharacterImages();
    }


    moveCharacter() {
        setInterval(() => {
            this.moveRight();
            this.moveLeft();
            this.jump();
                this.world.camera_x = -this.x + 150;
        }, 1000 / 60);
    }


    moveCharacterImages() {
        setInterval(() => {
            if (this.world.keyboard.LEFT || this.world.keyboard.RIGHT) {
                this.animateObject(this.IMAGES_SWIM);
            } else {
                this.animateObject(this.IMAGES_IDLE);
            }
        }, 200);
    }


    moveLeft() {
        if (this.world.keyboard.LEFT && this.x > 0) {
            this.x -= this.speed;
            this.otherDirection = true;
        }
    }


    moveRight() {
        if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
            this.x += this.speed;
            this.otherDirection = false;
        }
    }


    jump() {
        if (this.world.keyboard.SPACE && this.y > -60) {
            this.speedY = 10;
        }
    }
}