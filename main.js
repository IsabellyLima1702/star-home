'use strict'

const galeria = document.getElementById('galeria')
const post = document.getElementById('fotoPost')
const curtirComent = document.getElementById('curtidas')


async function pesquisarStories(){
    const url = 'https://back-spider.vercel.app/storys/listarStorys' // url da api 

    const response  = await fetch(url) // fetch -> faz requisições web (conversa com o back)
    const data      = await response.json() // chamar apenas o json
    return data
}

// Função para criar as imgs dentro da DIV 
function criarStories(link){ // Recebe o link da imagem 
    const novaImg = document.createElement('img') // criando nova imagem 
    novaImg.src = link.imagem// Cria a nova image, com a link da foto do API 

    galeria.appendChild(novaImg)
}

async function pesquisarPublicacao(){
    const url = 'https://back-spider.vercel.app/publicacoes/listarPublicacoes' // url da api 

    const response  = await fetch(url) // fetch -> faz requisições web (conversa com o back)
    const data      = await response.json() // chamar apenas o json
    return data
}

function criarPost(link){ // Recebe o link da imagem 
    const novaImg = document.createElement('img') // criando nova imagem 
    const local = document.createElement ('h2')
    const postagem = document.createElement('div')
    const comentario = document.createElement('h3')
    const data = document.createElement ('p')
    const user = document.createElement('p')
    
    novaImg.src = link.imagem// Cria a nova image, com a link da foto do API 
    local.textContent = link.local
    postagem.classList = 'postagem'
    comentario.textContent = link.descricao 
    data.textContent = link.dataPublicacao
    user.textContent = link.id   

postagem.appendChild(user)
postagem.appendChild(local)
postagem.appendChild(novaImg)
postagem.appendChild(comentario)
postagem.appendChild(data)
post.appendChild(postagem)
}

function comentarios(){
    const icon = document.createElement('div')
    icon.className = 'icons'

    const comentario = document.createElement('img')
        comentario.src = 'https://cdn-icons-png.flaticon.com/512/1380/1380338.png'
        icon.appendChild(comentario)
}



async function preencherFotos(){
    const storys = await pesquisarStories()
    const publication = await pesquisarPublicacao()

    storys.forEach (criarStories)
    publication.forEach(criarPost)
}

preencherFotos()