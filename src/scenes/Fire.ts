import { BackBtn } from "../objects/BackBtn";

export class Fire extends Phaser.Scene {
    private fpsText : Phaser.GameObjects.Text;
    private particles: Phaser.GameObjects.Particles.ParticleEmitterManager

    constructor() {
        super("fire");
    }

    create() {
        // Text to display FPS 
        this.fpsText = this.add.text(10,10, "00").setColor('white').setFontStyle("bold")

        // Button to go back to Main Scene
        const backBtn = new BackBtn(this, this.game.canvas.width - 60, this.game.canvas.height - 60).setScale(.30)

        // Creating the particles with the fire image
        this.particles = this.add.particles('fire');

        // Creating the Particle Emitter with the max number of particles being 10
        this.particles.createEmitter({
            alpha: { start: 1, end: 0 },
            scale: { start: 0.1, end: 1 },
            speed: 50,
            accelerationY: -500,
            angle: { min: -85, max: -95 },
            rotate: { min: -180, max: 180 },
            lifespan: { min: 900, max: 930 },
            blendMode: 'ADD',
            frequency: 105,
            maxParticles: 10,
            x: 480,
            y: 400,
            tint: [0xfa4700,0xff6f00,0xfa4700, 0xffaa00,0xff6f00],
        })

        // Bachground sound of crackling fire
        const bgMusic = this.sound.add("fire-sound", { loop: true, volume: 0.3 }).play();

    }

    update(time:number, dt:number){
        // Update the FPS text
        this.fpsText.setText('FPS: ' + (1000/dt).toFixed(2))
    }
}