/**
 * @jest-environment jsdom
 */
import GameScene from '../Scenes/GameScene';

require('jest-canvas-mock');

jest.mock('../Scenes/GameScene');

beforeEach(() => {
  GameScene.mockClear();
});

test('Game Scene Test', () => {
  expect(new GameScene()).toBeInstanceOf(GameScene);
});
