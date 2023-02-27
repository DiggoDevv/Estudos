const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
const medias = [10, 8 , 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];
// console.log(listaDeAlunosEMedias)
// juntamos duas listas dentro de uma.

// para acessar um dos elementos dessa lista====
console.log(`A aluna da posiçãoo 1 da lista de alunos é: ${
    listaDeAlunosEMedias[0][1]}`);
    // o "[0]" é para acesar a const alunos dentro da lista que está na posição zero
    // o "[1] acessa a "Juliana" dentro da lista alunos
    console.log(`A nota dessa aluna é ${listaDeAlunosEMedias[1][1]}`)
// agora o primmeio"[1]" é usado para acessar a lista de medias dentro da ListaDeAlunosEMedias
// o segundo "[1]" é para selecionar a nota dela dentro da lista medias