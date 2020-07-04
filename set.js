// Set

let set = new Set();

set.add(10); // add - kosu
set.add(20);
set.add(10);
set.add(25);
set.add(35);

console.log(set);

set.delete(20); // delete - oshiru

console.log(set);

let res = set.has(35); // has - element bar nemese jok
console.log(res);

console.log(set.size); // size - olshemi

set.clear(); // clear - barlyk elementti oshiru
console.log(set);



