// Логикалық операторлар

// || OR, Немесе
// && AND,  Жане
// !(NOT), Керисинше немесе баскаша

let myVar = true || true;
console.log("My Var: ", myVar);

let myVar2 = false || true;
console.log("My Var2: ", myVar2);

let myVar3 = false || false;
console.log("My Var3: ", myVar3);

let myVar4 = false || false || true || false;
console.log("My Var4: ", myVar4);

console.log("---------- && -----------");
let myVar5 = true && true;
console.log("My Var5: ", myVar5);

let myVar6 = true && true && true && false;
console.log("My Var6: ", myVar6);

console.log("--------- !(NOT)-------");
let myVar7 = !true;
console.log("My Var7: ", myVar7);
let myVar8 = !false;
console.log("My Var8: ", myVar8);

console.log("---------- ||, &&, !(NOT)---------");
let myVar9 = false || true && true && false;

console.log("My Var9: ", myVar9);
