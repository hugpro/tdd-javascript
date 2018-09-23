const add = require("./add");

describe("Add function", () => {
  it("Should return 0 when given an empty string", () => {
    expect(add("")).toBe(0);
  });
});