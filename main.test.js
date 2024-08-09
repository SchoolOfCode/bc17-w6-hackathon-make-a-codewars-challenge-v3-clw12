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

  test("edge case - all entries are on boundary grade - expect A", () => {
    const expected = 'A';
    const actual = findGrade(80, 80, 80);
    expect(actual).toBe(expected);
  });

  test("edge case - all entries 100 (top of range) - expect A", () => {
    const expected = 'A';
    const actual = findGrade(100, 100, 100);
    expect(actual).toBe(expected);
  });

  test("edge case - all entries 0 (bottom of range) - expect E", () => {
    const expected = 'E';
    const actual = findGrade(0, 0, 0);
    expect(actual).toBe(expected);
  });

  test("scores vary significantly - expect E", () => {
    const expected = 'E';
    const actual = findGrade(100, 0, 0);
    expect(actual).toBe(expected);
  });

  /** Code solution
   * 
   * 
   * function findGrade(firstScore, secondScore, thirdScore)
   *  averageScore = (firstScore + secondScore + thirdScore) / 3;

    // Step 2: Determine the letter grade
    if (averageScore >= 80 && averageScore <= 100) {
        return 'A';
    } else if (averageScore >= 65 && averageScore < 80) {
        return 'B';
    } else if (averageScore >= 50 && averageScore < 65) {
        return 'C';
    } else if (averageScore >= 35 && averageScore < 50) {
        return 'D';
    } else if (averageScore >= 0 && averageScore < 35) {
        return 'E';
    }
}
   **/