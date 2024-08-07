class BackgroundObject extends MoveableObject {

    width = 720;

    constructor(path, x, y) {
        super().loadImage(path);
        this.x = x;
        this.y = y;
        this.height = 480;
    }
}