export class RichText extends Phaser.GameObjects.Container {
 
  private gap : number = 16
  private fontSize: number = 16
  
  constructor(scene: Phaser.Scene, x: number, y:number, ) {
    super(scene, x, y);
    scene.add.existing(this)
    
  }

  // child: Phaser.GameObjects.GameObject, addToScene?: boolean | undefined
  // add(card: Phaser.GameObjects.Sprite): Phaser.GameObjects.Container{
  //   super.add(card)

  //   card.setPosition( this.x, this.y + this.getChildren().length*2)


  //   return this
  // }

  add(child: Phaser.GameObjects.GameObject, addToScene?: boolean | undefined): Phaser.GameObjects.Container{
    super.add(child)

    this.setupChildren()
    return this
  }

  addArray(children: Array<Phaser.GameObjects.GameObject>): Phaser.GameObjects.Container{
    
    children.forEach( child => this.add(child))
    
    return this
  }

  addAt(child: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[], index?: number | undefined): Phaser.GameObjects.Container{
    super.addAt(child, index)
    this.setupChildren()
    return this

  }

  setupChildren(){
    console.log('------------------------')

    let nextPos:number = 0

    this.each((child: any, ind:number)=>{
      if(child.type === "Text"){
        const text: Phaser.GameObjects.Text = child
        text.setFontSize(this.fontSize)

        text.x = nextPos - + this.fontSize
        text.y = this.y
        console.log('text width: ' + text.displayWidth)
        nextPos = text.x + text.displayWidth + this.fontSize + this.gap
        this.width = text.x + text.displayWidth

      }else if(child.type === "Sprite"){
        const sprite: Phaser.GameObjects.Sprite = child
        sprite.setScale((this.fontSize*2)/sprite.height)
        sprite.y=this.y
        sprite.x = nextPos
        console.log('sprite width: ' + sprite.displayWidth)

        nextPos = sprite.x + sprite.displayWidth + this.gap
        this.width = sprite.x + sprite.displayWidth

      }
    })
  }

  center(){
    this.x = this.scene.game.canvas.width/2 - this.width/2
  }


  setFontSize(size:number):number{
    this.fontSize = size
    this.setupChildren()
    return this.fontSize
  }

  getFontSize():number{
    return this.fontSize
  }

  setGap(size:number):number{
    this.gap = size
    this.setupChildren()
    return this.gap
  }

  getGap():number{
    return this.gap
  }
 
 

}

