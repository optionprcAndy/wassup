/**
 * @jest-environment jsdom
 */

import gameConfig from '../Config/config';

describe('It tests configuration files for Phaser scripts', () => {
  it('returns screen width', () => {
    expect(gameConfig.width).toBe(1920);
  });

  it('returns screen height', () => {
    expect(gameConfig.height).toBe(1080);
  });

  it('gives player gravity', () => {
    expect(gameConfig.physics.arcade.gravity.y).toEqual(600);
  });
});