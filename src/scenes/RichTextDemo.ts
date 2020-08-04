import { Deck } from "../objects/Deck";

export class RichTextDemo extends Phaser.Scene {
    private fpsText : Phaser.GameObjects.Text;

    constructor() {
        super("richtextdemo");
    }

    create() {
       this.fpsText = this.add.text(10,10, "00").setColor('white')
       const deck1 = new Deck(this, this.game.canvas.width/2 -330,25)
       const deck2 = new Deck(this,this.game.canvas.width/2 +200,25)

       for( let i = 1 ; i <= 144 ; i++){
        const card =  this.add.sprite( 0,0, `card-${i}`).setOrigin(0,0)
        deck1.addCard( card )
        }

        deck1.changeToDeck(deck2)
  
    }

    update(){
        this.fpsText.setText('FPS: ' + String(this.game.loop.actualFps).slice(0,5))
    }
}