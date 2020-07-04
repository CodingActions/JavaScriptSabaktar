// Object Keys, Values

let user = {
    name: "marat",
    age: 20,
    ulty: "Kazakh"
};

let keys = Object.keys(user); // object kiltteri array retinde
let values = Object.values(user); // object manderi array retinde
let entries = Object.entries(user); // object kilti jane mani array retinde
/* console.log(keys);
console.log(values); */
for (let kv of entries) {
    console.log(kv);
}