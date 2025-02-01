import { StringUtils } from "./StringUtils";

describe("StringUtils", () => {
  describe("toFirstUpper", () => {
    it("should capitalize the first letter of a lowercase string", () => {
      expect(StringUtils.toFirstUpper("hello")).toBe("Hello");
    });

    it("should not modify an already capitalized string", () => {
      expect(StringUtils.toFirstUpper("Hello")).toBe("Hello");
    });

    it("should handle single-character strings correctly", () => {
      expect(StringUtils.toFirstUpper("h")).toBe("H");
    });

    it("should return an empty string when given an empty string", () => {
      expect(StringUtils.toFirstUpper("")).toBe("");
    });

    it("should not modify non-alphabetic first characters", () => {
      expect(StringUtils.toFirstUpper("123abc")).toBe("123abc");
      expect(StringUtils.toFirstUpper("!hello")).toBe("!hello");
    });
  });
});
