type CursoStatus = "iniciado" | "em andamento" | "concluido"

interface Curso {
  nome: string
  status: CursoStatus
}

const curso1: Curso = {
  nome: "Frontend",
  status: "em andamento",
}

console.log(curso1)
