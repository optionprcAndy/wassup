import { getCenterX, getCenterY, getHeight, getWidth } from "./utils.js";

export class GameScene extends Phaser.Scene {

    constructor() {
        super('GameScene');
    }

    init() {
    

    }


    create() {

        this.isGameOver = false;
        this.coinGroup = this.add.group();

        this.add.image(getCenterX(this), getCenterY(this), "game_bg").setScale(0.5);

        this.player = this.physics.add.image(getCenterX(this), getHeight(this) - 120, "player").setScale(0.5).setInteractive({cursor: "pointer"});
        this.player.body.setSize(this.player.width * 0.5, this.player.height * 0.2)

        this.score = 0;
        this.scoreText = this.add.text(10, 30, "Score:0", {
            fontSize: "50px",
            color: "black"
        }).setOrigin(0, 0.5);


        let hand = this.add.image(getCenterX(this) + 50, getHeight(this) - 70, "hand").setScale(0.2);

        this.tweens.add({
            targets: hand,
            duration: 500,
            x: hand.x - 200,
            repeat: 5,
            yoyo: true,
            onComplete: ()=>{
                hand.visible =false;
            }
        })

        let dragStart = false;

        this.input.on("gameobjectdown", ()=>{
            dragStart = true;
            hand.visible = false;
        })

        this.input.on("pointerup", ()=>{
            dragStart = false;
        })

        this.input.on("pointermove", (e, g)=>{
            if(!this.isGameOver){
                if(dragStart){
                    this.player.x = e.x;
                }
            }

        })

        this.time.addEvent({
            delay: 1000,
            callback: ()=>{
                if(!this.isGameOver){

                    let randItem = Phaser.Math.Between(0, 1);
                    if(randItem ==  1){
                        let coin = this.physics.add.image(Phaser.Math.Between(50, getWidth(this) - 50), -50, "bomb").setScale(1);
                        coin.setGravityY(100);
                        coin.setCircle(coin.width * 0.4);
                        this.coinGroup.add(coin);
                    }else{
                        let coin = this.physics.add.image(Phaser.Math.Between(50, getWidth(this) - 50), -50, "bitcoin-icon").setScale(0.2);
                        coin.setGravityY(100);
                        coin.setCircle(coin.width * 0.4);
                        this.coinGroup.add(coin);
                        coin.name = "coin";
                    }


                }
            },
            repeat: -1
        })

        this.anims.create({
            key: "explosion",
            frameRate: 15,
            frames: this.anims.generateFrameNumbers("explosion", {start: 0, end: 8}),
            hideOnComplete: true
        })

        this.physics.add.overlap(this.player, this.coinGroup, (player, coin)=>{
            coin.destroy();
            if(coin.name == "coin"){
                this.score += 1;
                this.scoreText.text = `Score:${this.score}`;
                this.sound.play("catch_item");
            }else{
                this.isGameOver = true;
                let effect = this.add.sprite(this.player.x, this.player.y, "explosion").setDepth(2);
                effect.play("explosion");
                this.sound.play("explose");
                this.player.destroy();
                this.addGameOver();
            }

        })



    }

    addGameOver(){
        this.add.text(getCenterX(this), getCenterY(this), "Game Over", {
            fontSize: "80px",
            color: "red"
        }).setOrigin(0.5);
    }

}