//ponto extra alunos
// const notas = [10, 9.5, 8, 7, 6];

// const notasAtualizadas = notas.map((nota,)=> {
//     return nota + 1 >= 10 ? 10 : nota + 1 ;
//                       //"?" = condição
// });
// console.log(notasAtualizadas);

// Multiplicação de números:
const arrayNums = [1, 2, 3, 4]
////função callback
function multiplicaPorDez(num) {
    return num * 10
}
const arraySomada = arrayNums.map(multiplicaPorDez)


console.log(arraySomada)

//o .map é util para reescrever os valores de totas as arrays
// o .map também usa o callback

//diferença ".map" do "forEach(): 
//O retorno do método
//Enquanto o método forEach não tem um retorno, o método map() pode retornar um array se a função callback retornar algum valor.