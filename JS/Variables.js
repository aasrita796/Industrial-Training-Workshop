//variables --> let, var, const

let name;//declaration
name = "John";//initialization

//let --> can be reassigned, but cannot be redeclared in the same scope
//reassignment example: name = "Doe"; This is valid because 'name' can be reassigned
//redeclaration example: let name = "Smith"; This will cause an error because 'name' cannot be redeclared in the same scope

var age;//declaration
age = 30;//initialization

//var --> can be reassigned and redeclared in the same scope
//example: var age = 25; This will not cause an error because 'age' can be redeclared in the same scope

const profession = "Developer";//declaration and initialization
//const --> cannot be reassigned or redeclared in the same scope

name = "Doe"; //reassignment of 'name' is valid
age = 25; //reassignment of 'age' is valid

console.log(name); 
console.log(age);
console.log(profession); 
