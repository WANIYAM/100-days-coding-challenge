/*                              QUESTION 56
Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
*/
// Original array with mixed types
var mixedArray = [10, "This is a string", 3.14, true, "array"];
// Create a new array that contains only strings 
var stringArray = [];
for (var _i = 0, mixedArray_1 = mixedArray; _i < mixedArray_1.length; _i++) {
    var item = mixedArray_1[_i];
    if (typeof item === 'string') {
        stringArray.push(item);
    }
}
console.log("Mixed Array:", mixedArray);
console.log("String Array:", stringArray);
