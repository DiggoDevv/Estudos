const notas = [10, 6, 8, 5.5, 10]

notas.pop();
//remove um elemento da nota, quando deixado em branco remove o ultimo

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length
// o JS segue a regra matématica, se deixar a soma com a divisão ele vai dividir primeiro
// console.log(media)
console.log(`sua média é ${media}.`);