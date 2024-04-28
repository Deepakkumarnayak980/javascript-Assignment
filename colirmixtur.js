function colorMixer(color1, color2) {
    let result;

    switch (color1) {
        case 'red':
            switch (color2) {
                case 'blue':
                    result = 'purple';
                    break;
                case 'yellow':
                    result = 'orange';
                    break;
                default:
                    result = 'Invalid color combination';
                    break;
            }
            break;
        case 'blue':
            switch (color2) {
                case 'red':
                    result = 'purple';
                    break;
                case 'yellow':
                    result = 'green';
                    break;
                default:
                    result = 'Invalid color combination';
                    break;
            }
            break;
        case 'yellow':
            switch (color2) {
                case 'red':
                    result = 'orange';
                    break;
                case 'blue':
                    result = 'green';
                    break;
                default:
                    result = 'Invalid color combination';
                    break;
            }
            break;
        default:
            result = 'Invalid color combination';
            break;
    }

    console.log("Resulting color:", result);
}

// Example usage:
colorMixer('red', 'blue'); // Output: Resulting color: purple
colorMixer('blue', 'yellow'); // Output: Resulting color: green
colorMixer('red', 'yellow'); // Output: Resulting color: orange
colorMixer('green', 'blue'); // Output: Resulting color: Invalid color combination
