const prepareInput = input => input
  .trim()
  .split('\n')

var createDistancesMatrix = function (input) {
  var m = {}
  for (var i = 0; i < input.length; i++) {
    var dist = input[i].split(' = ')
    var places = dist[0].split(' to ')
    m[places[0]] = m[places[0]] || {}
    m[places[0]][places[1]] = parseInt(dist[1], 10)
    m[places[1]] = m[places[1]] || {}
    m[places[1]][places[0]] = parseInt(dist[1], 10)
  }
  return m
}

var distance = function (fn, places, prev) {
  if (places.length === 1 && !prev) return 0
  if (places.length === 1) return distances[prev][places[0]]
  var d = []
  for (var i = 0; i < places.length; i++) {
    const ps = places.slice(0)
    const current = ps.splice(i, 1)
    d.push((distances[current][prev] || 0) + distance(fn, ps, current))
  }
  return fn(...d)
}

var maxDistance = distance.bind(null, Math.max)
var minDistance = distance.bind(null, Math.min)

// var places = ['Straylight', 'AlphaCentauri']; // 107
// var places = ['Arbre', 'AlphaCentauri', 'Straylight']; // 60
// var places = ['Arbre', 'AlphaCentauri', 'Straylight', 'Snowdin']; // 144
// var places = ['Snowdin', 'Straylight', 'AlphaCentauri', 'Arbre']; // 144

var distances

module.exports = input => {
  distances = createDistancesMatrix(prepareInput(input))
  var places = Object.keys(distances)

  return {
    part1: () => minDistance(places),
    part2: () => maxDistance(places)
  }
}
