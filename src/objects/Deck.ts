export class Deck extends Phaser.GameObjects.Group {

  x : number;
  y : number;

  /**
  * A custom Group class created just to group cards and change their depth value.
  * 
  */
  constructor(scene: Phaser.Scene, x: number, y:number, ) {
    super(scene);
    this.x = x
    this.y = y
    
  }

  /**
  * Add cards without any modification, just positioning the cards.
  */
  addRaw(card: Phaser.GameObjects.Sprite): this{
    super.add(card)

    card.setPosition( this.x, this.y + this.getChildren().length*2)


    return this
  }

  /**
  * Overwritten function to call this.updateDepth() after each card added.
  */
  add(child: Phaser.GameObjects.GameObject, addToScene?: boolean | undefined): this{
    super.add(child)
    
    this.updateDepth()
    return this
  }

  /**
  * Change card to another deck with an animation
  */
  changeToDeck( newDeck : Deck){

    const childrenArr = this.getChildren()
    console.log(childrenArr)
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
            onStart: () => {
              this.remove(card)
              newDeck.add(card)
            },
            
          });

        }

   

  }

  /**
  * Last card will have the biggest depth always
  */
  updateDepth(){
    
    const card: any = this.getLast(true)

    console.log(card)

    card.setDepth(this.getLength())
  }

 

}

