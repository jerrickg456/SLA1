function processArray(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

function square(num) {
    return num * num;
}

let numbers = [1, 2, 3, 4, 5];
let output = processArray(numbers, square);
console.log(output);