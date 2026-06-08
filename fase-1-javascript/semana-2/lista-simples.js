const campoTarefa = document.querySelector("#campo-tarefa")
const botaoAdicionar = document.querySelector("#botao-adicionar")
const listaTarefas = document.querySelector("#lista-tarefas")

function adicionarTarefa() {
  if (campoTarefa.value === "") {
    campoTarefa.placeholder = "Escreva uma tarefa"
    } else {
  const item = document.createElement("li")
  item.textContent = campoTarefa.value
  listaTarefas.appendChild(item)
  campoTarefa.value = ""
  }
}

function campoTarefaEnter(event) {
   if (event.key === "Enter") {
    adicionarTarefa()
  } 
}

botaoAdicionar.addEventListener("click", adicionarTarefa)
campoTarefa.addEventListener("keydown", campoTarefaEnter)