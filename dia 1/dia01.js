
let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (numeroUm == stringUm) {
  console.log('As variáveis numeroUm que é do tipo', (typeof numeroUm), 'e stringUm que é do tipo',(typeof stringUm), 'tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (numeroTrinta == stringTrinta) {
  console.log('As variáveis numeroTrinta que é do tipo',(typeof numeroTrinta), 'e stringTrinta que é do tipo',(typeof stringTrinta), 'tem o mesmo valor mas tipos diferentes')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (numeroDez == stringDez) {
  console.log('As variáveis numeroDez que é do tipo',(typeof numeroDez), 'e stringDez que é do tipo',(typeof numeroTrinta), 'tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}
