function countVowels(name) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0;
    
    for (let i = 0; i < name.length; i++) {
        if (vowels.includes(name[i])) {
            count++;
        }
    }
    
    return count;
}

// Example usage:
const userName = "John Doe";
console.log("Number of vowels in", userName + ":", countVowels(userName)); // Output: Number of vowels in John Doe: 3
