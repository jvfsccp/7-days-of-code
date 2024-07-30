const prompt = require ("readline-sync")

let numeroAleatorio = Math.floor(Math.random()*11)
let errou = 0;

console.log(numeroAleatorio)

for (let i=0; i<3; i++) {
    adivinharValor = prompt.question("Tente acertar o número de 0 a 10:")

    if (adivinharValor == numeroAleatorio) {
        console.log("Parabéns, você acertou!")
        break;
    }
    if (numeroAleatorio !== adivinharValor) {
        errou += 1
        console.log("Poxa, tente novamente!")
    }
    if (errou == 3) {
        console.log(`Que pena, você perdeu. O número era ${numeroAleatorio}.`)
    }
}