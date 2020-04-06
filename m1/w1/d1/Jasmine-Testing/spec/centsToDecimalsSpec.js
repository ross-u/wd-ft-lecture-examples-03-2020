/* 
FOR TEST EXAMPLES AND DIFFERENT MATCHERS (`toEqual`, `toBe`, `not.toBe`, etc):
 https://jasmine.github.io/2.0/introduction
*/

describe("centsToDecimals function", function () {
  // Describes the suite / group of tests

  // Use this test suite as a starting point/reference.
  it("Returns undefined when parameter passed is a string", function () {
    expect(centsToDecimals("abcdef")).toEqual(undefined);
  });

  // Fix the below test suites:

  it("Returns undefined when parameter passed is a string containing number characters", function () {
    // ... complete the below test assertion
    expect(centsToDecimals("12345")).toEqual(undefined);
  });

  it("Returns undefined when NaN value is passed as a parameter", function () {
    expect(centsToDecimals(NaN)).toEqual(undefined);
  });

  it("Returns undefined when undefined value is passed as a parameter", function () {
    // ... complete the below test assertion
    expect(centsToDecimals(undefined)).toEqual(undefined);
  });

  it("Returns undefined when parameter is not passed.", function () {
    // ... complete the below test assertion
    expect(centsToDecimals()).toEqual(undefined);
  });

  it("Should convert a number of cents to a string represenation of a floating point number.", function () {
    // Get the initial return after invoking the function
    const returnValue = centsToDecimals(1002); // "10.02$"

    // Slice the string to remove the $ sign
    const stringWithout$ = returnValue.slice(0, 5); // "10.02"

    // Check if the string without $ equals the expected result
    expect(stringWithout$).toEqual("10.02");
  });

  console.log(centsToDecimals(1002).slice(0, 5) === "10.02");

  it("Should convert a number of cents and return a string represenation of a floating point number.", function () {
    // Get the initial return after invoking the function
    const returnValue = centsToDecimals(0); // "0.00$"

    // Slice the string to remove the $ sign
    const stringWithout$ = returnValue.slice(0, 4); // "0.00"

    // Check if the string without $ equals the expected result
    expect(stringWithout$).toEqual("0.00");
  });

  it("Should return a string representation of a number with `$` sign appended at the end.", function () {
    // ... complete the below test assertion
    expect(centsToDecimals(1002)).toEqual("10.02$");
  });
});
