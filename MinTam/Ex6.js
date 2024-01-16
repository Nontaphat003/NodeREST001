// removedups([1, 0, 1, 0]) ➞ [1, 0]
// removedups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]
// removedups(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]

function removedups(arr) {
    let newArr = [];
    // console.log(arr.length);
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        if (newArr.indexOf(arr[i]) == -1) {
            newArr.push(arr[i]);
        }
    }
    // console.log(newArr);
    return newArr;
}

console.log(removedups([1, 0, 1, 0]));
console.log(removedups(["The", "big", "cat"]));
console.log(removedups(["John", "Taylor", "John"]));