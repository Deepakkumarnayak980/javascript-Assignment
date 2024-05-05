function calculateRentalCost(daysRented, carType) {
    var rentalCost = 0;
    
    switch(carType) {
        case "Economy":
            rentalCost = 4000; // Rs. 4000 per day
            break;
        case "Midsize":
            rentalCost = 15000; // Rs. 15000 per day
            break;
        case "Luxury":
            rentalCost = 20000; // Rs. 20000 per day
            break;
        default:
            console.log("Invalid car type");
            return null;
    }
    
    var totalCost = rentalCost * daysRented;
    return totalCost;
}



var daysRented = 9;
var carType = "Economy";
var totalCost = calculateRentalCost(daysRented, carType);
console.log("Total rental cost:", totalCost);
