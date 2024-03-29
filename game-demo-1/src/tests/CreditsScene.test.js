/**
 * @jest-environment jsdom
 */
import CreditsScene from '../Scenes/CreditsScene';

require('jest-canvas-mock');

jest.mock('../Scenes/CreditsScene');

beforeEach(() => {
  CreditsScene.mockClear();
});

test('Boot Scene Test', () => {
  expect(new CreditsScene()).toBeInstanceOf(CreditsScene);
});
