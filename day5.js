var filter1 = function(el) {
    var vowels = 'aeiou';
    var invalid = ['ab', 'cd', 'pq', 'xy'];
    var vowelsFound = 0;
    var doubleFound = false;
    var prev = false;

    for (var i = 0; i < el.length; prev = el[i], i++) {
        if (prev && invalid.indexOf(prev + el[i]) !== -1) return false;
        if (prev === el[i]) doubleFound = true;
        if (vowels.indexOf(el[i]) !== -1) vowelsFound++;
    }

    return (vowelsFound >= 3) && doubleFound;
};

var filter2 = function(el) {
    var repetitionFound = false;
    var patternFound = false;
    var prev = '';

    for (var i = 0; i < el.length; prev += el[i], i++) {
        if (el[i] === el[i + 2]) {
            repetitionFound = true;
        }
        if (el[i + 1] && prev.indexOf(el[i] + el[i + 1]) !== -1) {
            patternFound = true;
        }
        if (repetitionFound && patternFound) {
            return true;
        }
    }

    return false;
};



var input = require('fs')
    .readFileSync('./input5.txt', 'utf8')
    .trim()
    .split('\n');

console.log('First filter: ', input.filter(filter1).length);
console.log('Better filter: ', input.filter(filter2).length);
