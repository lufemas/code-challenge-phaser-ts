export class RichText extends Phaser.GameObjects.Container {
 
  /**
  * Gap between objects.
  */
  private gap : number = 16

  /**
  * FontSize, it will have effect on the images sizes too.
  */
  private fontSize: number = 16
  
  /**
  * Custom Container Class to hold the Rich Text.
  * Using a Container is a good choice because
  * it allows to change propeties like position and scale
  * as a unique element.
  */
  constructor(scene: Phaser.Scene, x: number, y:number, ) {
    super(scene, x, y);
    scene.add.existing(this)
    
  }

  
  /**
  * Overwritten function to call to re-organize all children after a new one is added.
  */
  add(child: Phaser.GameObjects.GameObject, addToScene?: boolean | undefined): this{
    super.add(child)

    this.setupChildren()
    return this
  }

  /**
  * Overwritten function to call to re-organize all children after a new one is added.
  */
  addArray(children: Array<Phaser.GameObjects.GameObject>): this{
    
    children.forEach( child => this.add(child))
    
    return this
  }

  
  /**
  * Overwritten function to call to re-organize all children after a new one is added.
  */
  addAt(child: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[], index?: number | undefined): this{
    super.addAt(child, index)
    this.setupChildren()
    return this

  }

  
  /**
  * Align children and set the FontSize
  */
  setupChildren(){
    console.log('------------------------')

    // this variable will hold the next child X position
    let nextPos:number = 0

    this.each((child: any, ind:number)=>{

      // New elements are handled according to their type
      if(child.type === "Text"){
        const text: Phaser.GameObjects.Text = child
        text.setFontSize(this.fontSize)

        // Text width is kind tricky, so the Font Size is used to correct this.
        text.x = nextPos - this.fontSize
        text.y = this.y
        console.log('text width: ' + text.displayWidth)

        // Setting the starting X position for the next child
        nextPos = text.x + text.displayWidth + this.fontSize + this.gap
        this.width = text.x + text.displayWidth

      }else if(child.type === "Sprite"){
        const sprite: Phaser.GameObjects.Sprite = child
        sprite.setScale((this.fontSize*2)/sprite.height) // Rezing the image using the Font Size
        sprite.y=this.y
        sprite.x = nextPos
        console.log('sprite width: ' + sprite.displayWidth)

        // Setting the starting X position for the next child
        nextPos = sprite.x + sprite.displayWidth + this.gap
        this.width = sprite.x + sprite.displayWidth

      }
    })
  }

  /**
  * Center the Container to the Canvas
  */
  center(){
    this.x = this.scene.game.canvas.width/2 - this.width/2
  }

  /**
  * FontSize setter
  */
  setFontSize(size:number):number{
    this.fontSize = size
    this.setupChildren()
    return this.fontSize
  }

  /**
  * FontSize getter
  */
  getFontSize():number{
    return this.fontSize
  }

  /**
  * Gap setter
  */
  setGap(size:number):number{
    this.gap = size
    this.setupChildren()
    return this.gap
  }

/**
  * Gap getter
  */
  getGap():number{
    return this.gap
  }
 
 

}

