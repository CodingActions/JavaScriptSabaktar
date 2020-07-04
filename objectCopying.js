// Object copying

let myObject = {
    name: "marat",
    age: 20
};

let myObject2 = Object.assign({}, myObject); // deep cloning
console.log(myObject);
console.log(myObject2);

myObject2["ulty"] = "Kazakh";
console.log(myObject);
console.log(myObject2);

console.log("--------Object3,4--------------");
let myObject3 = {
    name: "marat",
    age: 20,
    family: {
        father: "samat",
        mother: "aigul"
    }
};

let myObject4 = Object.assign({}, myObject3); // deep cloning
console.log(myObject3);
console.log(myObject4);

myObject4.family.father = "Jandos";

console.log(myObject3);
console.log(myObject4);
