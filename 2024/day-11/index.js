function prepareInput(input) {
  return input
    .trim()
    .split(" ")
    .map(Number);
}

function blink(el) {
  const elString = String(el);
  const length = elString.length;
  if (el === 0) return [1];
  if (length % 2) return [el * 2024];

  return [elString.slice(0, length / 2), elString.slice(length / 2)].map(
    Number
  );
}

const cache = {};

function parseReduce(times, list) {
  if (times === 0) return list.length;

  return list.reduce((acc, curr) => {
    const key = `${times}|${curr}`;

    if (!cache[key]) cache[key] = parseReduce(times - 1, blink(curr));

    return acc + cache[key];
  }, 0);
}

module.exports = (input) => ({
  part1: () => parseReduce(25, prepareInput(input)),
  part2: () => parseReduce(75, prepareInput(input)),
});
