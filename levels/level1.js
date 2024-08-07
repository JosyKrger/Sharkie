const level1 = new Level(

    backgroundObject = [
        new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', -1440, 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', -1440, 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', -1440, 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', -1440, 0),
        new BackgroundObject('img/3. Background/Layers/1. Light/1.png', -1440, 0),
        new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', -720, 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', -720, 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', -720, 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', -720, 0),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', -720, 0),

        new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 0, 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 0, 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 0, 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 0, 0),
        new BackgroundObject('img/3. Background/Layers/1. Light/1.png', 0, 0),
        new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 720, 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 720, 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 720, 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 720, 0),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', 720, 0),

        new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 1440, 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 1440, 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 1440, 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 1440, 0),
        new BackgroundObject('img/3. Background/Layers/1. Light/1.png', 1440, 0),
        new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 2160, 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 2160, 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 2160, 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 2160, 0),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', 2160, 0),

        new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 2880, 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 2880, 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 2880, 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 2880, 0),
        new BackgroundObject('img/3. Background/Layers/1. Light/1.png', 2880, 0),
        new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 3600, 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 3600, 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 3600, 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 3600, 0),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', 3600, 0),
    ],

    pufferfish = [
        new Pufferfish(600),
        new Pufferfish(900),
        new Pufferfish(1200),
        new Pufferfish(1800),
        new Pufferfish(2700)
    ],

    jellyfish_violet = [
        new JellyfishViolet(400),
        new JellyfishViolet(1050),
        new JellyfishViolet(3000)
    ],

    jellyfish_yellow = [
        new JellyfishYellow(1600),
        new JellyfishYellow(2300)
    ],

    coins = [
        new Coins(700, 320),
        new Coins(1200, 150),
        new Coins(1600, 250),
        new Coins(2000, 180),
        new Coins(2420, 300),   // Beginn des kleinen Bogens
        new Coins(2520, 250),  
        new Coins(2620, 220),
        new Coins(2720, 250),
        new Coins(2820, 300),
        new Coins(3200, 150)
    ],

    bottles = [
        new Bottles('img/4. Marcadores/Posión/Dark - Left.png', 600, 350, 30),
        new Bottles('img/4. Marcadores/Posión/Dark - Right.png', 960, 320, 20),
        new Bottles('img/4. Marcadores/Posión/Dark - Left.png', 1300, 360, 30),
        new Bottles('img/4. Marcadores/Posión/Dark - Right.png', 1750, 360, 20),
        new Bottles('img/4. Marcadores/Posión/Dark - Left.png', 2350, 350, 30),
        new Bottles('img/4. Marcadores/Posión/Dark - Right.png', 3000, 340, 20),
        new Bottles('img/4. Marcadores/Posión/Dark - Left.png', 3500, 350, 30),
    ],

    endboss = [
        new Endboss()
    ]
);