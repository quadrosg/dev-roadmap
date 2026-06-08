const campoTarefa = document.querySelector("#campo-tarefa")
const botaoAdicionar = document.querySelector("#botao-adicionar")
const listaTarefas = document.querySelector("#lista-tarefas")
const tarefasSalvas = localStorage.getItem("tarefas")

let tarefas = []

if (tarefasSalvas !== null) {
  tarefas = JSON.parse(tarefasSalvas)
}

function salvarTarefasNoNavegador(textoDaTarefa) {
  tarefas.push(textoDaTarefa)
  localStorage.setItem("tarefas", JSON.stringify(tarefas))
}

function adicionarTarefaNaTela(textoDaTarefa) {
  const item = document.createElement("li")
  item.textContent = textoDaTarefa
  item.addEventListener("click", removeItemDaLista)
  listaTarefas.appendChild(item)
}

for (let i = 0; i < tarefas.length; i += 1) {
  adicionarTarefaNaTela(tarefas[i])
}

function adicionarTarefa() {
  if (campoTarefa.value === "") {
    campoTarefa.placeholder = "Digite uma tarefa"
  } else {
    adicionarTarefaNaTela(campoTarefa.value)
    salvarTarefasNoNavegador(campoTarefa.value)
    campoTarefa.value = ""
  } 
}

function adicionarTarefaEnter(event) {
  if (event.key === "Enter") {
  adicionarTarefa()
  } 
}

function removeItemDaLista (event) {
  event.target.remove()

  tarefas.splice(tarefas.indexOf(event.target.textContent),1)
  localStorage.setItem("tarefas", JSON.stringify(tarefas))
}

botaoAdicionar.addEventListener("click", adicionarTarefa)
campoTarefa.addEventListener("keydown", adicionarTarefaEnter)