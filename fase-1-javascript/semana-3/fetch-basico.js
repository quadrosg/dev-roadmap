const botaoBuscar = document.querySelector("#botao-buscar")
const resultado = document.querySelector("#resultado")

async function buscarUsuario() {
  try {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users/1")

    if (!resposta.ok) {
      throw new Error("Resposta invalida da API")
    }

    const usuario = await resposta.json()
    resultado.textContent = usuario.name
  } catch (erro) {
    resultado.textContent = "Erro ao buscar usuario"
  }
}

botaoBuscar.addEventListener("click", buscarUsuario)