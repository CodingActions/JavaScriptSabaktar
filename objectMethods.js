// object methods
// this 

let user = {
    name: "Marat Maratov",
    tuganJyk: 1995,
    jynysy: "ul",
    isLoggedIn: false,
    login: function(){
        this.isLoggedIn = true;
        console.log("Men juuiege kirdim");
    },
    logout: function() {
        this.isLoggedIn = false;
        console.log("Men juieden shyktym");
    },
    like(){
        console.log("Men like bastym", this.name)
    }
}

user.register = function(){
    console.log("Men tirkeldim");
}

console.log(user);
user.login();
console.log(user);
user.register();
user.like();
user.logout();
console.log(user);