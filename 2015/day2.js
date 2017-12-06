var sum = (a, b) => a + b;

var smallSide = pack =>
    Math.min(pack[0] * pack[1], pack[1] * pack[2], pack[2] * pack[0]);

var surface = pack =>
    2 * (pack[0] * pack[1] + pack[1] * pack[2] + pack[2] * pack[0]);

var paper = pack =>
    surface(pack) + smallSide(pack);


var wrap = pack =>
    2 * Math.min(pack[0] + pack[1], pack[0] + pack[2], pack[1] + pack[2]);

var bow = pack =>
    pack[0] * pack[1] * pack[2];

var ribbon = pack =>
    wrap(pack) + bow(pack);


var forPacks = (packList, fn) => 
    packList.map(fn).reduce(sum, 0);



var input = require('fs')
    .readFileSync('./input2.txt', 'utf8')
    .trim()
    .split('\n')
    .map(function(e){
        return e.split('x').map(e => parseInt(e, 10));
    });

console.log('Paper:', forPacks(input, paper));
console.log('Ribbon:', forPacks(input, ribbon));
