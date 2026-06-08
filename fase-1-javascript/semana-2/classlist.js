const texto = document.querySelector("#texto")
const botaoDestacar = document.querySelector("#botao-destacar")

function destacarTexto() {
  if(texto.classList.contains("destacado")){
  texto.classList.remove("destacado")
  } else {
  texto.classList.add("destacado")
  }
}

botaoDestacar.addEventListener("click", destacarTexto)
