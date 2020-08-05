import "phaser";
import { Preloader } from './scenes/Preloader';
import { Main } from './scenes/Main';
import { Cards } from './scenes/Cards';
import { RichTextDemo } from "./scenes/RichTextDemo";
import { Fire } from "./scenes/Fire";
    
const config: GameConfig = {
    type: Phaser.AUTO,
    parent: "canvas",
    width: 960,
    height: 540,
    // scale: {
    //     mode: Phaser.Scale.FIT,
    //     autoCenter: Phaser.Scale.CENTER_BOTH
    // },
    scene: [
        Preloader,
        Main,
        RichTextDemo,
        Cards,
        Fire
    ]
};

const game = new Phaser.Game(config);