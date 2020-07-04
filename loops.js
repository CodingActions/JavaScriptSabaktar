// Loops, Цикл, Айналсок

// for, while, foreach, do while


let san = 0;
console.log(san);
san++; // san++
console.log(san);
san++;
console.log(san);
san++;
console.log(san);
san++;
console.log(san);
san = san + 1;
console.log(san);
san = san + 1;
console.log(san);
san = san + 1;
console.log(san);
san = san + 1;
console.log(san);
san = san + 1;
console.log(san);

console.log("--------------------For---------------");
for (let san2 = 0; san2 < 10; san2++) {
    let myNum = 100;
    console.log(san2 + myNum);

}

console.log("------------------- Jup sandar --------");
for (let san3 = 0; san3 < 100; san3 =  san3 + 2) {
    console.log(san3);
}

console.log("------------------ Jup Sandar 2---------------------");
for (let san4 = 0; san4 < 100; san4++) {
    let kaldyk = san4 % 2;
    if (kaldyk === 1) {
        console.log("Tak san", san4);
    }
    else{
        console.log("Jup san", san4);
    }
    
}