const Helpers = require('api/src/utils/helpers.js');
describe('titles_testing', () => {
    test('string_waardig', () => {
        expect (Helpers.lengte_titel()).toBeFalsy();
        expect (Helpers.checkTitleLength([])).toBeFalsy();
    }
        
})