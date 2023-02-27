//criando um algoritmo para ordenar várias listas desordenadas 
//dividindo elas em partes menores até chegar em 2 partes menores ordenadas
//assim juntando elas e formando uma lista ordenada
const listaLivros = require('./array')

function mergeSort(array, nivelAninhamento = 0) {

//Recursão: Um método em que uma função ou algoritmo chama a si uma ou mais 
// vezes até que se atinja uma condição específica, quando o resultado de 
// repetição é processado desde a última chamada até a primeira.

//Por exemplo, é recursão o efeito de tela infinita que surge em suas chamadas de vídeo
// ou quando você coloca um espelho em frente ao outro. No entanto, temos a possibilidade
// e obrigação de inserir uma verificação que interrompa este comportamento, 
// ou então a função entrará em loop infinito.

    // Vendo como funciona a recursão
    console.log(`nível de aninhamento: ${nivelAninhamento}`)
    console.log(array)

    if(array.length > 1) {
        const meio = Math.floor(array.length / 2);
                  // arrendondar para baixo
        const parte1 = mergeSort(array.slice(0, meio), nivelAninhamento++);
        //cada vez que o array é dividido o mergeSort é chamado novamente até que a chamada do if nao seja mais atendida
        const parte2 = mergeSort(array.slice(meio, array.length),nivelAninhamento ++);
        array = ordena(parte1, parte2);
    }

    return array;
}
//ordenando lista (nova forma atualizada)
function ordena(parte1, parte2) {
    let posicaoAtualParte1 = 0;
    let posicaoAtualParte2 = 0;
    const resultado = [];

    while (posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length){
        let produtoAtualParte1 = parte1[posicaoAtualParte1]
        let produtoAtualParte2 = parte2[posicaoAtualParte2]

        if(produtoAtualParte1.preco < produtoAtualParte2.preco){
            resultado.push(produtoAtualParte1)
                //   push= mandar o parametro passado para o final do array
            posicaoAtualParte1++
        } else {
            resultado.push(produtoAtualParte2)
            // não é preciso usar a varivel atual por que o método push sempre manda pro final do array o elemento passado
            posicaoAtualParte2++
          }
        }
    return resultado.concat(posicaoAtualParte1 < parte1.length
                   //concatenar
         ? parte1.slice(posicaoAtualParte1)
    //   ? para passar o valor(resultado) true do tenario
    : parte2.slice(posicaoAtualParte2))
//  : resultado falso do tenario
    }
console.log(mergeSort(listaLivros))
