function calculateTotalBill(costPerDish, numberOfPeople) {
    var totalCost = costPerDish * numberOfPeople;
    var billPerPerson = totalCost / numberOfPeople;

    var billDetails = {
        totalBill: totalCost,
        billPerPerson: billPerPerson
    };

    return billDetails;
}




var costPerDish = 50; // Assuming each dish costs Rs. 50
var numberOfPeople = 4;
var billDetails = calculateTotalBill(costPerDish, numberOfPeople);
console.log("Total bill:", billDetails.totalBill);
console.log("Bill per person:", billDetails.billPerPerson);
