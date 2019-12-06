const day = process.env.DAY
const year = process.env.YEAR

const input = require('fs').readFileSync(`./${year}/day-${day}/input.txt`, 'utf8')
const exercise = require(`./${year}/day-${day}/index.js`)

console.log(`Day ${day} ${year}`)
console.time('Setup')
const run = exercise(input)
console.timeEnd('Setup')

console.time('Part 1')
const p1 = run.part1()
console.timeLog('Part 1', p1)

console.time('Part 2')
const p2 = run.part2()
console.timeLog('Part 2', p2)
