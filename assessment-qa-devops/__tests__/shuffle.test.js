const shuffle = require("../src/shuffle");
const { Builder, Browser, By, until, Key } = require("selenium-webdriver");

describe("shuffle should...", () => {

  test(`Shuffle should return an array.`, () => {

    // We can instantly test if shuffle returns an array since we have it imported.
    expect(Array.isArray(shuffle([1,2,3,4,5]))).toBe(true);
  });

  test(`Shuffle should return an array with 5 indexes.`, () => {
    // We can instantly test if shuffle returns an array since we have it imported.
    expect(shuffle([1,2,3,4,5]).length).toBe(5);
  });
});
/*
check that shuffle returns an array

check that it returns an array of the same length as the argument sent in
*/