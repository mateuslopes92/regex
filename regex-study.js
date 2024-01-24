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
 * Match symbols set
 */
const textSetSymbols = `If you wish to match any of some given set of characters, put them in square braces []. Thus, [abc] will match a, b or c. To specify an interval rather than a set, put - between the characters. So [a-c] will work similarly to [abc]. Finally, to match any character except a,b or c, use [^abc].`;

const findSymbols = textSetSymbols.match(/[abc]/g); // find all letters a b and c
const findExceptSymbols = textSetSymbols.match(/[^abcefg]/g); // find all characters except abc letters

console.log("findSymbols", findSymbols);
console.log("findExceptSymbols", findExceptSymbols);

/**
 * Match special symbols
 */
const specialSymbolsText = `If you would like to match symbols that bear special meaning for regex, you need to escape them like this: \., \[, \+, etc.`;

const specialSymbolFound =  specialSymbolsText.match(/\+/g);

console.log("specialSymbolFound", specialSymbolFound);

/**
 * Match or (using pipe a|b can match a or b)
 */
const matchOrText = `a|b will match a or b. This is similar to the square braces, however you can apply | to more than single symbols. Try [a-f]|\d, it will match any letter from a to f or digit.`;

const myMatchOr = matchOrText.match(/[a-f]|\d/g);

console.log("myMatchOr", myMatchOr);


/**
 * Any symbol and optional symbol
 */
const anySymbolAndOptional = `Try the expression in the description to se how it matches both 'he' and 'she'.`;

const heShe = anySymbolAndOptional.match(/s?he/g); // will match she or he
const entireLine = anySymbolAndOptional.match(/.*./g); // will match entire line

console.log("heShe", heShe);
console.log("entireLine", entireLine);

/**
 *
 */