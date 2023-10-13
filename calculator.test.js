const {validateNums, mean, median, mode} = require('./calculator')

describe('test calculator', function() {
    test('test validate inputs', function() {
        expect(validateNums('1')).toEqual([1]);
        expect(validateNums('1,2')).toEqual([1, 2]);
    });

    test('test validate bad inputs', function() {
        expect(() => validateNums('')).toThrow('nums is not defined');
        expect(() => validateNums('a')).toThrow('nums can only contain numbers');
    });

    test('test mean', function() {
        expect(mean([1, 2, 3])).toEqual(2);
        expect(mean([0, 0])).toEqual(0);
    });

    test('test median', function() {
        expect(median([1, 2, 3])).toEqual(2);
        expect(median([1, 2, 3, 4])).toEqual(3);
    });

    test('test mode', function() {
        expect(mode([1, 2, 2, 3])).toEqual(2);
        expect(mode([1, 2, 1, 2, 1])).toEqual(1);
    });
});