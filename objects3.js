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

let countryName = country['name'];
let countryLocation = country.location;
console.log(countryName);
console.log(countryLocation);

let san1 = country.myFunc(5);
console.log(san1);

console.log("name" in country);
console.log("location" in country);
console.log("family" in country);

let isReligionExist = "religions" in country;
console.log(isReligionExist);

console.log(country['family']);