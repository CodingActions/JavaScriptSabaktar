// Array two dimensions

let arr = [
    [10, 15, 100, 150], // 0
    [8, 10, 80, 200],   // 1
    [100, 70, 55, 60],  // 2
    [80, 65, 47, 53]    // 3
];

//console.log(arr);

for (let element of arr) {
    console.log(element[0]);
    /* for (let element2 of element) {
        console.log(element2);
    } */
}

for (let index in arr) {
    if (index == 1) {
        console.log(arr[index]);
    }
}

for (let index1 in arr) {
    for (let index2 in arr[index1]) {
        if (index1 - index2 == 0) {
            console.log(arr[index1][index2]);
        }
    }
}