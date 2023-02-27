//Desafio = printar infos
// Acessar um objeto com informações de um cliente e exibir essas informações no console.

const cliente = {
    nome:"Andre",
    idade: 36,
    cpf: "1234567821",
    email:"andre@email.com"
}
// console.log(cliente.nome)
//acessar a informação de cliente-nome
console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`)
console.log(cliente.cpf.substring(0,3))
                       //limitador, começa no indice=0 e vai até o 3
                       //esse método só funciona com strings
             //inserir somente os 3 primeiros números do cpf para segurança