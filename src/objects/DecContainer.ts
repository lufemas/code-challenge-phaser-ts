export class Deck extends Phaser.GameObjects.Container {
  x : number;
  y : number;
  constructor(scene: Phaser.Scene, x: number, y:number, ) {
    super(scene, 0,0);
    this.x = x
    this.y = y
    scene.add.existing(this)
    // this.restart();


    // this.
  }

  // child: Phaser.GameObjects.GameObject, addToScene?: boolean | undefined
  addCard(card: Phaser.GameObjects.Sprite): Phaser.GameObjects.Container{
    super.add(card)

    // card.setPosition( this.x, this.y + this.getAll().length*2)
    // this.bringToTop(card)


    return this
  }

  add(child: Phaser.GameObjects.GameObject, addToScene?: boolean | undefined): Phaser.GameObjects.Container{
    super.add(child)

    this.bringToTop(child)
    // child.setDepth()

    return this
  }

  changeToDeck( newDeck : Deck){

    const childrenArr = this.getAll()
    console.log(childrenArr)
    // reverseChildren.forEach( (card, ind)=>
    console.log(childrenArr.length)


    for(let ind = childrenArr.length - 1; ind >= 0 ; ind--){
      const card = childrenArr[ind]
       this.scene.tweens.add({
            targets: card,
            y: newDeck.y + (childrenArr.length - ind)*2,
            x: newDeck.x,
            delay: (childrenArr.length - ind)*1000,
            duration: 1000,
            ease: "Power2",
            onComplete: () => {
              newDeck.add(card)
            }
          });

        }

   

    }

  
 

}

