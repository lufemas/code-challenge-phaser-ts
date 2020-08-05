 
export class BackBtn extends Phaser.GameObjects.Sprite {
/**
  * A custom Sprite class that goes back to the main scene after an animation
  * 
  */
  constructor(scene: Phaser.Scene, x: number, y:number ) {
    super(scene, x, y, 'back-btn');
  
    scene.add.existing(this)


    this.setInteractive().on('pointerdown', ()=>{

      scene.add.tween({
          targets: this,
          scaleX: this.scaleX * 1.1,
          scaleY: this.scaleY * 1.1,
          ease:'Elastic',
          duration: 1000,
          onComplete: ()=>{
              scene.scene.start('main');

          }
      })

  })
  }


}