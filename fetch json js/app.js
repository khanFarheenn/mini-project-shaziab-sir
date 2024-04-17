let url="https://jsonplaceholder.typicode.com/todos";
async function fetchData() {
    try {
    const serverResponse=await fetch(url);
    const jsontoObectResponse = await serverResponse.json();
    console.log(jsontoObectResponse);
    }
    catch(error){
        console.log(error);
    }
    
}
fetchData() 