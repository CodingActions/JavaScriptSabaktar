// Object static Methods

let map = new Map();
map.set("bir", 1);
map.set("eki", 2);
map.set("ush", 3);

console.log(map);

let arr = Array.from(map.keys());
console.log(arr);


function Mathematic(fist, second){
    this.firstValue = fist;
    this.secondValue = second;
    this.plus = function(){
        return this.firstValue + this.secondValue;
    }
}

let math1 = new Mathematic(10, 25); // instance
console.log(math1.plus());

Mathematic.kobeitu = function(birinshiSan, ekinshiSan){ // static methods
    return birinshiSan * ekinshiSan;
}

let res = Mathematic.kobeitu(10, 10);
console.log(res);

