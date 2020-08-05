import { config } from '../config/preload';

export class Preloader extends Phaser.Scene {
    constructor() {
        super({
            key: 'preloader',
            pack: {
                files: [
                    { type: 'image', key: 'bar', url: './assets/images/loadBar.png' },
                    { type: 'image', key: 'barBg', url: './assets/images/barBg.png' }
                ]
            }
        });
    }

    preload() {
        // add the loading bar to use as a display for the loading progress of the remainder of the assets

        

        const barBg = this.add.image(this.sys.canvas.width / 2, this.sys.canvas.height / 2, 'barBg');
        const bar = this.add.sprite(this.sys.canvas.width / 2, this.sys.canvas.height / 2, 'bar');

        const mask = this.make.graphics({
            x: bar.x - (bar.width / 2),
            y: bar.y - (bar.height / 2),
            add: false
        });
        mask.fillRect(0, 0, 0, bar.height);

        bar.mask = new Phaser.Display.Masks.GeometryMask(this, mask);
        
        this.load.on('progress', (progress: number) => {
            mask.clear();
            mask.fillRect(0, 0, bar.width * progress, bar.height);
        });

        // load assets declared in the preload config
        for( let i = 1 ; i <= 144 ; i++){
            this.load.image(`card-${i}`, `../assets/images/cards/card-${i}.png`)
        }

        for( let i = 1 ; i <= 20 ; i++){
            this.load.image(`icon-${i}`, `../assets/images/icons/icon-${i}.png`)
        }

        this.load.image(`fire`, `../assets/images/fire.png`)

        this.load.image(`wood-texture`, `../assets/images/wood-texture.png`)

        this.load.image(`task1-btn`, `../assets/images/task1-btn.png`)
        this.load.image(`task2-btn`, `../assets/images/task2-btn.png`)
        this.load.image(`task3-btn`, `../assets/images/task3-btn.png`)
        this.load.image(`back-btn`, `../assets/images/back-btn.png`)

        // this.loadAtlas();
        this.loadAudio();
    }

    create() {
        this.scene.start('main');
    }

    loadAtlas() {
        const sheetPath = config.ssPath;
        const sheets = config.sheets;

        this.load.setPath(sheetPath);

        for (let i = 0; i < sheets.length; i++) {
            this.load.atlas(sheets[i], `${sheets[i]}.png`, `${sheets[i]}.json`);
        }

        
    }

    loadAudio() {
        const audioPath = config.audioPath;
        const audioFiles = config.audioFiles;

        this.load.setPath(audioPath);

        for (let i = 0; i < audioFiles.length; i++) {
            this.load.audio(audioFiles[i].key, audioFiles[i].mp3, audioFiles[i].ogg);
        }
    }
}