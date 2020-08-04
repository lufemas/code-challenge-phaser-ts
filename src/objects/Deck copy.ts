export class Deck extends Phaser.GameObjects.Group {
  x : number;
  y : number;
  constructor(scene: Phaser.Scene, x: number, y:number, ) {
    super(scene);
    this.x = x
    this.y = y
    // scene.add.existing(this)
    // this.restart();


    // this.
  }

  // child: Phaser.GameObjects.GameObject, addToScene?: boolean | undefined
  addCard(card: Phaser.GameObjects.Sprite): Phaser.GameObjects.Group{
    super.add(card)

    card.setPosition( this.x, this.y + this.getChildren().length*2)


    return this
  }

  add(child: Phaser.GameObjects.GameObject, addToScene?: boolean | undefined): Phaser.GameObjects.Group{
    super.add(child)

    // child.setDepth()
    this.updateDepth()
    return this
  }

  changeToDeck( newDeck : Deck){

    const childrenArr = this.getChildren()
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
            duration: 2000,
            ease: "Power2",
            onActive: () => {
              this.remove(card)
              newDeck.add(card)
            },
            
          });

        }

   

  }

  updateDepth(){
    const card: Phaser.GameObjects.Sprite = this.getLast(true)

    console.log(card)
    console.log(this.getChildren())

    card.setDepth(this.getLength())
  }

 

}

