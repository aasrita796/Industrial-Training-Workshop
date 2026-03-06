//key value pairs
let laptopObj = {
    name: "Dell", //name --> property of laptopObj
    core: "i7",   //core --> property of laptopObj
    executeFn: () => { //executieFn --> method of laptopObj
        console.log("Executing the function");
    }
}
//dot notation and [] notation
console.log(laptopObj.core);
console.log(laptopObj["name"]);
console.log(laptopObj.executeFn);
laptopObj.name = "HP";
console.log(laptopObj.name);
laptopObj.executeFn();

let arr = [1, 2, 3, 4, 5];
console.log(arr.length);//length is a property of array and for property we donot use () but for method we use () to call the function

//for in --> used for iterating the objects
//for each --> used for iterating the arrays
for(let eachKey in laptopObj) {
    console.log(eachKey, laptopObj[eachKey]);
    //console.log(laptopObj.eachKey); --> this will not work because eachKey is a variable and not a property of laptopObj
}

for(let eachElement of arr) { //arr --> line 17
    console.log(eachElement);
}
//or
arr.forEach((eachElement) => {
    console.log(eachElement);
});