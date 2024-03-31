import { getCenterX, getCenterY } from "./utils.js";

export class LoadScene extends Phaser.Scene
{

	constructor()
	{
		super('LoadScene')
    }

    preload(){
       
        //images
        this.load.image("game_bg", "assets/images/game_bg.png");
        this.load.image("player", "assets/images/player.png");
        this.load.image("bitcoin-icon", "assets/images/bitcoin-icon.png");
        this.load.image("hand", "assets/images/hand.png");
        this.load.image("bomb", "assets/images/bomb.png");

        this.load.spritesheet("explosion", "./assets/images/explosion.png", {frameWidth: 478, frameHeight: 382});

        
        
        // sounds
        this.load.audio("catch_item", "assets/sounds/catch_item.mp3");
        this.load.audio("explose", "assets/sounds/explose.ogg");


        

        

        this.add.text(getCenterX(this), getCenterY(this), `Loading...`, {
            fontSize: "30px",
        }).setOrigin(0.5);
    }



    create(){
        this.scene.start("GameScene");
    }

}