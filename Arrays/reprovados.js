const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

//método Filter
const reprovados = alunos.filter((_, indice) =>{
                     //alteração (alunos,indice),
//Quando não utilizamos o primeiro parâmetro, utilizamos o underline (_) em vez de nomear o parâmetro,
//Só de fazer isso o JS vai saber que não estamos utilizando esse parâmetro.
//Não é obrigatório fazer isso. Mas é obrigatório nomear primeiro parâmetro para acessar o segundo parâmetro, o índice.
    return medias[indice] < 7;
    //Saber quem foi aprovado= return medias[indice] >= 7
});

console.log(reprovados);

//retorno filter EXER:
//o que deve ser retornado da função callback para que o método filter funcione?
//Resposta: Um booleano, necessita de um valor "true" ou "false"
// "true" para o elemento ser adicionado "false" para o elemento ser descartado