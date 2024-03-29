import './style.css';
import Phaser from 'phaser';
import Model from './Model';
import config from './Config/config';
import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import TitleScene from './Scenes/TitleScene';
import GameScene from './Scenes/GameScene';
import LeaderboardScene from './Scenes/LeaderboardScene';
import OptionsScene from './Scenes/OptionsScene';
import CreditsScene from './Scenes/CreditsScene';
import NameScene from './Scenes/NameScene';
import EndScene from './Scenes/EndScene';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    const model = new Model();
    this.globals = { model, bgMusic: null };
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Game', GameScene);
    this.scene.add('Leaderboard', LeaderboardScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Name', NameScene);
    this.scene.add('End', EndScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();