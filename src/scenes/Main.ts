export class Main extends Phaser.Scene {
    constructor() {
        super("main");
    }

    create() {
        this.scene.start('richtextdemo');

    }
}