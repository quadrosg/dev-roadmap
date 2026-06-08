const titulo = document.querySelector("#titulo")
const mensagem = document.querySelector("#mensagem")
const botao = document.querySelector("#botao")

console.log(titulo)
console.log(mensagem)
console.log(botao)

function trocarMensagem() {
  if (mensagem.textContent === "Nova mensagem"){
  mensagem.textContent = "Mensagem original"
  }
  else {
    mensagem.textContent = "Nova mensagem"
  }
  if (titulo.textContent === "APRENDENDO dom 2"){
  titulo.textContent = "DOM em acao"
  }
  else {
    titulo.textContent = "APRENDENDO dom 2"
  }
}

botao.addEventListener("click", trocarMensagem)
