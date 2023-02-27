const livros = require('./listaLivros');
// chamar a importação da listaLivros.js

function menorValor(arrProdutos, posicaoInicial) {
    let maisBarato = posicaoInicial;
    
    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
      if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
    // Se o produto [atual] for mais barato que o preço em produtos[maisbarato] fazer :
            maisBarato = atual    
        }
    }
    return maisBarato;
}
//para cada looping, vai retornar o valor mais barato e ordenar os indices

module.exports = menorValor;





//Saber o preco mais caro:
// let maisCaro = 0;
// for (let atual = 0; atual < livros.length; atual++) {
//  if (livros[atual].preco > livros[maisCaro].preco) {
//    maisCaro = atual;
//  }
// }
