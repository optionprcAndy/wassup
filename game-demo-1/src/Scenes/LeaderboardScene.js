import Phaser from 'phaser';
import config from '../Config/config';
import Button from '../Objects/Button';

const fetch = require('node-fetch');

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/7igtBCocAtE2Il7lPcAc/scores';

let scores;

const getScores = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      scores = data.result;
    })
    .catch((error) => {
      throw new Error('Error:', error);
    });
};

getScores();
let placement = config.height / 2;

export default class leaderBoardScene extends Phaser.Scene {
  constructor() {
    super('Leaderboard');
  }

  create() {
    this.gameButton = new Button(this, config.width / 2, 100, 'blueButton1', 'blueButton2', 'Home', 'Title');

    scores.sort((a, b) => ((a.score > b.score) ? -1 : 1)).slice(0, 10).forEach((score) => {
      this.add.text(config.width / 2 - 100, placement, `${score.user} ${score.score}`, { fontSize: '42px', fill: '#fff' });
      placement += 50;
    });
  }
}