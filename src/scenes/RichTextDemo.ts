import { RichText } from "../objects/RichText";
import { BackBtn } from "../objects/BackBtn";

export class RichTextDemo extends Phaser.Scene {
    private fpsText : Phaser.GameObjects.Text;
    private stringArr:Array<string> = "the quick brown fox jumps over the lazy dog".split(' ')
    private imageKeyArr: Array<string> = []

    constructor() {
        super("richtextdemo");
    }

    create() {
       this.fpsText = this.add.text(10,10, "00").setColor('white').setFontStyle("bold")

       const backBtn = new BackBtn(this, this.game.canvas.width - 60, this.game.canvas.height - 60).setScale(.30)


       for( let i = 1 ; i <= 20 ; i++){
        this.imageKeyArr.push(`icon-${i}`)
    }

       const richText1 = new RichText(this, 100, 100)

       richText1.setRotation(-.1).setAlpha(0).setScale(1,0)

       const richTextTween= this.add.tween({
           targets: richText1,
           rotation: .1,
           scaleY: 1.2,
           scaleX: .9,
           alpha: 1,
           duration: 1000,
           ease: 'Circ',
           yoyo: true
       })


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
            richTextTween.restart()
            richText1.center()
        },
        startAt: 0,
        loop: true,
    });

       richText1.center()

  
    }

    update(time:number, dt:number){
        this.fpsText.setText('FPS: ' + (1000/dt).toFixed(2))
    }
}