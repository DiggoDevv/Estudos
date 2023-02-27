const notas  = [7, 7, 8, 9];

// const novasNotas = notas;

// novasNotas.push(10);

// console.log(`As novas notas são ${novasNotas}`);
// console.log(`As notas originais são ${notas}`);
//O array original também foi alterado
// isso é causado pelo const "novasNotas = notas"
// quando é feita uma atribuição direta utilizando o sinal de igual, o js define as duas como se fosse a mesma coisa

//resolvendo isso:
const novasNotas = [...notas]
// com essa função "..." é como se estivesse somente copiando o valor dentro do array, assim n modifica o original
// ou seja [...notas] é = [7, 7, 8, 9] que é o valor da array original copiada ali dentro
// um "ctrlC ctrlV" basicamente
novasNotas.push(10);
        console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);

//IMPORTANTE:
//esse comportamento não acontece com strings, números e booleanos, que são tipos primitivos do JavaScript.