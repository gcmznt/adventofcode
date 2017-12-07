const mod = require("./day4");

test("part1", () => {
  expect(
    mod.part1(`aa bb cc dd ee
aa bb cc dd aa
aa bb cc dd aaa`)
  ).toBe(2);
});

test("part2", () => {
  expect(
    mod.part2(`abcde fghij
abcde xyz ecdab
a ab abc abd abf abj
iiii oiii ooii oooi oooo
oiii ioii iioi iiio`)
  ).toBe(3);
});
