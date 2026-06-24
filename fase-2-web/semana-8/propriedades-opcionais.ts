interface Pessoa {
  nome: string
  idade: number
  estudando: boolean
  profissao?: string
}

const pessoa1: Pessoa = {
  nome: "Guilherme",
  idade: 30,
  estudando: true,
}

const pessoa2: Pessoa = {
  nome: "Ana",
  idade: 28,
  estudando: false,
  profissao: "designer",
}

console.log(pessoa1)
console.log(pessoa2)
