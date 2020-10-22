import { sum } from './calculator.js';

it('should some 2 and 2 and the result must be 4 ', () => {
    expect(sum(2, 2)).toBe(4)
});

it('should some 2 and 2 even when one of them is a string', () => {
    expect(sum('2', 2)).toBe(4)
});

it('should throw an error when anything different from an number is inputed', () => {
    expect(() => {
        sum('', 3)
    }).toThrowError()

    expect(() => {
        sum([2, 4])
    }).toThrowError()

    expect(() => {
        sum({})
    }).toThrowError()
});