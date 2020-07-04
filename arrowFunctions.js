// Arrow Functions

let adamMalimet = (name,age) => {
    let tuganJyl = 2020 - age;
    let result = name + "-tyn tugan jyly " + tuganJyl;
    return result;
}

let adamTuraly = adamMalimet("Marat", 25);
console.log(adamTuraly);

let adamTuraly2 = adamMalimet("Samat", 30);
console.log(adamTuraly2);

let findCube = (san) => {
    let res = san * san * san;
    return res;
}

let findCube2 = (san) => san * san * san;

let res1 = findCube2(2);
console.log("2 cube: ", res1);
let res2 = findCube2(3);
console.log("3 cube: ", res2);