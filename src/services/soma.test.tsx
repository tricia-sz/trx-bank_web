import { soma } from "./soma";

describe("soma", () => {
  it("deve somar dois números", () => {
    expect(soma(2, 3)).toBe(5);
  });
});