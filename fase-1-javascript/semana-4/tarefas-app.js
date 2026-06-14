const campoTarefa = document.querySelector("#campo-tarefa")
const botaoAdicionar = document.querySelector("#botao-adicionar")
const listaTarefas = document.querySelector("#lista-tarefas")
const mensagemVazia = document.querySelector("#mensagem-vazia")

const CHAVE_TAREFAS = "semana4_tarefas_app"

let tarefas = []

function atualizarMensagemVazia() {
  if (tarefas.length === 0) {
    mensagemVazia.style.display = "block"
  } else {
    mensagemVazia.style.display = "none"
  }
}

function salvarTarefas() {
  localStorage.setItem(CHAVE_TAREFAS, JSON.stringify(tarefas))
}

function adicionarTarefaNaTela(textoDaTarefa) {
  const item = document.createElement("li")
  item.textContent = textoDaTarefa
  listaTarefas.appendChild(item)
  
  item.addEventListener("click", function () {
    item.remove()
    tarefas.splice(tarefas.indexOf(textoDaTarefa), 1)
    salvarTarefas()
    atualizarMensagemVazia()
  })
}

function carregarTarefasSalvas() {
  const tarefasSalvas = localStorage.getItem(CHAVE_TAREFAS)
  if (tarefasSalvas === null) {
  } else {
  tarefas = JSON.parse(tarefasSalvas)
  for (let i = 0; i < tarefas.length; i += 1) {
    adicionarTarefaNaTela(tarefas[i])
  }
  }
  atualizarMensagemVazia()
}

function adicionarTarefa() {
  let textodigitado = ""
  if (campoTarefa.value === "") {
    campoTarefa.placeholder = "Adicione uma tarefa"
  } else {
  textodigitado = campoTarefa.value
  tarefas.push(textodigitado)
  salvarTarefas()
  adicionarTarefaNaTela(textodigitado)
  atualizarMensagemVazia()
  campoTarefa.value = ""
  }
}

botaoAdicionar.addEventListener("click", adicionarTarefa)

carregarTarefasSalvas()
