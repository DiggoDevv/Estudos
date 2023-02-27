const listaLivros = require('./array')
function encontraMenores(pivo, array) {
  let menores = 0;
  for(let atual = 0; atual < array.length; atual++) {
    let produtoAtual = array[atual]
    if (produtoAtual.preco < pivo.preco) {
      menores++
    }
  }
  trocaLugar(array, array.indexOf(pivo), menores)
  return array
}
//reposicionando os valores
function trocaLugar(array, de, para) {
    const elem1 = array[de]
    const elem2 = array[para]
    array[para] = elem1
    array[de] = elem2
  }
//ordenando os valores

function divideNoPivo(array){       // PFV NÃO ERRE MAIS A SINTAXE DE 'LENGTH'
    let pivo = array[Math.floor(array.length / 2)];
    //essa função vai se mpre pegar o do meio e o posiciona-lo
    console.log(pivo);
    encontraMenores(pivo, array);
    let valoresMenores = 0;

    for(let analisando = 0; analisando < array.lenght; analisando++){
    let atual = array[analisando];
    if(atual.preco <= pivo.preco && atual !== pivo) {
                                      // !== : atual não pode ser o pivo
        trocaLugar(lugar, analisando, valoresMenores)
        valoresMenores++
        }
    }

    return array

}
console.log(divideNoPivo(listaLivros));

module.exports = trocaLugar;