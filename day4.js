var startingWith = function(secret, start, encodingFn) {
    var i = 0;
    while (encodingFn(secret + i++).substr(0, start.length) !== start) {}
    return --i;
}

var secret = 'bgvyzdsv';

console.log('00000:', startingWith(secret, '00000', require('js-md5')));
console.log('000000:', startingWith(secret, '000000', require('js-md5')));
