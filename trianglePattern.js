function invertedRightAngleTrianglePattern(rows) {
    for (let i = rows; i > 0; i--) {
        console.log("*".repeat(i));
    }
}

// Test with i=6
let i = 6;
invertedRightAngleTrianglePattern(i);
