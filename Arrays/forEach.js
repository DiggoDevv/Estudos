const notas = [10,6.5, 8, 7.5]

let somaDasNotas = 0;

// o paramêtro obrigatoria de uma forEach é uma função que recebe o elemento chamada de "callback" vai ser executada para cada elemento do array, sendo que pode receber de 1 a 3 argumentos; o elemento, o índice e o array atual, respectivamente.
//forEach pode dar o valor do elemento junto de seu indice
// forEach é como se fosse um for of melhorado
//Em português, callback significa "chamar de volta". tem esse nome porque é uma função que estamos guardando de alguma forma na lógica interna do forEach e ela vai ser chamada de volta em determinados momentos. Mais especificamente, ela será chamada para cada elemento do array de notas.
notas.forEach(function (nota, indice) {
    somaDasNotas += nota;
});
const media = somaDasNotas / notas.length;

console.log(`A média das notas é de ${media}.`);

//forEach() é um método de array, significa que esta função foi desenvolvida para trabalhar apenas com esse tipo de dado - no caso, com arrays.


