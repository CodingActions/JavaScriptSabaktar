function adamMalimet(name, age){
    let tuganJyl = 2020 - age;
    let result = name + "-tyn tugan jyly " + tuganJyl;
    return result;
}

let adamTuraly = adamMalimet("Marat", 25);
console.log(adamTuraly);

let adamTuraly2 = adamMalimet("Samat", 30);
console.log(adamTuraly2);