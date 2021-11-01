async function getApiData(api_URL) {
    // try {
    //     const response = await fetch();
    //     if( response.status === 200){
    //         let data  =  response.body;
    //         console.log(data);
    //     }
    // } catch (error) {
    //     console.log(error);
    // }



    let response = await fetch(api_URL);
    let todos = await response.json();
     console.log(todos);
    
}



getApiData('https://jsonplaceholder.typicode.com/todos');