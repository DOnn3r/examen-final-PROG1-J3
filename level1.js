export function evaluatePrice(input) {
    let individualPrice = input[0];
    let groupPrice = input[1];
    let person = input[2];

    if(groupPrice < 0 ||individualPrice < 0 || person < 0){
        return "There are invalid input";
    }

    let individualPriceCalcul = individualPrice * person;
    let groupPriceCalcul = groupPrice * (numRoundMultiple(person, 10) / 10);


    if(numRoundMultiple(person,10) < person){
        return individualPriceCalcul;
    }
    if (individualPriceCalcul > groupPriceCalcul) {
        return groupPriceCalcul;
    }
    if (individualPriceCalcul < groupPriceCalcul) {
        return individualPriceCalcul;
    }
    if (individualPriceCalcul == groupPriceCalcul) {
        return individualPriceCalcul;
    }
    
}

/**
 * @param {number} x is the number
 * @param {number} y is the multiple 
 * @returns closest multiple of y
 */
let numRoundMultiple = function (x, y) {
    return Math.round(x / y) * y;
}

console.log(evaluatePrice([6, 50, 26]));
console.log(evaluatePrice([-6, -50, -26]));
console.log(evaluatePrice([2, 20, 12]));
console.log(numRoundMultiple(12, 10));