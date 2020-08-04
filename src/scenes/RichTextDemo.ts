import { RichText } from "../objects/RichText";

export class RichTextDemo extends Phaser.Scene {
    private fpsText : Phaser.GameObjects.Text;
    private stringArr:Array<string> = "the quick brown fox jumps over the lazy dog".split(' ')
    private imageKeyArr: Array<string> = []

    constructor() {
        super("richtextdemo");
    }

    create() {
       this.fpsText = this.add.text(10,10, "00").setColor('white')

       for( let i = 1 ; i <= 20 ; i++){
        this.imageKeyArr.push(`icon-${i}`)
    }

       const richText1 = new RichText(this, 100, 100)


       this.time.addEvent({
        delay: 2000,                
        callback: ()=>{
            richText1.removeAll()

            richText1.setFontSize(Math.floor( Math.random() * 16 + 16 ))
            richText1.setGap(richText1.getFontSize())

            const elementsCount = Math.floor( Math.random() * 8 + 1 )

            for(let i = 0 ; i <= elementsCount ; i++){
                let elementsArray:Array<any> = []
                const rndArr = Math.floor( Math.random() * 2 )

                rndArr > 0 ?  elementsArray = this.stringArr : elementsArray = this.imageKeyArr

                const rndElement = elementsArray[ Math.floor( Math.random() * elementsArray.length)]

                if(rndArr > 0){
                     richText1.add(this.add.text(0,0,rndElement))
                } else {
                    richText1.add(this.add.sprite(0,0,rndElement))
                }
            }

            richText1.center()
        },
        loop: true,
    });

       richText1.center()

  
    }

    update(){
        this.fpsText.setText('FPS: ' + String(this.game.loop.actualFps).slice(0,5))
    }
}