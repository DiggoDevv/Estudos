const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];
//splice= altera ou remove um item selecionado do array
//nomes.splice(1,  2,)
     //1= índice do elemento que quer q remova    //2= quantidade de remoção após o índice selecionado   //elemento adicionado
    //  nomes.splice (1,2,"Rodrigo")
     //remove a "Ana" e o "Caio" e coloca o "Rodrigo" no lugar.
    //  console.log(nomes)

     animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠')
animaisDoAquario.splice(3,2,'🐟')

console.log(animaisDoAquario)
// Certo! No aquário, o golfinho e o tubarão não estão presentes por conta do código
// animaisDoAquario.splice(3,2,'🐟'), que remove dois elementos do array, a partir da posição 3. 
// Sendo assim, os elementos com índice 3 e 4 e os dois peixes entraram nas posições definidas pelo splice.