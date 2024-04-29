function capitalizeName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

function checkAndCapitalize(name) {
    return name.charAt(0).toLowerCase() === name.charAt(0) ? capitalizeName(name) : name;
}

// Example usage:
const userName = "john";
console.log(checkAndCapitalize(userName)); // Output: "John"
