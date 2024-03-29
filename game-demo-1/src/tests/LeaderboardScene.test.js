/**
 * @jest-environment jsdom
 */
import LeaderboardScene from '../Scenes/LeaderboardScene';

require('jest-canvas-mock');

jest.mock('../Scenes/LeaderboardScene');

beforeEach(() => {
  LeaderboardScene.mockClear();
});

test('Leaderboard Scene Test', () => {
  expect(new LeaderboardScene()).toBeInstanceOf(LeaderboardScene);
});
