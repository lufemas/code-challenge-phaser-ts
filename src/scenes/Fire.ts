import { BackBtn } from "../objects/BackBtn";

export class Fire extends Phaser.Scene {
    private fpsText : Phaser.GameObjects.Text;
    private particles: Phaser.GameObjects.Particles.ParticleEmitterManager

    constructor() {
        super("fire");
    }

    create() {
       this.fpsText = this.add.text(10,10, "00").setColor('white').setFontStyle("bold")

       const backBtn = new BackBtn(this, this.game.canvas.width - 60, this.game.canvas.height - 60).setScale(.30)


        this.particles = this.add.particles('fire');

        this.particles.createEmitter({
            alpha: { start: 1, end: 0 },
            scale: { start: 0.1, end: 1 },
            //tint: { start: 0xff945e, end: 0xff945e },
            speed: 50,
            accelerationY: -500,
            angle: { min: -85, max: -95 },
            rotate: { min: -180, max: 180 },
            lifespan: { min: 900, max: 1100 },
            blendMode: 'ADD',
            frequency: 110,
            maxParticles: 10,
            x: 480,
            y: 400,
            tint: [0xfa4700,0xff6f00,0xfa4700, 0xffaa00,0xff6f00]
        })

        const bgMusic = this.sound.add("fire-sound", { loop: true, volume: 0.3 }).play();

    }

    update(time:number, dt:number){
        this.fpsText.setText('FPS: ' + (1000/dt).toFixed(2))
    }
}