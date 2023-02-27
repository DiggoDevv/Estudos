import fs from 'fs';
import chalk from 'chalk';
//Forma atualizada do require


function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
                   //... = permite que um objeto interavel seja expandivel
                             //matchAll : combina todas as ocorrencias
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))
    return resultados.length !== 0 ? resultados : 'Não há links no arquivos'
                          // !== = se for diferente //: = falso
}

function trataErro(erro){
    console.log(erro);
    throw new Error(chalk.red(erro.code, 'Não há arquivo no diretório'));
// throw= jogar,lançar
}

//async/await

async function pegaArquivo(caminhoDoArquivo) {
    try{
        //async(assincrona) = avisa que é uma função assincrona, avisa que dentro do bloco da função
        //vai existir um código assincrono que tem que ser resolvido antes que retorne o resultado da função
            const enconding = 'utf-8';
            const texto = await fs.promises.readFile(caminhoDoArquivo, enconding)
                        //await = aguardar/esperar
        //await no cod= pegar o retorno para resolver, depois que tiver os dados passar para variavel texto/         
    return extraiLinks(texto)
    } catch (erro) {
        trataErro(erro)
    }
}

//promisses com then(), feita de forma assincrona

// function pegaArquivo(caminhoDoArquivo){
    //     const enconding = 'utf-8'
    //     fs.promieses
    //     //promises(promessa): código assincrono, o que é prometido chegar, executar
    //     .readFile(caminhoDoArquivo, enconding)
    //   // .readFile,then e catch são encadeados
    //     .then((texto) => console.log(chalk.green(texto)))
//     //.then(então) = serve para encadear código assincrono
//       // 1°P = recebe callback
//     .catch((erro) => trataErro(erro))
//     //catch = pegar
//            //1°P= passar função callback  

// //readfile devolve uma promessa, 
// //que vai ser tratada/resolvida pela .then, se durante esse processo tiver algum erro
// //vai para o .catch para ser mandada para a função trataErro
// }

//DIFERENÇAS: async para then()
//then() é escrita de forma mais funcional, mas a performace é a mesma
//async forma parecida com codigo sincrono, 
//então ele faz com que codigo sincrono vire cod assincrono alterando poucas coisas.f

export default pegaArquivo