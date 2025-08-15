// Dados de exemplo dos posts
let posts = [
    {
        text: "Este é o primeiro post",
        category: "Notícias",
        image: "https://placedog.net/150?random=1",
        date: "12/10/2021 12:00:00"
    },
    {
        text: "Este é o segundo post",
        category: "Dicas",
        image: "https://placedog.net/150?random=2",
        date: "12/10/2022 12:00:00"
    },
    {
        text: "Este é o terceiro post teste",
        category: "Eventos",
        date: "12/10/2023 12:00:00"
    }
];

// Every time window load
window.onload = function(){
    showPost()

    document.querySelector("#postForm").addEventListener("submit", addPost)
}

// Create
function addPost(e){
    e.preventDefault()

    const textPost = document.querySelector('#postText').value
    const categotyPost = document.querySelector('#postCategory').value
    const imagePost = document.querySelector('#postImage').value

    const newPost = {
        text: textPost,
        category: categotyPost,
        image: imagePost,
        date: new Date().toLocaleString()
    }

    posts.unshift(newPost)
    document.querySelector("#postForm").reset() 
    showPost()
}

// Read
function showPost(){
    // Get element where tweets would be insert
    const listPostEl = document.querySelector('#postList')
    listPostEl.innerHTML = ''

    // Passando pelo array e criando um twwet para cada um
    posts.forEach( item =>{
        const cardPost = document.createElement('div') //Creating element
        cardPost.classList.add('card-post')

        cardPost.innerHTML = `

            <h2>${item.text}</h2>
            <img src='${item.image}'/>
            <h5>Categoria: ${item.category}</h5>
            <h6>Data e Hora: ${item.date}</h6>
            <button>Editar</button>
            <button>Apagar</button>
        `
        listPostEl.append(cardPost)
    })

}

// Update
function editPost(){}

// Delete
function deletePost(){}
