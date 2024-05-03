function removeDuplicates(cart) {
    // Create an empty object to store unique items
    const uniqueItems = {};

    // Iterate through the cart items
    cart.forEach(item => {
        // Use the item name as the key in the uniqueItems object
        uniqueItems[item] = true;
    });

    // Extract the unique item names from the object keys
    const uniqueCart = Object.keys(uniqueItems);

    return uniqueCart;
}

// Example usage:
const customerCart = ["Deepak","raja","son","Deepak" ,"raja"];
const newCart = removeDuplicates(customerCart);

console.log(newCart); 