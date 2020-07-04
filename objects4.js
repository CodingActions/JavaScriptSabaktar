// Objects

let country = {
    name: "Kazakhstan",
    location: "Asia",
    population: 18000000,
    religions: "Muslim, Christions",
    myFunc: function(param1){
        return param1 * param1;
    } 
};

console.log("Kiltter: ");
for (let key in country){
    console.log(key);
}
console.log();

console.log("Mander: ");
for (let key in country){
    console.log(country[key]);
}