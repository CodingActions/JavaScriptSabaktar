// Objects
let car = {
    "name": "Mazda",
    "model": "Cx 5",
    year: 2015,
    'color': "black",
    configuration: {

    }
};

console.log(car);

car.cube = 2.5;
car["location"] = "Europe";
car["design"] = {
    type: "Japan"
};

console.log(car);

delete car.color;
delete car.cube;
console.log(car)

car.year = 2017;
console.log(car);

