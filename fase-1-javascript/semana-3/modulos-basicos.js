import { somar, multiplicar, subtrair } from "./utilidades.js"

const resultado = document.querySelector("#resultado")

function mostrarResultado() {
  const resultadoSoma = somar(2, 3)
  const resultadoMultiplicacao = multiplicar(4, 5)
  const resultadoSubtracao = subtrair (10, 4)

  resultado.textContent =
    "Soma: " + resultadoSoma + " | Multiplicacao: " + resultadoMultiplicacao + " | Subtracao: " + resultadoSubtracao
}

mostrarResultado()
