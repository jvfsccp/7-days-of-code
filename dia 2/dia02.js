
const prompt = require("readline-sync");

const nome = prompt.question("Qual o seu nome?");
const idade = prompt.question("Quantos anos você tem?");
const linguagem = prompt.question(
  "Qual linguagem de programação você está estudando?"
);

console.log(
  "Olá",
  nome,
  ", você tem",
  idade,
  "anos e já está aprendendo",
  linguagem,
  "!"
);

// Se você quiser se aprofundar no assunto de hoje, eu tenho mais um exercício para você.

// Mas ele é 100% opcional.

// Você vai complementar o código para que, depois de exibir a mensagem anterior, o programa pergunte:

// Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.

// E aí, dependendo da resposta, ele deve mostrar uma das seguintes mensagens:

// 1 > Muito bom! Continue estudando e você terá muito sucesso.
// 2 > Ahh que pena... Já tentou aprender outras linguagens?

const gostaDeEstudar = prompt.question(
  `Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`
);

switch (gostaDeEstudar) {
  case "1":
    console.log("Muito bom! Continue estudando e você terá muito sucesso.");
    break;
  case "2":
    console.log("Ahh que pena... Já tentou aprender outras linguagens?");
    break;
}
