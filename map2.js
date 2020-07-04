// Map

let obj = {
    name: "Marat",
    age: 20,
    ulty: "Kazakh"
};

let myArr = [20, 10];
obj[myArr] = "Hello!"
console.log(obj);

let map = new Map();
map.set("name", "Marat");
map.set("age", 20);
map.set("ulty", "Kazakh");
map.set(myArr, "Hello!");

console.log(map);
console.log("---------------------------");
for (let kiltiMani of map) {
    console.log(kiltiMani[1]);
}

console.log(map.keys());
console.log("------------------------------");
for (let key of map.keys()) {
    console.log(key);
}

console.log("------------------------------");
for (let value of map.values()) {
    console.log(value);
}

let arr1 = Array.from(map.keys());
console.log(arr1);