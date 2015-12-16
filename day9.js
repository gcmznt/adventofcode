'use strict';

var createDistancesMatrix = function(input) {
    var m = {}
    for (var i = 0; i < input.length; i++) {
        var dist = input[i].split(' = ');
        var places = dist[0].split(' to ');
        m[places[0]] = m[places[0]] || {};
        m[places[0]][places[1]] = parseInt(dist[1], 10);
        m[places[1]] = m[places[1]] || {};
        m[places[1]][places[0]] = parseInt(dist[1], 10);
    }
    return m;
};

var distance = function(places, prev) {
    if (places.length === 1 && !prev) return 0;
    if (places.length === 1) return distances[prev][places[0]];
    var d = [];
    for (var i = 0; i < places.length; i++) {
        let ps = places.slice(0);
        let current = ps.splice(i, 1);
        d.push((distances[current][prev] || 0) + distance(ps, current));
    }
    return Math.min(...d);
};



var input = require('fs')
    .readFileSync('./input9.txt', 'utf8')
    .trim()
    .split('\n');



var distances = createDistancesMatrix(input);
var places = Object.keys(distances);
// var places = ['Straylight', 'AlphaCentauri']; // 107
// var places = ['Arbre', 'AlphaCentauri', 'Straylight']; // 46 + 14, 107
// var places = ['Arbre', 'AlphaCentauri', 'Straylight', 'Snowdin']; // 144
// var places = ['Snowdin', 'Straylight', 'AlphaCentauri', 'Arbre']; // 144

console.log(distance(places));