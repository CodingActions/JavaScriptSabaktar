// Loops, Цикл, Айналсок

// while

// 0 ... 9 birlik

let san = 0;
while(san < 10) {
    console.log(san);
    san++;
}

console.log("-------- Jup sandar-----------");
let san1 = 0;
while(san1 <= 10) {
    console.log(san1);
    san1 = san1 + 2;
}

console.log("----------- Jup jane Tak sandar--------------------");
let san2 = 0;
while(san2 <= 100) {
    let kaldyk = san2 % 2;
    if (kaldyk === 1) {
        console.log("Tak San: ", san2);
    }
    else {
        console.log("Jup San: ", san2);
    }
    san2 ++;
}

console.log("--------- While with Break ------------");

let san3 = 0;
while(san3 < 10) {
    console.log(san3);
    if (san3 === 7) {
        break;
    }
    san3++;
}

console.log("------------------ While with Continue------------");
let san4 = 0;
while(san4 < 10) {
    if (san4 === 4 || san4 === 7){
        san4++;
        continue;
    }
    console.log(san4);
    san4++;
}