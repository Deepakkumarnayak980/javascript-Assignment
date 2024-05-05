const calculateTotalCost = (cart) => {
    let totalCost = 0;

    cart.forEach(item => {
        totalCost += item.unitPrice * item.quantity;
    });

    return totalCost;
};






const customerCart = [
    { unitPrice: 10, quantity: 2 },
    { unitPrice: 20, quantity: 1 },
    { unitPrice: 15, quantity: 3 }
];

const totalCost = calculateTotalCost(customerCart);
console.log("Total cost:", totalCost);
