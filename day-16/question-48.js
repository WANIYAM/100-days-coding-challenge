/*                                          QUESTION 48
Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops.
 Use the spread operator to combine these arrays into a single array sorted in ascending order,
 then log the result.
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Prices of two different sets of laptops
var laptopPricesSet1 = [1200, 1500, 900];
var laptopPricesSet2 = [1100, 1400, 950];
// Combining arrays with the spread operator
var combinedPrices = __spreadArray(__spreadArray([], laptopPricesSet1, true), laptopPricesSet2, true);
// Sorting the combined array in ascending order
combinedPrices.sort(function (a, b) { return a - b; });
// Logging the result
console.log("Combined and sorted prices:", combinedPrices);
