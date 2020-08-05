export class Main extends Phaser.Scene {
    constructor() {
        super("main");
    }

    create() {

        this.sound.stopAll()

        const btn1 =  this.add.sprite(480, 95,'task1-btn').setScale(.9)
        
        btn1.setInteractive().on('pointerdown', ( btn: Phaser.GameObjects.Sprite)=>{

            this.add.tween({
                targets: btn1,
                scaleX: 1.15,
                scaleY: 1.15,
                depth: 4,
                ease:'Elastic',
                duration: 1000,
                onComplete: ()=>{
                    this.scene.start('cards');

                }
            })

        })

        const btn2 = this.add.sprite(480,btn1.y + btn1.height + 12,'task2-btn').setScale(.9)
        
        btn2.setInteractive().on('pointerdown', ( btn: Phaser.GameObjects.Sprite)=>{

            this.add.tween({
                targets: btn2,
                scaleX: 1.15,
                scaleY: 1.15,
                depth: 4,
                ease:'Elastic',
                duration: 1000,
                onComplete: ()=>{
                    this.scene.start('richtextdemo');

                }
            })

        })

        

        const btn3 = this.add.sprite(480,btn2.y + btn2.height + 12,'task3-btn').setScale(.9)
        
        btn3.setInteractive().on('pointerdown', ( btn: Phaser.GameObjects.Sprite)=>{

            this.add.tween({
                targets: btn3,
                scaleX: 1.15,
                scaleY: 1.15,
                depth: 4,
                ease:'Elastic',
                duration: 1000,
                onComplete: ()=>{
                    this.scene.start('fire');

                }
            })

        })


    }
}