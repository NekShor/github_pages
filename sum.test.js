const sum = require('./docs/index');

test('adds 1 + 2 to equal 3', () => {
    expect(sum([1, 2])).toBe(3);
});


test('not use array to be error', () => {
    expect(() => {
        sum(1)
    }).toThrow('Le paramètre doit être un tableau');
});