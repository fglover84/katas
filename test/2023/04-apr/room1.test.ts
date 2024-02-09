import { convertRomanNumeral } from "../../../src/2023/04-apr/room1";

describe("Test converter", () => {
  it("Should equal 1", () => {
    expect(convertRomanNumeral("I")).toEqual(1);
  });
  it("Should equal 12", () => {
    expect(convertRomanNumeral("XII")).toEqual(12);
  });

  it("Should equal 1999", () => {
    expect(convertRomanNumeral("MCMXCIX")).toEqual(1999);
  });

  it("Should equal 2010", () => {
    expect(convertRomanNumeral("MMX")).toEqual(2010);
  });

  it("Should equal 1967", () => {
    expect(convertRomanNumeral("MCMLXVII")).toEqual(1967);
  });
});
