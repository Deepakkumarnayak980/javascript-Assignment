function findHighestMarks(marks) {
    let highestMarks = marks[0]; // Assume the first student has the highest marks initially

    // Iterate through the marks array starting from the second student
    for (let i = 1; i < marks.length; i++) {
        // Update highestMarks if the current student's marks are higher
        highestMarks = (marks[i] > highestMarks) ? marks[i] : highestMarks;
    }

    console.log("The highest marks scored by any student in the class:", highestMarks);
}

// Example usage:
const marks = [80, 65, 90, 75, 85];
findHighestMarks(marks); // Output: The highest marks scored by any student in the class: 90
