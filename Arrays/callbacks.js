//callback = resmo: inserir função como argumento
// a função é declarada para em outro momento ser chamada de volta pelo "callback"
// serve para esperar um comando, uma chamada de retorno
// "Quando o dado chegar, fazer alguma ação, executa o callback"
// é feito isso quando o código do callback é longo e não quer atrapalhar no processamento dos demais

// funcionamento do callback no node/sistema:
// pede para o sistema trazer os arquivos enquanto roda os outros códigos
// quando chegar os arquivos executa a ação (callback)
//resumindo a estrutura: roda o callback, e deixa guardado
// vai executando outras ações com o callback inativo,
// quando for acionado a ação do callback executa ele instâtaneamente/pronto
const nomes = ["Evaldo", "Mari", "Camis"];

// nomes.forEach(function (nome) {
//  console.log(nome);
// });

// nomes.forEach((nome) => {
//  console.log(nome);
// });

function imprimeNome(nome) {
  console.log(nome);
}

nomes.forEach(imprimeNome);