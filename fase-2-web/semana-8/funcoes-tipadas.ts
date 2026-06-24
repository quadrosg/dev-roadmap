function apresentarPessoa(nome: string, idade: number): string {
  return `Meu nome e ${nome} e eu tenho ${idade} anos.`
}

console.log(apresentarPessoa("Guilherme", 30))

function idadeEmDezAnos (idade:number):number {
  return idade + 10
}