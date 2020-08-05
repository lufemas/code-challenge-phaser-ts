import { RichText } from "../objects/RichText";
import { BackBtn } from "../objects/BackBtn";

export class RichTextDemo extends Phaser.Scene {

    private fpsText : Phaser.GameObjects.Text;
    
    // Creating an Array with the words, to be randomized below
    private stringArr:Array<string> = "the quick brown fox jumps over the lazy dog".split(' ')
    private imageKeyArr: Array<string> = []

    constructor() {
        super("richtextdemo");
    }

    create() {
        // Text to display FPS 
        this.fpsText = this.add.text(10,10, "00").setColor('white').setFontStyle("bold")

        // Button to go back to Main Scene
        const backBtn = new BackBtn(this, this.game.canvas.width - 60, this.game.canvas.height - 60).setScale(.30)

        // Creating an Array with the images Keys, to be randomized below
        for( let i = 1 ; i <= 20 ; i++){
            this.imageKeyArr.push(`icon-${i}`)
        }

        // Creating and positioning a new instance of RichText, the X position is not importanting
        // Since for this demonstration the function RichText.center() is being called on every loop
        const richText1 = new RichText(this, 0, 100)

        // Tweaks to animate later
        richText1.setRotation(-.1).setAlpha(0).setScale(1,0)

        // Animation the richText1 to demonstrate why a Container is the better choice here.
        const richTextTween = this.add.tween({
            targets: richText1,
            rotation: .1,
            scaleY: 1.2,
            scaleX: .9,
            alpha: 1,
            duration: 1000,
            ease: 'Circ',
            yoyo: true
        })


        // Timer Event that will randomize new elements to richText1.
        this.time.addEvent({
            delay: 2000,        // Every 2 seconds                
            callback: ()=>{
                richText1.removeAll()       // Remove previous children

                richText1.setFontSize(Math.floor( Math.random() * 16 + 16 ))        // Random Font Size
                richText1.setGap(richText1.getFontSize())       // Setting Gap based on FontSize

                const elementsCount = Math.floor( Math.random() * 8 + 1 )       // Random total number of elements to add

                // For each element to add, randomize Words and Images
                for(let i = 0 ; i <= elementsCount ; i++){
                    let elementsArray:Array<any> = []       // Pointer to the selected Array, Images or Words

                    // If 0, use the Words Array, else the Images one 
                    const rndArr = Math.floor( Math.random() * 2 )        
                    rndArr > 0 ?  elementsArray = this.stringArr : elementsArray = this.imageKeyArr     

                    // Randomize a elemenent to pick inside the selected Array
                    const rndElement = elementsArray[ Math.floor( Math.random() * elementsArray.length)]

                    // Add to richText1 with the proper Type
                    if(rndArr > 0){
                        richText1.add(this.add.text(0,0,rndElement))
                    } else {
                        richText1.add(this.add.sprite(0,0,rndElement))
                    }
                }
                // Restart the animation and center the richText1
                richTextTween.restart()
                richText1.center()
            },
            startAt: 0,
            loop: true,
        });

    }

    update(time:number, dt:number){
        // Update the FPS text
        this.fpsText.setText('FPS: ' + (1000/dt).toFixed(2))
    }
}