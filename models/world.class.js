class World {

    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollision();
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);

        this.addObjectToMap(this.level.backgroundObject);
        this.addObjectToMap(this.level.coins);
        this.addObjectToMap(this.level.bottles);
        this.addObjectToMap(this.level.jellyfish_violet);
        this.addObjectToMap(this.level.jellyfish_yellow);
        this.addObjectToMap(this.level.pufferfish);
        this.addObjectToMap(this.level.endboss);
        this.addToMap(this.character);

        this.ctx.translate(-this.camera_x, 0);
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }


    addObjectToMap(mo) {
        mo.forEach(o => {
            this.addToMap(o);
        })
    }


    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        // this.drawBorder(mo);
        // this.drawBorderExactly(mo);
        this.drawBorderCircle(mo);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }


    drawBorder(mo) {
        if (mo instanceof Character || mo instanceof JellyfishYellow || mo instanceof JellyfishViolet || mo instanceof Pufferfish || mo instanceof Endboss || mo instanceof Coins || mo instanceof Bottles) {
            this.ctx.beginPath();
            this.ctx.lineWidth = '2';
            this.ctx.strokeStyle = 'blue';
            this.ctx.rect(mo.x, mo.y, mo.width, mo.height);
            this.ctx.stroke();
        }
    }


    drawBorderExactly(mo) {
        if (mo instanceof Character || mo instanceof JellyfishYellow || mo instanceof JellyfishViolet || mo instanceof Pufferfish || mo instanceof Endboss || mo instanceof Coins || mo instanceof Bottles) {
            this.ctx.beginPath();
            this.ctx.lineWidth = '2';
            this.ctx.strokeStyle = 'red';
            this.ctx.rect(mo.x + mo.offsetX, mo.y + mo.offsetY, mo.offsetWidth, mo.offsetHeight);
            this.ctx.stroke();
        }
    }


    drawBorderCircle(mo) {
        if (mo instanceof Character || mo instanceof JellyfishYellow || mo instanceof JellyfishViolet || mo instanceof Pufferfish || mo instanceof Endboss || mo instanceof Coins || mo instanceof Bottles) {
            this.ctx.beginPath();
            this.ctx.lineWidth = '2';
            this.ctx.strokeStyle = 'red';
            ctx.ellipse(mo.x + mo.offsetX, mo.y + mo.offsetY, mo.width + mo.offsetWidth / 2, mo.height + mo.offsetHeight / 2, 0, 0, 2 * Math.PI);
            ctx.stroke();
        }
    }


    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }


    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }


    setWorld() {
        this.character.world = this;
    }


    checkCollision() {
        setInterval( () => {
            this.level.pufferfish.forEach( (pufferfish) => {
                if (this.character.isColliding(pufferfish)) {
                    console.log("Character hit the pufferfish", pufferfish);
                }
            });
        }, 200);
    }
}