// procurar o caminho do arquivo
//Um caminho é onde se localiza um arquivo ou diretório (que também chamamos de pasta) no sistema de arquivos de um sistema operacional.
// é importante diferenciar caminho relativo de caminho absoluto, além de como acessá-los.
import chalk from 'chalk';
import pegaArquivo from './index.js';
import fs from 'fs';
import listaValidada from './http-validacao.js';
const caminho = process.argv;

async function imprimeLista(valida, resultado, identificador = '' ){ 
    if (valida) {
        console.log(chalk.yellow('lista validada'),
        chalk.black.bgGreen(identificador),
        await listaValidada(resultado)); 
    }else {
        
        console.log(chalk.yellow('lista de links'),
        chalk.black.bgGreen(identificador),
        resultado);
    }
}

//função para receber o caminho que vai ser passado
async function processaTexto(argumentos){
    const caminho = argumentos[2];
    const valida = argumentos[3] === '--valida';

    //tente fazer
    try {
        fs.lstatSync(caminho);
    } catch (erro) {
        if (erro.code === 'ENOTFOUND'){
            console.log('arquivo ou diretório não existe')
            return
        }
    }

    //se o caminho passado for um arquivo...
    if(fs.lstatSync(caminho).isFile()){   
        const resultado = await pegaArquivo(argumentos[2]);
    imprimeLista(valida, resultado)
    }else if (fs.lstatSync(caminho).isDirectory()){
    // se o caminho for um diretorio...
    const arquivos = await fs.promises.readdir(caminho)
    arquivos.forEach(async(nomeDeArquivo) => {
        const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`)
        imprimeLista(valida, lista, nomeDeArquivo)
    })
    }
}
processaTexto(caminho);
