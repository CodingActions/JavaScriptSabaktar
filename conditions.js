// Шартты операторлар

let meninmSanym = 60;
if (meninmSanym === 10) { // false
    console.log("Menim sanym 10-ga ten");
}
else if (meninmSanym === 50) { // false
    console.log("Menim sanym 50-ga ten");
}
else if (meninmSanym === 60){ // true
    console.log("Menim sanym 60-ga ten");
}
else{
    console.log("Menim sanym 10-ga jane 50-ge ten emes");
}

console.log("0 to Boolean", Boolean(0));
console.log("1 to Boolean", Boolean(1));
if (1) { // true
    console.log("1 shartty operator oryndaldy");
}
else {
    console.log("1 shartty operator oryndalmady");
}

console.log("-------------- Types to Boolean---------------");
console.log("Bos string to Boolean", Boolean(""));
console.log("null to Boolean", Boolean(null));
console.log("undefined to Boolean", Boolean(undefined));
console.log("NaN to Boolean", Boolean(NaN));

let myName = "Marat";
if (myName === "Marat") {
    console.log("Menim Atym Marat");
}
else {
    console.log("Menim Atym Marat Emes");
}

let jauap = myName === "Samat" ? "Menim Atym Marat":  "Menim Atym marat emes";
console.log(jauap);