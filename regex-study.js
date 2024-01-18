/**
 * finding text with regex
 */
const text = `This 1 is some b2 text 2 to test 100 the regular expression A1 20`;

const findWordRegex = text.match(/is some/g);

console.log("findWordRegex = ", findWordRegex[0]);

/**
 * using \w to find latin letter or digit
 * and \d for any decimal digit
 * using \d\d will match number with to digits
 * using \d\d+ will match numbers with more digits
 * and \d\d* match numbers with any length
 */
const findLatinOrDigit = text.match(/\w/g);
const findDecimalDigit = text.match(/\d/g);
const findDecimal2Digit = text.match(/\d\d/g);
const findDecimalBig = text.match(/\d\d+/g);
const findMixedNumberAndText = text.match(/\w\d/g);

console.log("findLatinOrDigit = ", findLatinOrDigit);
console.log("findDecimalDigit = ", findDecimalDigit);
console.log("findDecimal2Digit = ", findDecimal2Digit);
console.log("findDecimalBig = ", findDecimalBig);
console.log("findMixedNumberAndText = ", findMixedNumberAndText);

/**
 * using \w to find latin letter or digit
 * and \d for any decimal digit
 */