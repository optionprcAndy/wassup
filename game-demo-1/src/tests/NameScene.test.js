/**
 * @jest-environment jsdom
 */
import NameScene from '../Scenes/NameScene';

require('jest-canvas-mock');

jest.mock('../Scenes/NameScene');

beforeEach(() => {
  NameScene.mockClear();
});

test('Boot Scene Test', () => {
  expect(new NameScene()).toBeInstanceOf(NameScene);
});
