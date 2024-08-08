import { test, expect } from "vitest";
import { findGrade } from "./main.js";




test("return A for an average of 80 or above", () => {
    const expected = 'A';
    const actual = findGrade(82, 75, 91);
    expect(actual).toBe(expected);
  });
  
test("return B for an average of 65 or above but less than 80", () => {
    const expected = 'B';
    const actual = findGrade(72, 79, 69);
    expect(actual).toBe(expected);
  });

  test("return C for an average of 50 or above but less than 65", () => {
    const expected = 'C';
    const actual = findGrade(52, 71, 41);
    expect(actual).toBe(expected);
  });
  
  test("return D for an average of 35 or above but less than 50", () => {
    const expected = 'D';
    const actual = findGrade(22, 50, 35);
    expect(actual).toBe(expected);
  });

  test("return E for an average below 35", () => {
    const expected = 'E';
    const actual = findGrade(22, 7, 10);
    expect(actual).toBe(expected);
  });

 