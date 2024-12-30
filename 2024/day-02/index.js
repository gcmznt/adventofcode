function prepareInput(input) {
  return input
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));
}

function isValid(ascending, v1, v2) {
  const val = v2 - v1;
  if (typeof v1 !== "number" || typeof v2 !== "number") return true;
  return ascending ? val <= 3 && val > 0 : val >= -3 && val < 0;
}

function part1(input) {
  return input
    .map((row) => {
      const asc = row[1] > row[0];
      return !row.some((el, i, l) => i !== 0 && !isValid(asc, l[i - 1], el));
    })
    .reduce((total, el) => total + el, 0);
}

function part2(input) {
  return input
    .map((row) => {
      const ascending = row[1] > row[0];
      let skipped = 0;
      return !row.some((el, i, l) => {
        // const isNextValid
        if (typeof l[i + 1] !== "number") return false;

        const val = l[i + 1] - el;
        const invalid = ascending ? val > 3 || val <= 0 : val < -3 || val >= 0;

        if (!invalid) {
          return false;
        }

        if (typeof l[i - 1] !== "number") {
          return ++skipped > 1;
        }

        const val2 = l[i + 1] - l[i - 1];
        const invalid2 = ascending
          ? val2 > 3 || val2 <= 0
          : val2 < -3 || val2 >= 0;

        if (invalid2) {
          return true;
        }
      });
    })
    .reduce((total, el) => total + el, 0);
}

module.exports = (input) => ({
  part1: () => part1(prepareInput(input)),
  part2: () => part2(prepareInput(input)),
});
