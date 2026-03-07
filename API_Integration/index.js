// https://api.ipoalerts.in/ipos?status=open --> get method --> fetch the ipos
//api key: f00ef8c75cd850f1e8f38c706599ae05e1db3cf52cf75092b83e69ef2ac7455d
//asunc await --> used to wait for a promise to resolve before moving to the next line of code

async function fetchIpos(){
    //we can integrate api using fetch method (built in js method). In reactjs axios(library) 
    let response = await fetch("https://jsonplaceholder.typicode.com/todos", {
        headers: {
            "X-API-KEY": "f00ef8c75cd850f1e8f38c706599ae05e1db3cf52cf75092b83e69ef2ac7455d",
            "Content-Type": "application/json",
        },
    });
    let data =await response.json();
    console.log(data);
    //console.log(response);
    displayData(data);  
}
function displayData(todos){
    todos.map((todo, index) => {
        let divObj = document.createElement("div");
        divObj.className = "title";
        divObj.innerHTML = todo.title;
        document.body.appendChild(divObj);
    })
}
fetchIpos();

//JSON --> JAVASCRIPT OBJECT NOTATION
