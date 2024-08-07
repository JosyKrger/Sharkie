class Pufferfish extends MoveableObject {
    color = 1 + Math.floor(Math.random() * 3);

    IMAGES_SWIM = [
        `img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/${this.color}.swim1.png`,
        `img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/${this.color}.swim2.png`,
        `img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/${this.color}.swim3.png`,
        `img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/${this.color}.swim4.png`,
        `img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/${this.color}.swim5.png`
    ];


    constructor(x) {
        super().loadImage(this.IMAGES_SWIM[0]);
        this.loadImages(this.IMAGES_SWIM);
        this.x = x + Math.random() * 500;
        this.y = 400 - Math.random() * 300;
        this.width = 80;
        this.height = 60;
        this.animate();
        this.otherDirection = true;
        this.speed = 0.75 + Math.random() * 0.75;
        this.offsetX = 35;
        this.offsetY = 25;
        this.offsetWidth = -90;
        this.offsetHeight = -80;
    }


    animate() {
        this.moveObjectsDirection(this.moving_time); 
        this.checkMovingDirection();
        this.swimAnimation(this.IMAGES_SWIM);
    }
}
