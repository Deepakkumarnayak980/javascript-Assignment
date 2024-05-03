function doubleCartItemQuantities(cart) {
    for (let i = 0; i < cart.length; i++) {
        cart[i] *= 2; // Double the quantity of each item
    }
    return cart;
}

// Example usage:
let cart = [1, 2, 3, 4]; 
let correctedCart = doubleCartItemQuantities(cart);
console.log(correctedCart); 
