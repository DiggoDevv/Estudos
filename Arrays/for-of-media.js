const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;
 
for (let nota of notas){
    //"para cada elemento de notas, execute o código que está dentro das chaves
    somaDasNotas += nota
}
const media = somaDasNotas / notas.length;

console.log(`A média das notas é de ${media}.`);
