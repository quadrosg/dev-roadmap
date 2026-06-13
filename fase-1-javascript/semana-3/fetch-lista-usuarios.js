const botaoBuscar = document.querySelector("#botao-buscar")
const listaUsuarios = document.querySelector("#lista-usuarios")

async function buscarUsuarios() {
  try {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users")

    if (!resposta.ok) {
      throw new Error("Resposta invalida da API")
    }

    const userListReceived = await resposta.json()

    listaUsuarios.textContent = ""

    for (let i = 0; i < userListReceived.length; i += 1) {
      const item = document.createElement("li")
      item.textContent = userListReceived[i].name + " - " + userListReceived[i].email
      listaUsuarios.appendChild(item)
    }
  } catch (erro) {
    listaUsuarios.textContent = "Erro ao buscar usuarios"
  }
}

botaoBuscar.addEventListener("click", buscarUsuarios)