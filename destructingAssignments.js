// Destructuring assignment

// array, object

let user = {
    name: "Marat",
    age: 20,
    ulty: "Kazakh", 
    jynysy: "Er"
}

let userName = user.name;
console.log(userName);

let {name, age, ...kalgany} = user;
console.log(name, age, kalgany);
console.log(kalgany);
console.log("---------------Kalgany------------------");
let {...kalgany2} = user;
let kalgany3 = user;
console.log(kalgany2);
console.log(kalgany3);


console.log("-----------------------");

let arr = [4, 20, 10];
let arrVal1 = arr[0];
console.log(arrVal1);

let [first, second] = arr;
console.log(first, second);