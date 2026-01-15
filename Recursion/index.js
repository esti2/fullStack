// exe1
let sum = 1;
const factorials = function (number) {
    if (number > 1)
        return number * factorials(number - 1);
    else
        return 1;
}

console.log(factorials(5));

// exe2
const reverseString = function (str) {
    if (str.length > 1)
        return str[str.length - 1] + reverseString(str.substring(0, str.length - 1))
    else
        return str;
}

console.log(reverseString("esti"));

// exe3
const arr1 = [1, 2, 3]
const arr2 = []

const swap = function (arr1, arr2) {
    if (arr1.length > 0) {
        arr2.push(arr1[0])
        arr1.shift();
        return swap(arr1, arr2);
    }
    else
        return arr2;
}
console.log(swap(arr1, arr2))