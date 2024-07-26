
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
