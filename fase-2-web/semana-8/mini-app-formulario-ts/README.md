# Mini app de formulario em TypeScript

## Objetivo

Este projeto existe para praticar um fluxo simples de formulario usando:

- HTML para a estrutura
- CSS para a apresentacao
- TypeScript para tipagem e validacao

## O que o app faz

- captura o envio de um formulario
- impede o recarregamento da pagina
- valida se `nome`, `email` e `mensagem` estao vazios
- mostra uma mensagem de resultado na tela
- limpa os campos quando a validacao passa

## Estrutura

- `formulario-ts.html`
  - estrutura da pagina e do formulario
- `formulario-ts.css`
  - estilos visuais do mini app
- `formulario-ts.ts`
  - logica tipada do formulario
- `dist/formulario-ts.js`
  - arquivo JavaScript gerado pelo compilador TypeScript

## Setup

Na pasta do projeto:

```bash
npm install
npm run build
```

Depois disso, abra:

- `formulario-ts.html`

## O que eu pratiquei aqui

- tipos basicos do TypeScript
- objeto tipado com `type`
- tipagem de retorno de funcao
- tipagem de elementos do DOM
- tipagem do evento de submit
- integracao entre HTML, CSS e TypeScript

## Aprendizados principais

- o navegador nao executa TypeScript diretamente
- primeiro o arquivo `.ts` precisa ser compilado para `.js`
- `querySelector` precisa de ajuda de tipagem quando eu sei qual elemento estou selecionando
- tipar funcoes e dados deixa a validacao mais previsivel
