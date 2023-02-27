// Desafio - Adicionando campos
// Adicionar informações importantes que ainda estão faltando, como telefone e também seus valores.

const cliente = {
    nome:"Andre",
    idade: 36,
    cpf: "1234567821",
    email:"andre@email.com"
}
// O cliente tem esses dados cadastrados, mas, está faltando o celular(campos)

console.log(cliente);

cliente.fone ="92425312321"
//adicionando o campo fone ao objeto
console.log(cliente);
cliente.fone ="8382185"
//trocando o valor de fone
console.log(cliente)