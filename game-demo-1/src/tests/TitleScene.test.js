/**
 * @jest-environment jsdom
 */
import TitleScene from '../Scenes/TitleScene';

require('jest-canvas-mock');

jest.mock('../Scenes/TitleScene');

beforeEach(() => {
  TitleScene.mockClear();
});

test('Title Scene Test', () => {
  expect(new TitleScene()).toBeInstanceOf(TitleScene);
});
