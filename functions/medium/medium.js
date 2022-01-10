//1.Given an array, your function should return the length of the array.
// Example:
// Input: arrayLength([1,5,3,7,8]) ––> Output: 5

const arrayLength = arr => arr.length;
console.log(arrayLength([1, 5, 3, 7, 8]));
//2. Given an array and an item, your function should return the index at which the item is present.

const indexOfElement = (arr, num) => arr.indexOf(num);
console.log(indexOfElement([1, 6, 3, 5, 8, 9], 3));

// 3. Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
const replace = (arr, num1, num2) => arr.map(num => num === num1 ? num2 : num);
console.log(replace([1, 5, 3, 5, 6, 8], 5, 10));

//4. Given two arrays, your function should return single merged array.

const mergeArray = (arr1, arr2) => ([...arr1, ...arr2]);
console.log(mergeArray([1, 3, 5], [2, 4, 6]));

//5.Given a string and an index, your function should return the character present at that index in the string
const charAt = (str, position) => {
    for (let i = 0; i < str.length; i++) {
        if (i == position) {
            return str[i];
        }
    }
}
console.log(charAt("neoGcamp", 4));

//6. Given two dates, your function should return which one comes before the other.
const minDate = (date1, date2) => {
    let dateOne = date1.split("/");
    let dateTwo = date2.split('/');
    dateOne = dateOne.map(num => Number(num));
    dateTwo = dateTwo.map(num => Number(num));
    if (dateTwo[2] > dateOne[2]) {

        return date1;
    } else if (dateOne[2] > dateTwo[2]) {

        return date2;
    } else if (dateTwo[1] > dateOne[1]) {

        return date1;
    } else if (dateOne[1] > dateTwo[1]) {

        return date2;
    } else if (dateTwo[0] > dateOne[0]) {

        return date1;
    } else if (dateOne[0] > dateTwo[0]) {

        return date2;
    } else return date1;
}
console.log(minDate('02/05/2021', '24/01/2021')) //24/01/2021