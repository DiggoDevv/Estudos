//juntando duas listas já ordenadas por preços em uma só

const { edGalho, edFolha } = require('./arrays');

function juntalistas(lista1, lista2) {
    let listaFinal = []; 
    let posicaoAtualLista1 = 0;
    let posicaoAtualLista2 = 0;
    let atual = 0;
// enquanto
    while (posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length) {
        let produtoAtualLista1 = lista1[posicaoAtualLista1];
        let produtoAtualLista2 = lista2[posicaoAtualLista2];  
//essas duas variaveis foram criadas para acessar o valor do indice de um array na posição que é reletiva ao número
    console.log(`comparando ${produtoAtualLista1.titulo} com ${produtoAtualLista2.titulo}`)
if(produtoAtualLista1.preco < produtoAtualLista2.preco) {
                     // .preco para acessar a propriedade de preco e ver o seu valor
listaFinal[atual] = produtoAtualLista1
posicaoAtualLista1++;
  } else {
    listaFinal[atual] = produtoAtualLista2
    posicaoAtualLista2++;
  }

  atual++;
 }
 //verificar sobra de uma das listas e ordena-la
 while (posicaoAtualLista1 < lista1.length) {
    listaFinal[atual] = lista1[posicaoAtualLista1];
    posicaoAtualLista1++;
 }
 while (posicaoAtualLista2 < lista2.length) {
    listaFinal[atual] = lista2[posicaoAtualLista2];
    posicaoAtualLista2++;
    atual++;
 }


    return listaFinal  
}

console.log(juntalistas(edGalho, edFolha))