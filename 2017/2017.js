const day = 1;

const mod = require(`./day${day}`);
const input = require("fs").readFileSync(`./day${day}.input.txt`, "utf8");

console.log(`Day ${day} - part 1: `, mod.part1(input));
console.log(`Day ${day} - part 2: `, mod.part2(input));
