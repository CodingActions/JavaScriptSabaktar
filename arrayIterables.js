// Array Iterables

let arr = [20, 1, 5, 50, 80, -7, -80, 4, 8, 62, -4, -5, 20];
console.log(arr);
/* if (arr[0] >= 0){
    console.log(arr[0]);
}
if (arr[1] >= 0){
    console.log(arr[1]);
}
if (arr[2] >= 0){
    console.log(arr[2]);
}
if (arr[5] >= 0){
    console.log(arr[5]);
} */


for (let index = 0; index < arr.length; index++) {
   /*  console.log("Index = ", index, ", Element = ", arr[index]); */
    if (arr[index] >= 0) {
        console.log(arr[index]);
    }
}