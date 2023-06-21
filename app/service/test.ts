import Util from "./";
import Colors from "./convert";
import Mocks from "./mocks";
import { afterEach, beforeEach, describe, expect, it, jest, test } from "@jest/globals";

afterEach(() => {
  jest.clearAllMocks();
});

beforeEach(() => {
  jest.resetAllMocks();
});

describe("Util", () => {
  describe("parseFloat", () => {
    test("parses int-like string to 64-bit floating number", () => {
      expect(Util.parseFloat("23.38234")).toBe(23.38234);
    });
  });

  describe("parseInt", () => {
    test("parses int-like string with optional radix", () => {
      expect(Util.parseInt("900", 16)).toBe(2304);
    });
    test(" parses int-like string without  radix", () => {
      expect(Util.parseInt("900")).toBe(900);
    });
  });

  describe("parseNum", () => {
    test("rounds  int-like string to nearest whole number", () => {
      expect(Util.parseNum("8.66666666666")).toBe(9);
    });
  });

  describe("setDigit", () => {
    test("specifies significant digits", () => {
      expect(Util.setDigits("5.123456")).toBe(5.123);
    });
    test("specifies significant digits", () => {
      expect(Util.setDigits(5.123456, 6)).toBe(5.12346);
    });
  });

  describe("setDecimalPlace", () => {
    test("rounds decimal values to 6, 5, or 4 spaces", () => {
      expect(
        Util.setDecimalPlace("5.123456", {
          maximumFractionDigits: 6,
          minimumFractionDigits: 4,
          minimumIntegerDigits: 1,
          minimumSignificantDigits: 4,
          maximumSignificantDigits: 6,
        }),
      ).toBe(5.123);
    });
    test("rounds decimal values to between 3 or 2", () => {
      expect(
        Util.setDecimalPlace(5.126379, {
          maximumFractionDigits: 4,
          minimumFractionDigits: 3,
          minimumIntegerDigits: 1,
          minimumSignificantDigits: 3,
          maximumSignificantDigits: 3,
        }),
      ).toBe(5.13);
    });
    test("rounds decimal values up to the default value of ~3", () => {
      expect(Util.setDecimalPlace(5.123456)).toBe(5.123);
    });
  });
});

describe("Convert", () => {
  describe("getColorByType", () => {
    test("hex lowercase", () => {
      expect(Colors.getColorByType("Hexa", "crimson")).toMatch("#dc143c");
    });
  });
});
