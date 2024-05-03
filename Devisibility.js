function checkDivisibility(arr) {
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (num % 3 === 0 && num % 2 !== 0) {
            console.log(num);
        }
    }
}

// Test with an array of numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
checkDivisibility(numbers);
