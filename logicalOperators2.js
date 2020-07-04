// Логикалық операторлар

// || OR, Немесе
// && AND,  Жане
// !(NOT), Керисинше немесе баскаша

let myVar = 0 || 0 || 1 || 0; 
console.log("My Var: ", myVar);

let myVar2 = 1 && 0; // Boolean(1) && Boolean(0) -> true || false
console.log("My Var2: ", myVar2);

let myVar3 = undefined || null || "" || NaN; // Boolean(undefined) || Boolean(null) || Boolean("")
console.log("My Var3: ", myVar3);

let myNum = 25;
let myVar4 = myNum === 10 || myNum === 15; // true || false
console.log("My Var4: ", myVar4);

if (myNum === 10 || myNum === 15){
    console.log("Osy san 10 ga nemese 15 ke ten");   
}
else{
    console.log("Osy san 10 ga nemese 15 ke ten emes")
}
