// switch case statements

let myNum = 100;
if(myNum === 10){
    console.log("Bul San 10 - ga ten");
}
else if (myNum > 20) {
    console.log("Bul san 20 - dan ulken");
}
else if(myNum === 30){
    console.log("Bul san 30 - ga ten");
}
else {
    console.log("Belgisiz san");
}

switch(myNum){
    case 10:
        console.log("Bul San 10 - ga ten");
        break;
    case 20: 
        console.log("Bul san 20 - ga ten");
        break;
    case 20:
        console.log("Bul san 20 - ga ten");
        break;
    default:
        console.log("Belgisiz san");
}