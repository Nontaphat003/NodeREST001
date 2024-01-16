// หาผลรวม ออฟเจ็ค
// getBudgets([
// { name: "John", age: 21, budget: 23000 },
// { name: "Steve", age: 32, budget: 40000 },
// { name: "Martin", age: 16, budget: 2700 }
// ])

// getBudgets([
// { name: "John", age: 21, budget: 29000 },
// { name: "Steve", age: 32, budget: 32000 },
// { name: "Martin", age: 16, budget: 1600 }

function getBudgets(arr) {
    let total = 0;
    // console.log(arr.budget);
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i].budget);
        total += arr[i].budget;
    }
    return total;
}

console.log(getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
]));


console.log(getBudgets([
    { name: "John", age: 21, budget: 29000 },
    { name: "Steve", age: 32, budget: 32000 },
    { name: "Martin", age: 16, budget: 1600 }
]));