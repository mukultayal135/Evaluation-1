const { getScore } = require('./gameScore.js');

describe('Array Utilities', () => {
    it('should give the total score of the game', () => {
        expect(getScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90);
    });
});