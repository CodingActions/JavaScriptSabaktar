// Set

let set = new Set([20, 25, 45, 23, 11]);
console.log(set);

for (let element of set) {
    console.log(element);
}
console.log("----------------------------");
set.forEach(function(element, element2, set2){
    console.log(element2);
});

/* console.log(set.keys());
console.log(set.values());
console.log(set.entries()); */