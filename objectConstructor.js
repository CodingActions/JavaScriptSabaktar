// object constructor

let user1 = {
    name: "Marat",
    age: 20,
    ulty: "Kazakh",
    jynysy: "Er"
};

let user2 = {
    name: "Kairat",
    age: 25,
    ulty: "Kazakh",
    jynysy: "Er"
};

let user3 = {
    name: "Samat",
    age: 30,
    ulty: "Kazakh",
    jynysy: "Er"
};

console.log(user1);
console.log(user2);
console.log(user3);

console.log("--------------------------------");

function User(Name, Age, Ulty, Jynysy){
    let user = {
        name: Name,
        age: Age,
        ulty: Ulty,
        jynysy: Jynysy
    };
    return user;
};

let user11 = User("Marat", 20, "Kazakh", "Er");
let user12 = User("Kairat", 25, "Kazakh", "Er");
let user13 = User("Samat", 30, "Kazakh", "Er");
console.log(user11);
console.log(user12);
console.log(user13);

console.log("-----------------------------------");

function User1(Name, Age, Ulty, Jynysy){
    this.name = Name;
    this.age = Age;
    this.ulty = Ulty;
    this.jynysy = Jynysy;
};

let user21 = new User1("Marat", 20, "Kazakh", "Er");
let user22 = new User1("Kairat", 25, "Kazakh", "Er");
let user23 = new User1("Samat", 30, "Kazakh", "Er");
console.log(user21);
console.log(user22);
console.log(user23.age);

