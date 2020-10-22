const { queryString, parse } = require('./queryString.js');
describe('Object to query string', () => {
    it('should create a valid query string when an object is presented', () => {
        const obj = {
            name: 'Carol',
            language: 'Javascript',
        };

        expect(queryString(obj)).toBe('name=Carol&language=Javascript');
    });

    it('should create a valid query string when an array is presented', () => {
        const obj = {
            name: 'Carol',
            language: ['Javascript', 'Cobol'],
        };

        expect(queryString(obj)).toBe('name=Carol&language=Javascript,Cobol');
    });

    it('should broken when the parameters passed are objects', () => {
        const obj = {
            name: 'Carol',
            language: {
                first: 'Javascript',
                second: 'PHP',
            },
        };
        expect(() => {
            queryString(obj)
        }).toThrowError();
    });
});

describe('Convert a query string to object', () => {
    it('should convert a simple query string to an object', () => {
        const qs = 'name=Carol&language=Javascript'

        expect(parse(qs)).toEqual({
            name: "Carol",
            language: "Javascript"
        })
    });
})