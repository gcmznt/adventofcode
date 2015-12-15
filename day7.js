var convert = function(t) {
    return t
        .replace('AND', '&')
        .replace('OR', '|')
        .replace('LSHIFT', '<<')
        .replace('RSHIFT', '>>')
        .replace('NOT', '~');
}

var getValueOf = function(g, k) {
    var operators = ['~', '&', '|', '<<', '>>'];
    if (!isNaN(inputList[k])) return Number(inputList[k]);
    var op = inputList[k].split(' ').map(function(el) {
        if (!isNaN(el)) return Number(el);
        return (operators.indexOf(el) !== -1) ? el : g(el);
    }).join(' ');
    return eval(op);
};

var cachify = function(f, cache) {
  var cache = cache || {};
  return function(n) {
    if(!cache[n]) {
      var g = cachify(f, cache);
      cache[n] = f(g, n);
    }
    return cache[n];
  };
};



var inputList = {};
var input = require('fs')
    .readFileSync('./input7.txt', 'utf8')
    .trim()
    .split('\n')
    .map(function(e){
        var op = e.split(' -> ');
        inputList[op[1]] = convert(op[0]);
    });


var firstRun = cachify(getValueOf)('a');
console.log(firstRun);

inputList.b = firstRun;
console.log(cachify(getValueOf)('a'));