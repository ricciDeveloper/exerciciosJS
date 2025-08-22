// ### 🔹 Assíncrono e API
// **10. Consumo de API**  
// Usando `fetch` e a API [JSONPlaceholder](https://jsonplaceholder.typicode.com/users):  
// - Liste no console os nomes dos usuários.  
// - Mostre apenas os 3 primeiros.  
// 📌 *Conceitos: fetch, promises, async/await, arrays (map, slice)*


async function getUsers() {
    const api = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await api.json();

    const response = data.slice(0,3).map(user => user.name);
    console.log(response);
}

getUsers();

//Reforço de conhecimento
async function getPosts() {
    const api = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await api.json();

    const response =  data.slice(0,5).map(posts => ({
        userId:posts.userId, 
        title:posts.title, 
        body:posts.body}));
        
    console.log(response)
}

getPosts();