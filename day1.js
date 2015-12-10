var sum = (a, b) => a + b;

var mapMove = move =>
    (move === '(') ? 1 : -1;

var parseMovements = moves =>
    moves.map(mapMove).reduce(sum, 0);

var goneUnder = function(moves) {
    moves = moves.map(mapMove);
    for (var i = 0, pos = 0; i < moves.length; i++) {
        pos += moves[i];
        if (pos === -1) return ++i;
    }
    return -1;
};



var input = require('fs')
    .readFileSync('./input1.txt', 'utf8')
    .trim()
    .split('');

console.log('Ending:', parseMovements(input));
console.log('Gone under:', goneUnder(input));