/**
 * @jest-environment jsdom
 */
import EndScene from '../Scenes/EndScene';

require('jest-canvas-mock');

jest.mock('../Scenes/EndScene');

beforeEach(() => {
  EndScene.mockClear();
});

test('Boot Scene Test', () => {
  expect(new EndScene()).toBeInstanceOf(EndScene);
});
