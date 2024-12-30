function prepareInput(input) {
  return input
    .trim()
    .split("\n")
    .reduce(([l1 = [], l2 = []], el) => {
      const [i1, i2] = el.replace(/\s+/, "|").split("|");
      return [
        [Number(i1), ...l1].sort((a, b) => a - b),
        [Number(i2), ...l2].sort((a, b) => a - b),
      ];
    }, []);
}

function part1(input) {
  return input[0].reduce((sum, el, i) => sum + Math.abs(el - input[1][i]), 0);
}

function part2(input) {
  return input[0].reduce(
    (sum, el, i) => sum + el * input[1].filter((i) => i === el).length,
    0
  );
}

module.exports = (input) => ({
  part1: () => part1(prepareInput(input)),
  part2: () => part2(prepareInput(input)),
});
