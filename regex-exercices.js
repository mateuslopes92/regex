/**
 * Match numbers containing floating point. Skip those that don't.
 */
const floatingPointNumsText = `Speed of light in vacuum 299792458 m/s
Standard atmosphere 101325 Pa
Earth to sun distance 149600000 km
Acceleration of gravity 9.80665 m/s^2
Circumference to diameter ratio 3.141592
Gas constant 8.3144621 J/mol*K`;

const myFloatingRegex = /\d\.\d\d+/g;
const floatingPointNums = floatingPointNumsText.match(myFloatingRegex);
console.log(floatingPointNums);
// the \d gets the digit before the dot, the \. get the dot and the \d\d+ get all numbers afetr the dot


/**
 * Match titles of all films produced before 1990.
 */
const filmsText = `1 The Shawshank Redemption (1994)
2 The Godfather (1972)
3 The Godfather: Part II (1974)
4 Pulp Fiction (1994)
5 The Good, the Bad and the Ugly (1966)
6 The Dark Knight (2008)
7 12 Angry Men (1957)
8 Schindler's List (1993)
9 The Lord of the Rings: The Return of the King (2003)
10 Fight Club (1999)`;

const filmsRegex = /.*\(19[1-8]\d\)/g;
const filmsTextFind = filmsText.match(filmsRegex);
console.log(filmsTextFind);
// the .*\ get all before the next match, the 19 get the number 19 and [1-8] get numbers between 1 and 8


/**
 * Match 24-bit hexadecimal colors. Skip 12 bit colors.
 */
const hexCodesText = `24 bit:
AliceBlue #F0F8FF
AntiqueWhite #FAEBD7
Aqua #00FFFF
Aquamarine #7FFFD4
Azure #F0FFFF
12 bit:
White #FFF
Red #F00
Green #0F0
Blue #00F`;

const hexRegex = /#[\w]{6}/g;
const hex24BitCodes = hexCodesText.match(hexRegex);
console.log(hex24BitCodes)
// # take the start of the hex code [\w] get the number with latin digit and {6} is the length of the last match


/**
 * In this excercise you need to match 12 and 24 bit colors whose red, green and blue components are equal. Colors start with a '#'.
 */
const grayScaleColorsText = `24 bit:
Alice Blue #F0F8FF
Black #000000
Antique White #FAEBD7
Dark Grey #a9a9a9
Aqua #00FFFF
Azure #F0FFFF
Battleship grey #848484
12 bit:
White #FFF
Red #F00
Green #0F0
Black #000`

const grayScaleRegex = /#([0-9a-fA-F]{1,2})\1\1/g;
const grayScaleFinds = grayScaleColorsText.match(grayScaleRegex);
console.log(grayScaleFinds)
// the # get the start of the hex color, [0-9a-fA-F]{1,2})\1\1 get the repeted patterns


/**
 * Match lines that are more than 30 characters long.
 */

const tooBigText = `This line is way too loooooooooooong.
This one is fine.
This one is fine too.
This line is also too long................`;

const tooBigRegex = /^.{30}.+$/g;
const tooBigFound = tooBigText.match(tooBigRegex);
console.log(tooBigFound);
// ^ take the start of the string .{30} say the limit is 30 of length and .+$ verify if is bigger than 30


/**
 * Some words in this text are accidentally repeated. Remove the doubles.
 */

const doubleWordsText = `I had just just consummated an unusually hearty dinner, of which the dyspeptic truffe formed not the least important item, and was sitting alone in the dining-room dining-room, and at my elbow a small table which I had rolled up to the fire, and upon which were some apologies for dessert, with some miscellaneous bottles bottles of wine, spirit and liqueur. In the morning I had had been reading Glover's "Leonidas", Wilkie's Wilkie's "Epigoniad"`;

const doubleWordsRegex = /\b(.+)\b\s+\1\b/g;
const doubleWordsReplaced = doubleWordsText.replace(doubleWordsRegex, "$1");
console.log(doubleWordsReplaced);
// \b take the words boundaries and \1 match the word that has already been matched


/**
 * It is a common wisdom that regular expressions are not a good way of dealing with HTML, and there are perfectly good reasons for this.
 * But in this excercise you only need to match simple HTML tags.
 */
const htmlTagText = `<!DOCTYPE html>
<html>
<head>
<title>This is a title</title>
</head>
<body>
<p>Hello world!</p>
</body>
</html>`;

const htmlTagRegex = /<[^<>]+>/g;
const htmlTagsFound = htmlTagText.match(htmlTagRegex);
console.log(htmlTagsFound);
// An HTML tag is a pair of angular brackets <> with some symbols between them, except other brackets


/**
 *
 */