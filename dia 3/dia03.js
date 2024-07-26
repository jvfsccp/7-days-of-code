const prompt = require("readline-sync");

let areaUser = prompt.question(
  "Qual das seguintes áreas você deseja seguir: FrontEnd ou BackEnd?"
);

if (areaUser === "FrontEnd") {
  langUser = prompt.question(
    "Para se apronfundar na área, deseja aprender React ou Vue?"
  );
} else if (areaUser === "BackEnd") {
  langUser = prompt.question(
    "Para se apronfundar na área, deseja aprender C# ou Java?"
  );
}

let comoDesejaSeguir = prompt.question(
  `Deseja seguir se especializando na área de ${areaUser} (Digite 1) ou deseja seguir se desenvolvendo para se tornar Fullstack? (Digite 2)`
);

if (comoDesejaSeguir == 1) {
  console.log("Parabéns, boa sorte na sua jornada na área", areaUser, "!");
} else if (comoDesejaSeguir == 2) {
  console.log("Que legal! Desenvolvedor Fullstack, hein? Boa sorte!");
}

let tecnologia = prompt.question(
  "Quais são as tecnologias você gostaria de se especializar ou de conhecer?"
);

while (tecnologia) {
  console.log(`Uau! ${tecnologia}, excelente escolha!`);
  tecnologia = prompt.question(
    "Tem mais alguma tecnologia que você gostaria de aprender? Responda com ok caso tenha mais alguma."
  );
  if (tecnologia == "ok") {
    tecnologia = prompt.question(
      "Certo. Qual é a tecnologia que seja aprender?"
    );
  } else {
    console.log(
      "Boa sorte na sua jornada! Espero que tenha conseguido ter te ajudado a aprender e se desenvolver na área de programação."
    );
    break;
  }
}
