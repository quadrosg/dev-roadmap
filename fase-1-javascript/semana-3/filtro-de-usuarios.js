const botaoBuscar = document.querySelector("#botao-buscar")
const campoFiltro = document.querySelector("#campo-filtro")
const listaUsuarios = document.querySelector("#lista-usuarios")

let usuarios = []

function mostrarUsuariosNaTela(listaDeUsuarios) {
 listaUsuarios.textContent = ""

    for (let i = 0; i < listaDeUsuarios.length; i += 1) {
      const item = document.createElement("li")
      item.textContent = listaDeUsuarios[i].name + " - " + listaDeUsuarios[i].email
      listaUsuarios.appendChild(item)
    }
}

async function buscarUsuarios() {
try {
    listaUsuarios.textContent = "Buscando usuarios..."
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users")

    if (!resposta.ok) {
      throw new Error("Resposta invalida da API")
    }

    const userListReceived = await resposta.json()
    usuarios = userListReceived
    mostrarUsuariosNaTela(usuarios)

  } catch (erro) {
    listaUsuarios.textContent = "Erro ao buscar usuarios"
  }
}

function filtrarUsuarios() {
  const nomeFiltrado = campoFiltro.value.toLowerCase()

  const usuariosFiltrados = usuarios.filter((usuario) =>
    usuario.name.toLowerCase().includes(nomeFiltrado)
  )
  if (usuariosFiltrados.length === 0){
   listaUsuarios.textContent = "Nome inexistente na lista" 
  } else {
  mostrarUsuariosNaTela(usuariosFiltrados)
  }
}

botaoBuscar.addEventListener("click", buscarUsuarios)
campoFiltro.addEventListener("input", filtrarUsuarios)