const campoNome = document.querySelector("#campo-nome")
const botaoSalvar = document.querySelector("#botao-salvar")
const botaoMostrar = document.querySelector("#botao-mostrar")
const resultado = document.querySelector("#resultado")

function salvarNome() {
  localStorage.setItem("nome", campoNome.value)
}

function mostrarNomeSalvo() {
  const nomeSalvo = localStorage.getItem("nome")
  if (nomeSalvo === null){
  resultado.textContent = "Nenhum nome salvo ainda"
  } else {
  resultado.textContent = nomeSalvo
  }
}

botaoSalvar.addEventListener("click", salvarNome)
botaoMostrar.addEventListener("click", mostrarNomeSalvo)