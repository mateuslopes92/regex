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