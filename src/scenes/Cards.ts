import { Deck } from "../objects/Deck";
import { BackBtn } from "../objects/BackBtn";

export class Cards extends Phaser.Scene {
    private fpsText : Phaser.GameObjects.Text;

    constructor() {
        super("cards");
    }

    create() {
       this.add.tileSprite(0,0,this.game.canvas.width,this.game.canvas.height, 'wood-texture').setOrigin(0,0).setAlpha(.6)

       this.fpsText = this.add.text(10,10, "00").setColor('white').setFontStyle("bold")


       const deck1 = new Deck(this, this.game.canvas.width/2 -330,25)
       const deck2 = new Deck(this, this.game.canvas.width/2 +200,25)

       const backBtn = new BackBtn(this, this.game.canvas.width - 60, this.game.canvas.height - 60).setScale(.30)


       for( let i = 1 ; i <= 144 ; i++){
        const card =  this.add.sprite( 0,0, `card-${i}`).setOrigin(0,0)
        deck1.addCard( card )
        }

        deck1.changeToDeck(deck2)
  
    }

    update(time:number, dt:number){
        this.fpsText.setText('FPS: ' + (1000/dt).toFixed(2))
    }
}