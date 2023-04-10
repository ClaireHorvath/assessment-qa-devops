const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  // CODE HERE
  test("Check that it returns an array of the same length as the argument sent in", () => {
    let arrayLength = array.length
    expect(shuffle(array).length).toBe(arrayLength)
  })
  test("Check that shuffle returns an array", () => {
    expect(array.isArray(shuffle())).toBe(true)
  })
});
