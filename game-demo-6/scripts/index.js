import { GameScene } from './gameScene.js'
import { LoadScene } from './loadScene.js';

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#000',
    pixelArt: false,
    width: 1225,
    height: 640,
    physics: {
        default: 'arcade',
		arcade: {
			gravity: { y: 0 },
            debug: false
		}
    },
    scale: {
        mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: [LoadScene, GameScene]
};

const game = new Phaser.Game(config);
