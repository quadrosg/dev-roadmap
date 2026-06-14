const botaoBuscar = document.querySelector("#botao-buscar")
const campoFiltro = document.querySelector("#campo-filtro")
const listaPosts = document.querySelector("#lista-posts")

let posts = []

function mostrarPostsNaTela(listaDePosts) {
  listaPosts.textContent = ""

  for (let i = 0; i < listaDePosts.length; i += 1) {
  const card = document.createElement("article")
  const titulo = document.createElement("h2")
  const corpo = document.createElement("p")
  
  titulo.textContent = listaDePosts[i].title
  corpo.textContent = listaDePosts[i].body
  
  card.appendChild(titulo)
  card.appendChild(corpo)
  listaPosts.appendChild(card)
  }
}

async function buscarPosts() {
  if (posts.length !== 0) {
    mostrarPostsNaTela(posts)
  } else {
      try {
          listaPosts.textContent = "Buscando posts..."
          const resposta = await fetch("https://jsonplaceholder.typicode.com/posts")

          if (!resposta.ok) {
            throw new Error("Resposta invalida da API")
          }

          const postListReceived = await resposta.json()
          posts = postListReceived
          mostrarPostsNaTela(posts)

        } catch (erro) {
          listaPosts.textContent = "Erro ao buscar posts"
        }
  }
}

function filtrarPosts() {
  if (posts.length === 0) {
  return
}

  const textoFiltrado = campoFiltro.value.toLowerCase()

  if (textoFiltrado === "") {
    mostrarPostsNaTela(posts)
  return
}

  const postFiltrado = posts.filter((post) =>
    post.title.toLowerCase().includes(textoFiltrado)
  )
  
  if (postFiltrado.length === 0){
    listaPosts.textContent = "Nenhum post encontrado"
  } else {
    mostrarPostsNaTela(postFiltrado)
  }
}

botaoBuscar.addEventListener("click", buscarPosts)
campoFiltro.addEventListener("input", filtrarPosts)
