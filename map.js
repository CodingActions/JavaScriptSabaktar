// Map

let map = new Map();
map.set("name", "Marat"); // set - kosu
map.set("age", 20);
map.set("junysy", "Er");

console.log(map);

console.log(map.get("age")); // get - kiltine tiisti mandi kaitaru
console.log(map.has("name")); // has - kiltin bar nemese jok ekenin kaitarady
map.delete("junysy"); // delete - key boiynsha manin oshiru
console.log(map);
console.log(map.size);

map.clear(); // clear - tolyktai oshiru

console.log(map);

