



var input = require('fs')
    .readFileSync('./input9.txt', 'utf8')
    .trim()
    .split('\n');


var createMatrix = function(input) {
    var m = {}
    for (var i = 0; i < input.length; i++) {
        var dist = input[i].split(' = ');
        var places = dist[0].split(' to ');
        m[places[0]] = m[places[0]] || {};
        m[places[0]][places[1]] = dist[1];
        m[places[1]] = m[places[1]] || {};
        m[places[1]][places[0]] = dist[1];
    }
    return m;
};

console.log(createMatrix(input));