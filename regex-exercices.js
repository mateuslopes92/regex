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
//console.log(floatingPointNums);
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
//console.log(filmsTextFind);
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
//console.log(hex24BitCodes)
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
//console.log(grayScaleFinds)
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
//console.log(tooBigFound);
// ^ take the start of the string .{30} say the limit is 30 of length and .+$ verify if is bigger than 30


/**
 * Some words in this text are accidentally repeated. Remove the doubles.
 */

const doubleWordsText = `I had just just consummated an unusually hearty dinner, of which the dyspeptic truffe formed not the least important item, and was sitting alone in the dining-room dining-room, and at my elbow a small table which I had rolled up to the fire, and upon which were some apologies for dessert, with some miscellaneous bottles bottles of wine, spirit and liqueur. In the morning I had had been reading Glover's "Leonidas", Wilkie's Wilkie's "Epigoniad"`;

const doubleWordsRegex = /\b(.+)\b\s+\1\b/g;
const doubleWordsReplaced = doubleWordsText.replace(doubleWordsRegex, "$1");
//console.log(doubleWordsReplaced);
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
//console.log(htmlTagsFound);
// An HTML tag is a pair of angular brackets <> with some symbols between them, except other brackets


/**
 * Cut numbers to two digits after floating point
 */
const floatingNumberText = `1 Euro = 1.351299 US Dollar
British Pound = 1.614873 US Dollar
Australian Dollar = 0.916063 US Dollar
Canadian Dollar = 0.947400 US Dollar
Emirati Dirham = 0.272257 US Dollar
Swiss Franc = 1.096267 US Dollar
Chinese Yuan = 0.164114 US Dollar
Malaysian Ringgit = 0.310681 US Dollar
New Zealand Dollar = 0.819950 US Dollar`;

const replaceTwoDigitsRegex = /(\.\d\d)(\d+)/g;
const replacedText = floatingNumberText.replace(replaceTwoDigitsRegex, "$1");
//console.log(replacedText);
//the second group within () will be replaced by the first ()


/**
 * Insert commas in the numbers for greater readability before each group of three digits.
 */
const inputNoCommaNumsText = `Ten Countries with the Highest Population:
1 China 1361220000
2 India 1236800000
3 United States 317121000
4 Indonesia 237641326
5 Brazil 201032714
6 Pakistan 184872000
7 Nigeria 173615000
8 Bangladesh 152518015
9 Russia 143600000
10 Japan 127290000`;

const commaNumRegex = /(\d)(?=(\d{3})+\b)/g;
const replaceWithCommas = inputNoCommaNumsText.replace(commaNumRegex, "$1,");
//console.log(replaceWithCommas);
//the first () take the first number and the second () have the match of the pattern to put the comma


/**
 * Match all function declarations that are not uppercase
 */
const functionsText = `function foo() {return bar();}
function Foo() {return Bar();}
function Baz(x) {return function(y){return x+y;}}
function bazEx(x) {return function(y, z){return x+y+z;}}
function bar() {return 0;}
function Bar() {return 1;}`;

const functionsRegex = /function\s+[a-z]\w+\(.*?\)/g;
const functionsLowerCase = functionsText.match(functionsRegex);
// matching only the declarations of the functions


/**
 * Change date formats from yyyy-mm-dd to dd.mm.yyyy
 */
const dateText = `Robert Boyle 1627-01-25 — 1691-12-31
Antoine Lavoisier 1743-08-26 — 1794-05-08
Michael Faraday 1791-09-22 — 1867-06-25
Louis Pasteur 1822-12-27 — 1895-09-28
Alfred Nobel 1833-10-21 — 1896-12-10
Dmitri Mendeleev 1834-02-08 — 1907-02-02
Marie Curie 1867-11-07 — 1934-07-04
Linus Pauling 1901-02-28 — 1994-08-19`;

const dateRegex = /(\d{4})-(\d\d)-(\d\d)/g;
const dateReplaced = dateText.replace(dateRegex, "$3.$2.$1");
//console.log(dateReplaced);


/**
 * Match valid time in 24h format
 */
const invalid24HourText = `Valid and invalid time:
00:15
07:40
08:61
09:59
13:00
14:7
20:20
23:61
24:15`;

const formatHourRegex = /(0|[0-2])([0-3]|[5-9]):(0|[0-5])[0-9]/g; // or ((0|1)\d|2[0-3]):[0-5]\d
const valid24Hour = invalid24HourText.match(formatHourRegex);
//console.log(valid24Hour)


/**
 * Match valid time in 12-hour clock format
 */
const amPmText = `Valid and invalid time:
00:15 AM
7:40 AM
8:51 AM
8:61 AM
09:59
1:00 PM
2:00 PM
19:34 PM`;

const valid12HourRegex = /(00|[0-8]):[0-5]\d\s(AM|PM)/g;
const validAmPmHours = amPmText.match(valid12HourRegex);
// console.log(validAmPmHours);


/**
 * In Pascal, fuction parameters are delimited by a semicolon.
 * Replace it by C-style comma delimiter. Do not modify semicolons elsewhere.
 */
const pascalText = `void Foo(int x; float y; char z)
{
write(x, y, z);
}

int Avg(List<int> l; int count)
{
return Sum(l, count)/count;
}`;
const pascalRegex = /;(?=[^\(]+\))/g;
const pascalReplaced = pascalText.replace(pascalRegex, ",");
// console.log(pascalReplaced);


/**
 * Change variable initialization to C-style: var a = new A(...) -> A a(...);
 */
const variableWithNew = `function init() {
  var foo = new Foo();
  var bar = new Bar(foo, true);
  var foos = new List<Foo>(3);
  var baz = new Baz(random());
  }`;
const variableRegex = /var\s+(\w+)\s+=\s+new\s+((?:\w|<|>)+)(.+;)/g;
const variableChanged = variableWithNew.replace(variableRegex, "$2 $1$3");
// console.log(variableChanged);


/**
 * Match IPv6 addresses. An IPv6 address consists of 8 colon-delimited blocks of 4 hexadecimal digits.
 * Blocks of all zeroes can be omitted. Leading zeroes in a block can be omitted too.
 */
const ipV6AddressText = `Initial address: 2001:0db8:0000:0000:0000:ff00:0042:8329
After removing all leading zeroes: 2001:db8:0:0:0:ff00:42:8329
After omitting consecutive sections of zeroes: 2001:db8::ff00:42:8329
Another example: 2607:f0d0:1002:0051:0000:0000:0000:0004
After removing all leading zeroes: 2607:f0d0:1002:51:0:0:0:4
After omitting consecutive sections of zeroes: 2607:f0d0:1002:51::4`;
const ipv6Regex = /(\w*)(:|::)\b\w+/g;
const ipv6Adresses = ipV6AddressText.match(ipv6Regex);
// console.log(ipv6Adresses);


/**
 * Highlight valid 24 and 32 bit hexadecimal colors. Colors start with #
 */
const colorsValidText = `White: #ffffff, #ffffffff
Black:#000000 #000000ff
Semitrnasparent green: #00ff0088
Nonhexadecimal: #00ffhh #agaeffe0
Wrong bytes count:#00ff00f #fffff #888888fff`;
const highlightValidColorsRegex = /#(([0-9a-f]{6})|([0-9a-f]{8}))\b/g;
const foundValidColorsHex = colorsValidText.match(highlightValidColorsRegex);
// console.log(foundValidColorsHex);


/**
 * Replace addition operator a + b with Add(a, b).
 */
const replaceCallText = `int c = a+b;
var average = (a1 + a2)/2
sum(foo, bar, x) = foo(x) + bar(x)
var dotProduct(v1, v2) = v1.x*v2.x + v1.y*v2.y`;
const replaceCallRegex = /(\w[a-z0-9()*.]+)\s?\+\s?(\w[a-z0-9()*.]+)/g;
const resultReplaceCall = replaceCallText.replace(replaceCallRegex, "Add($1, $2)");
// console.log(resultReplaceCall);


/**
 * Match the URL parameters in the form param : value
 */
const urlsText = `http://www.learnregexp.com?excercise=extract query from URL
https://www.google.com/search?q=regexp
http://pitchimprover.com/index.php?type=Perfect
http://www.learnregexp.com?excercise=extract-host-from-URL`;
const urlRegex = /\?([^=]+)=(.+)\b/g;
const urlsParams = urlsText.match(urlRegex);
// console.log(urlsParams);


/**
 * Extract the host from URL
 */
const hostsText = `http://www.learnregexp.com?excercise=extract query from URL
https://www.google.com/search?q=regexp
http://pitchimprover.com/index.php?type=Perfect
http://www.learnregexp.com?excercise=extract host from URL`;
const hostRegex = /http:\/\/(www.)?[^?\/]+/g;
const hosts = hostsText.match(hostRegex);
// console.log(hosts);


/**
 * Match all recipes that do not contain the word 'chocolate' (recipes are separated by newline)
 */
const newLineWordText = `Cake 1: sugar, flour, cocoa powder, baking powder, baking soda, salt, eggs, milk, vegetable oil, vanilla extract, chocolate chips
Cake 2: cream cheese, sugar, vanilla extract, crescent rolls, cinnamon, butter, honey
Cake 3: dark chocolate cake mix, instant chocolate pudding mix, sour cream, eggs, vegetable oil, coffee liqueur
Cake 4: flour, baking powder, salt, cinnamon, butter, sugar, egg, vanilla extract, milk, chopped walnuts
Cake 5: gingersnap cookies, chopped pecans, butter, cream cheese, sugar, vanilla extract, eggs, canned pumpkin, cinnamon
Cake 6: flour, baking soda, sea salt, butter, white sugar, brown sugar, eggs, vanilla extract, chocolate chips, canola oil
Cake 7: wafers, cream cheese, sugar, eggs, vanilla extract, cherry pie filling`;
const newLineRegex = /^(.(?!chocolate))*$/g;
const findWordInFirstLine = newLineWordText.match(newLineRegex);
// console.log(findWordInFirstLine);

