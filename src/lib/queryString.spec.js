const {queryString} = require('./queryString.js')
describe('Object to query string', ()=> {
    it('should create a valid query string when an object is presented', () => {
        const obj = {
            name: 'Carol',
            language: 'Javascript'
        }

        expect(queryString(obj)).toBe(
            'name=Carol&language=Javascript'
        )
    });
})