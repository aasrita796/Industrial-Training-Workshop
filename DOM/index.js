let btn1Obj = document.getElementById("btn1");
let btn2Obj = document.getElementById("btn2");
let bodyObj = document.getElementsByTagName("body")[0];
//createElement --> used to create an element in the DOM
let para1Obj = document.createElement("p");
let divObj = document.getElementById("container");
//let divObj = document.createElement("div");

console.log(typeof btn1Obj);
console.log(typeof btn2Obj);
console.log(bodyObj);


//click --> addEventListener
//callback function --> function which is passed as an argument to another function
btn1Obj.addEventListener("click", function() {
    console.log("Editor's Pick");
    //console.log(para1Obj);    
    //InnerHtml or InnerText --> used to add content inside an element
    para1Obj.innerHTML = "This is the content of the Editor's Pick section";
    para1Obj.style.color = "red";
    //appendChild --> used to add an element as a child to another element
    //bodyObj.appendChild(para1Obj);
    document.body.appendChild(para1Obj);
});
btn2Obj.addEventListener("click", function() {
    console.log("For you");
    //console.log(para1Obj);
    para1Obj.innerHTML = "This is the content of the For you section";
    para1Obj.style.color = "blue";
    document.body.appendChild(para1Obj);
});