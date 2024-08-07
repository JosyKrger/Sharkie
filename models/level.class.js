class Level {

    backgroundObject;
    pufferfish;
    jellyfish_violet;
    jellyfish_yellow;
    coins;
    bottles;
    endboss;
    level_end_x = 3600;

    constructor(backgroundObject, pufferfish, jellyfish_violet, jellyfish_yellow, coins, bottles, endboss) {
        this.backgroundObject = backgroundObject;
        this.pufferfish = pufferfish;
        this.jellyfish_violet = jellyfish_violet;
        this.jellyfish_yellow = jellyfish_yellow;
        this.coins = coins;
        this.bottles = bottles;
        this.endboss = endboss;
    }
}