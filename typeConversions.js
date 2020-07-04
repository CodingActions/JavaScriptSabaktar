// ақпарат типтерін ауыстыру/айырбастау

let meninSanym = 20;
let t = typeof meninSanym;
console.log(t);

let meninStringim = "10";
console.log(typeof meninStringim);

let stringToNumber = Number(meninStringim);
console.log(stringToNumber);
console.log(typeof stringToNumber);

let meninStringim2 = "hello";
let stringToNumber2 = Number(meninStringim2);
console.log(stringToNumber2);
console.log(typeof stringToNumber2);

let meninStringim3 = "";
let stringToNumber3 = Number(meninStringim3);
console.log(stringToNumber3);

// string -> number
// "1000" -> 1000
// "aaa" -> NaN
// "" -> 0

let myBool = false;
let boolToNumber = Number(myBool);
console.log(boolToNumber);
// boolena -> number
// true -> 1
// false -> 0

let myUndefined = undefined;
let undefinedToNumber = Number(myUndefined);
console.log(undefinedToNumber);

let myNull = null;
let nullToNumber = Number(myNull);
console.log(nullToNumber);
// undefined/null -> number
// undefined -> NaN
// null -> 0

console.log("-------------------Type To String------------------");
let myNum = 20;
let myBoolena = true;
let myUndefined2 = undefined;
let myNull2 = null;
let numToString = String(myNum);
let boolToString = String(myBoolena);
let undefinedToString = String(myUndefined2);
let nullToString = String(myNull2);
console.log(numToString);
console.log(typeof numToString);
console.log(boolToString);
console.log(typeof boolToString);
console.log(undefinedToString);
console.log(typeof undefinedToString);
console.log(nullToString);
console.log(typeof nullToString);
// 20 -> "20"
// true -> "true"
// undefined -> "undefined"
// null -> "null"

console.log("-----------------Type To Boolean -------------------");
// Boolean(?);
console.log(Boolean(20));
console.log(Boolean(100.5));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(-1));
console.log(Boolean(null));
console.log(Boolean("Marat"));
console.log(Boolean(""));
// kez kelgen san -> true
// 0 -> false
// undefined / null -> false