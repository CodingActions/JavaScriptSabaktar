// JSON

let user = {
    name: "Marat",
    age: 20,
    tizim: [20, 10 , 50, 60],
    plus: function(){
        return 20 + 50;
    }
};

// JSON -> array, object, number, string, boolean, null
// NOT JSON -> undefined, function, set, map

let jsonFormat = JSON.stringify(user); // js object to (JSON)string
console.log(jsonFormat);

let jsonToObj = JSON.parse(jsonFormat); // (JSON) string to js object
console.log(jsonToObj);