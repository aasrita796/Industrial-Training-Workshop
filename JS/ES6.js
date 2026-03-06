//Destructuring
let arr = [1, 2, 3, 4, 5];
let[firstValue, secondValue] = arr;
console.log(firstValue); //1
console.log(secondValue); //2

let laptopObj = {
    name: "Dell",
    core: "i7",
    cost: 50000
};
let {name, core} = laptopObj;
console.log(name);

//Template Literals
let name1 = "John";
let age = 30;
console.log(`My name is ${name1} and I am ${age} years old.`);

//rest operator ... --> converting arr to ele
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArr = [...arr1, ...arr2];
console.log(combinedArr); //[1, 2, 3, 4, 5, 6]

//spread operator ... --> converting ele to arr
function sum(...nums) {
    console.log(nums);
}
sum(1,2)
    