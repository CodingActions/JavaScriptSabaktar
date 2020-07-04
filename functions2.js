sanMinezi(10);
sanMinezi(15);
sanMinezi(6);

function sanMinezi(san){
    console.log("Kelesi san: ", san);
    if (san >= 0) {
        console.log("Bul on san");
    }
    else {
        console.log("Bul teris san");
    }
    
    if (san % 2 === 0) {
        console.log("Bul jup san");
    }
    else {
        console.log("Bul tak san");
    }
    
    if (san > 9 || san < -9) {
        console.log("Bul birlik san emes");
    }
    else {
        console.log("Bul birlik san");
    }
    console.log()
}