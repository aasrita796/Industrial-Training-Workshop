//Functions --> Used to run collection of stmts

//Types of Functions
//1. Function Declaration
//2. Function Expression
//3. Arrow Function

//Function Declaration
function greet() 
{
    console.log("Good Morning"); 
}
greet(); //Calling the function


//Function Expression
let greet2 = function() 
{
    console.log("Good Afternoon");
}
greet2(); 

//Arrow Function
let greet3 = () => 
{
    console.log("Good Evening");
}
greet3();