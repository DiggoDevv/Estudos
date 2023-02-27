//Busca binária: é uma bisca que divide a lista em duas partes e procura em uma das duas
//Algoritmo de ver se um número é maior ou menor que um buscado na lista
//A busca binária utiliza recursão de uma forma similar ao merge sort e ao quick sort para dividir o array em partes cada vez menores.

const listaLivros = require('./arrayOrdenado');

function busca(array, de, ate, valorBuscado){
    const meio = Math.floor((de + ate) / 2 );
    const atual = array[meio];
    // se selecionar um valor acima que todos os da lista
    if (de > ate) {
        return -1;
    }
   //se for igual ao numero procurado(acertar)
    if (valorBuscado === atual.preco) {
        return meio;
    }

    if (valorBuscado < atual.preco) {
        return busca(array, de, meio - 1, valorBuscado);
        //descarta da direita(maior que o valor buscado) para frente se n for o valor buscado
    }
    if (valorBuscado > atual.preco) {
        return busca(array, meio + 1, ate, valorBuscado);
        //descarta da esquerda(menos que o valor buscado) para frente se n for o valor buscado
    }
}

console.log(busca(listaLivros, 0, listaLivros.length - 1, 60))