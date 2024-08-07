class Coins extends MoveableObject {

    IMAGES_COINS = [
        'img/4. Marcadores/1. Coins/1.png',
        'img/4. Marcadores/1. Coins/2.png',
        'img/4. Marcadores/1. Coins/3.png',
        'img/4. Marcadores/1. Coins/4.png'
    ];

    constructor(x, y) {
        super().loadImage(this.IMAGES_COINS[0]);
        this.loadImages(this.IMAGES_COINS);
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = 40;
        this.animate();
        this.offsetX = 20;
        this.offsetY = 20;
        this.offsetWidth = - 45;
        this.offsetHeight = - 45;
    }

    animate() {
        this.swimAnimation(this.IMAGES_COINS);
    }
}


class Bottles extends MoveableObject {
    

    constructor(path, x, y, offsetX) {
        super().loadImage(path);
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 60;
        this.offsetX = offsetX;
        this.offsetY = 40;
        this.offsetWidth = - 65;
        this.offsetHeight = - 85;
    }

}



