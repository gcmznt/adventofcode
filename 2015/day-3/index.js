function getMapWithHelper (movements, helper) {
  var map = ['0,0']
  var pos = [{ x: 0, y: 0 }]
  helper = helper || 0
  for (let i = 0; i < helper; i++) {
    pos.push({ x: 0, y: 0 })
  }
  for (let i = 0; i < movements.length; i++) {
    var who = i % (1 + helper);
    (movements[i] === '^') && pos[who].y++;
    (movements[i] === 'v') && pos[who].y--;
    (movements[i] === '>') && pos[who].x++;
    (movements[i] === '<') && pos[who].x--
    map.push(pos[who].x + ',' + pos[who].y)
  }
  return map
}

function getHouses (map) {
  var counter = {}
  var houses = 0
  for (var i = 0; i < map.length; i++) {
    if (counter[map[i]]) {
      counter[map[i]]++
    } else {
      counter[map[i]] = 1
      houses++
    }
  }
  return houses
}

module.exports = input => ({
  part1: () => getHouses(getMapWithHelper(input)),
  part2: () => getHouses(getMapWithHelper(input, 1))
})
