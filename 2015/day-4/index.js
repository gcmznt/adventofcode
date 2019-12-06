const md5 = require('js-md5')

var startingWith = function (secret, start, encodingFn) {
  var i = 0
  while (encodingFn(secret + i++).substr(0, start.length) !== start) { }
  return --i
}

module.exports = input => ({
  part1: () => startingWith(input, '00000', md5),
  part2: () => startingWith(input, '000000', md5)
})
