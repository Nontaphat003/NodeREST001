// หาเลข IPv (เลขไม่เกิน 255)
// isValidIP("1.2.3.4") -> true
// isValidIP("1.2.3") -> false
// isValidIP("1.2.3.4.5") -> false
// isValidIP("123.45.67.89") -> true
// isValidIP("123.456.78.90") -> false
// isValidIP("123.045.067.089") -> false

function isValidIP(str) {
    let arr = str.split(".");
    if (arr.length != 4) {
        return false;
    }
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        if (arr[i] < 0 || arr[i] > 255) {
            return false;
        }
        if (arr[i][0] == 0 && arr[i].length > 1) {
            return false;
        }
    }
    return true;
}

console.log(isValidIP("1.2.3.4"));
console.log(isValidIP("1.2.3"));
console.log(isValidIP("1.2.3.4.5"));
console.log(isValidIP("123.45.67.89"));
console.log(isValidIP("123.456.78.90"));
console.log(isValidIP("123.045.067.089 "));