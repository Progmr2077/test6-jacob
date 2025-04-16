// __tests__/myModule.test.js
import { stdID, myCalc } from "../lib/myModule";

describe("Testing stdID and myCalc", () => {
  test("stdID should be defined and correct", () => {
    expect(stdID).toBeDefined();
    expect(stdID).toBe("109641233");
  });

  test("myCalc should return correct sum", () => {
    expect(myCalc(2, 3)).toBe(5);
    expect(myCalc(-1, 1)).toBe(0);
    expect(myCalc(0, 0)).toBe(0);
  });

  test("myCalc edge cases", () => {
    expect(myCalc("2", 3)).toBe("23"); // JS default behavior: string + number = string
    expect(myCalc(null, 3)).toBe(3);   // null is coerced to 0 in JS
  });
});