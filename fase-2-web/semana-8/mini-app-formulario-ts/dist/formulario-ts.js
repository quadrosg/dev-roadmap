"use strict";
function validarFormulario(dados) {
    if (dados.nome.trim() === "" || dados.email.trim() === "" || dados.mensagem.trim() === "") {
        return "Um ou mais dados estao vazios";
    }
    else {
        return "Validacao completa";
    }
}
const formulario = document.querySelector("#formulario-contato");
const campoNome = document.querySelector("#nome");
const campoEmail = document.querySelector("#email");
const campoMensagem = document.querySelector("#mensagem");
const resultado = document.querySelector("#resultado");
formulario.addEventListener("submit", guardarFormulario);
function guardarFormulario(event) {
    event.preventDefault();
    const dados = {
        nome: campoNome.value,
        email: campoEmail.value,
        mensagem: campoMensagem.value,
    };
    const mensagem = validarFormulario(dados);
    resultado.textContent = mensagem;
    if (mensagem === "Validacao completa") {
        campoNome.value = "";
        campoEmail.value = "";
        campoMensagem.value = "";
    }
}
