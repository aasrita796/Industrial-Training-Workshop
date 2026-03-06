//Methods --> it is a function which is executed on the objects.
//push(), pop(), slice(), map(), filter(), splice(), shift(), unshift(), indexOf(), lastIndexOf(), includes(), find(), findIndex(), forEach(), reduce() etc. are the methods of array.

let arr = [1, 2, 3, 4, 5, 6];
console.log(typeof arr);

arr.push(7); //Adds an element to the end of the array
console.log(arr);

arr.pop(); //Removes the last element from the array
console.log(arr);

let newarr = arr.slice(1, 4); //Returns a shallow copy of a portion of an array into a new array object
console.log(newarr);

//map method --> looping function
arr.map((e) => {
    console.log(e * 2);
});
//OR(explicit return) --> with curly braces and return keyword
let arr1 = arr.map((e) => {
    return e*2;
});
console.log(arr1);
//OR(implicit return) --> without curly braces and return keyword
let arr2 = arr.map(e => e*2);
console.log(arr2);

//filter method --> used to filter an array based on the condition provided.
//explicit return
let arr3 = [1,2,3,4,5,6];
let filteredArr = arr3.filter((ele, index) => {
    return ele > 3;
});
console.log(filteredArr);
//implicit return
let farr = arr3.filter((ele, index) => ele > 3);
console.log(farr);

//find method
let arr4 = [1,2,3,4,5,6];
let findEle = arr4.find((ele) => ele === 3);
console.log(findEle); //returns the first element that satisfies the condition

let ff = arr4.find((ele) => {
    return ele === 3;
});
console.log(ff);
