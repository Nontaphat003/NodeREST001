// หาผลรวม ของค่าน้อยสุด 2 ตัว
// sumTwoSmallestNumbers([19, 5, 42, 2, 77]) // 7
// sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]) // 3453455
// sumTwoSmallestNumbers([2, 9, 6, -1]) // 8
// sumTwoSmallestNumbers([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]) // 563
// sumTwoSmallestnumbers([3683, 2902, 3951, -475, 1617, -2385]) // 4519

function sumTwoSmallestNumbers(numbers) {
    let min = numbers[0]
    let secondMin = numbers[1]

    for (let i = 1; i < numbers.length; i++) {
        // console.log(numbers[i])
        if (numbers[i] < min) {
            secondMin = min
            min = numbers[i]
                // console.log(secondMin)
                // console.log(min)
        } else if (numbers[i] < secondMin) {
            secondMin = numbers[i];

        }
    }
    return min + secondMin
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]));
console.log(sumTwoSmallestNumbers([2, 9, 6, -1]));
console.log(sumTwoSmallestNumbers([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]));
console.log(sumTwoSmallestNumbers([3683, 2902, 3951, -475, 1617, -2385]));