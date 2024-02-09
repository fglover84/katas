import { nextVersion } from "../../../src/2023/03-mar/room1";

describe("Tests", () => {

  it("1.2.3 -> 1.2.4", () => {
    expect(nextVersion("1.2.3")).toEqual("1.2.4");
  });  
  
  it("0.9.9 -> 1.0.0", () => {
    expect(nextVersion("0.9.9")).toEqual("1.0.0");
  });  
  
  it("1 -> 2", () => {
    expect(nextVersion("1")).toEqual("2");
  });  
  
  it("1.2.3.4.5.6.7.8 -> 1.2.3.4.5.6.7.9", () => {
    expect(nextVersion("1.2.3.4.5.6.7.8")).toEqual("1.2.3.4.5.6.7.9");
  });  
  
  it("9.9 -> 10.0", () => {
    expect(nextVersion("9.9")).toEqual("10.0");
  });
});