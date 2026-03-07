// https://api.ipoalerts.in/ipos?status=open --> get method --> fetch the ipos
//api key: f00ef8c75cd850f1e8f38c706599ae05e1db3cf52cf75092b83e69ef2ac7455d
//asunc await --> used to wait for a promise to resolve before moving to the next line of code

async function fetchIpos(){
    //we can integrate api using fetch method (built in js method). In reactjs axios(library) 
    let response = await fetch("https://api.ipoalerts.in/ipos?status=open", {
        headers: {
            "X-API-KEY": "f00ef8c75cd850f1e8f38c706599ae05e1db3cf52cf75092b83e69ef2ac7455d"
        },
    });
    console.log(response);  
}
fetchIpos();