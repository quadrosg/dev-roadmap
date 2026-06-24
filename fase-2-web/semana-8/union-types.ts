let statusCurso: "iniciado" | "em andamento" | "concluido" | "pausado" = "em andamento"

function mostrarStatus(status: "iniciado" | "em andamento" | "concluido" | "pausado"): string {
  return `O curso está ${status}.`
}

console.log(statusCurso)
console.log(mostrarStatus(statusCurso))
