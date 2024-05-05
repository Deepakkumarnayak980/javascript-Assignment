const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    const discount = originalPrice - discountedPrice;
    const discountPercentage = (discount / originalPrice) * 100;
    return Math.round(discountPercentage * 100) / 100; // Rounding off to two decimal places
};


const originalPrice = 100;
const discountedPrice = 80;
const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
console.log("Discount percentage:", discountPercentage);
