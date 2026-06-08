const campoNome = document.querySelector("#campo-nome")
const botaoMostrar = document.querySelector("#botao-mostrar")
const resultado = document.querySelector("#resultado")

function campoNomeEnter(event) {
if (event.key === "Enter"){
  mostrarNome()
}
}

function mostrarNome() {
  if (campoNome.value==="") {
    campoNome.placeholder="Digite um nome"
    resultado.textContent="Digite um nome"
  }
  else {
  resultado.textContent = campoNome.value
  campoNome.value = ""
  }
  }

botaoMostrar.addEventListener("click", mostrarNome)
campoNome.addEventListener("keydown", campoNomeEnter)