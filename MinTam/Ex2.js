// หาเลขมากสุด
// highestdigit(379) -> 9
// highestdigit(2) -> 2
// highestdigit(377401) -> 7

function highestDigit(n) {
    let max = 0;
    while (n > 0) {
        let digit = n % 10;
        if (digit > max) {
            max = digit;

        }
        n = Math.floor(n / 10);
    }
    return max;
}

console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377401));