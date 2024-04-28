function calculator(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            console.log("Invalid operator");
            return; // Exit the function if the operator is invalid
    }

    console.log("Result:", result);
}

// Example usage:
calculator(5, 3, '+'); // Output: Result: 8
calculator(10, 2, '-'); // Output: Result: 8
calculator(3, 4, '*'); // Output: Result: 12
calculator(10, 5, '/'); // Output: Result: 2
calculator(5, 0, '/'); // Output: Result: Infinity
calculator(5, 3, '%'); // Output: Invalid operator
