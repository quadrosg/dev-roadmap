type DadosFormulario = {
  nome: string
  email: string
  mensagem: string
}

function validarFormulario(dados: DadosFormulario): string {
  if (dados.nome.trim() === "" || dados.email.trim() === "" || dados.mensagem.trim() === "") {
    return "Um ou mais dados estao vazios"
  } else {
    return "Validacao completa"
  }
}

const formulario = document.querySelector("#formulario-contato") as HTMLFormElement
const campoNome = document.querySelector("#nome") as HTMLInputElement
const campoEmail = document.querySelector("#email") as HTMLInputElement
const campoMensagem = document.querySelector("#mensagem") as HTMLTextAreaElement
const resultado = document.querySelector("#resultado") as HTMLParagraphElement

formulario.addEventListener("submit", guardarFormulario)

function guardarFormulario(event: SubmitEvent){
  event.preventDefault()
  const dados ={
    nome: campoNome.value,
    email: campoEmail.value,
    mensagem: campoMensagem.value,
  }
  const mensagem = validarFormulario(dados)
  resultado.textContent = mensagem
  if (mensagem === "Validacao completa"){
    campoNome.value = ""
    campoEmail.value = ""
    campoMensagem.value = ""
  }
}