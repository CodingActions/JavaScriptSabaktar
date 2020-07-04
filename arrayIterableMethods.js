// Array Iterable methods

// forEach

let arr = [10, 20, 50, 90, 40];

arr.forEach(function(aaa, index, array){
    console.log(aaa);
});

let newArr = arr.filter(function(element, index, array){
    if (element >= 40){
        return true;
    }
    else {
        return false;
    }
});

console.log(newArr);

let newArr2 = arr.map(function(element, index, array){
    return element - 1;
});
console.log(newArr2);