class JellyfishViolet extends MoveableObject {

    IMAGES_VOILET_SWIM = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png'
    ];


    constructor(x) {
        super().loadImage(this.IMAGES_VOILET_SWIM[0]);
        this.loadImages(this.IMAGES_VOILET_SWIM);
        this.x = x + Math.random() * 500;
        this.y = 400 - Math.random() * 300;
        this.width = 80;
        this.height = 60;
        this.animate();
        this.otherDirection = true;
        this.speed = 0.75 + Math.random() * 0.75;
        this.offsetX = 40;
        this.offsetY = 25;
        this.offsetWidth = - 110;
        this.offsetHeight = - 70;
    }
 

    animate() {
        this.checkMovingDirection();
        this.swimAnimation(this.IMAGES_VOILET_SWIM);
    }
}


class JellyfishYellow extends MoveableObject {

    IMAGES_YELLOW_SWIM = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png',
    ];


    constructor(x) {
        super().loadImage(this.IMAGES_YELLOW_SWIM[0]);
        this.loadImages(this.IMAGES_YELLOW_SWIM);
        this.x = x + Math.random() * 500;
        this.y = 400 - Math.random() * 300;
        this.width = 80;
        this.height = 60;
        this.animate();
        this.otherDirection = true;
        this.speed = 0.75 + Math.random() * 0.75;
        this.offsetX = 40;
        this.offsetY = 25;
        this.offsetWidth = - 110;
        this.offsetHeight = - 70;
    }
 

    animate() {
        this.checkMovingDirection();
        this.swimAnimation(this.IMAGES_YELLOW_SWIM);
    }
}