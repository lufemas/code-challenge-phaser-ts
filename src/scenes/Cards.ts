import { Deck } from "../objects/Deck";
import { BackBtn } from "../objects/BackBtn";

export class Cards extends Phaser.Scene {
    private fpsText : Phaser.GameObjects.Text;

    constructor() {
        super("cards");
    }

    create() {
        // Background image
        this.add.tileSprite(0,0,this.game.canvas.width,this.game.canvas.height, 'wood-texture').setOrigin(0,0).setAlpha(.6)
        
        // Text to display FPS 
        this.fpsText = this.add.text(10,10, "00").setColor('white').setFontStyle("bold")

        // Creating 2 Decks, the card will move from one to another
        const deck1 = new Deck(this, this.game.canvas.width/2 -330,25)
        const deck2 = new Deck(this, this.game.canvas.width/2 +200,25)

        // Button to go back to Main Scene
        const backBtn = new BackBtn(this, this.game.canvas.width - 60, this.game.canvas.height - 60).setScale(.30)


        // Initializing the first Deck with all the cards
        for( let i = 1 ; i <= 144 ; i++){
        const card =  this.add.sprite( 0,0, `card-${i}`).setOrigin(0,0)
        deck1.addRaw( card )
        }

        // Fires the function that will change each card to the second deck
        deck1.changeToDeck(deck2)

    }

    update(time:number, dt:number){
        // Update the FPS text
        this.fpsText.setText('FPS: ' + (1000/dt).toFixed(2))
    }
}