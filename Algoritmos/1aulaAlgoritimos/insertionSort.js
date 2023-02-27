const livros = require('./listaLivros')

function insertionSort(lista){

    for(let atual = 0; atual < lista.length; atual++) {
        let analise = atual;
        while (lanalise > 0 && ista[analise].preco < lista[analise - 1].preco ){
    //  while = enquanto     
    let itemAnalise = lista[analise];
    let itemAnterior = lista[analise - 1]; 
    livros[analise - 1] = itemAnterior
    livros[analise - 1] = itemAnalise  

            analise--
        }
    }
    console.log(lista)
}
insertionSort(livros);
