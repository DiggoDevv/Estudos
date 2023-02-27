const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
    if(listaDeAlunosEMedias[0].includes(aluno)){
        // includes() = confere se o elemento passado por parâmetro está incluso em uma lista;
        // console.log(`${aluno} está cadastrado!`);
      
        //const alunos = listaDeAlunosEMedias[0];
        //const media = listaDeAlunosEMedias[1];
        
        //forma otimizado do do código acima:
        const [alunos, medias] = listaDeAlunosEMedias
            // [0]  // [1]
           //O "const[...,...]" atribui nome para cada um dos elementos/array que está na função ListaDeAlunosEMedias;
    const indice =alunos.indexOf(aluno);
    //o método indexOf() retorna o índice do elemento passado por parâmetro.
    const mediaDoAluno = listaDeAlunosEMedias[1][indice];
    //console.log(mediaDoAluno);
     console.log(`${aluno} tem a média ${mediaDoAluno}`)
    } else {
        console.log("Aluno não encontrado")
    }
}
exibeNomeENota("João");
