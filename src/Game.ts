import "phaser";
import { Preloader } from './scenes/Preloader';
import { Main } from './scenes/Main';
import { Cards } from './scenes/Cards';
import { RichTextDemo } from "./scenes/RichTextDemo";
import { Fire } from "./scenes/Fire";
    
const config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_VERTICALLY,

    },
    parent: "canvas",
    width: 960,
    height: 540,
    scene: [
        Preloader,
        Main,
        RichTextDemo,
        Cards,
        Fire
    ]
};

const game = new Phaser.Game(config);