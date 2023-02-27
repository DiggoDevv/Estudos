const dados = require("./cliente.json");
// require é uma função que o nosso ambiente nos permite usar para puxar um código de algum outro lugar
// nesse momento ele tá puxando o arquivo json e tranformando ele em um obj usavel
console.log(dados);
console.log(typeof dados);
        //typeof serve para ver o tipo do objeto dado

        //aula seguinte:
//tranformar um objeto em string
                          //.stringfy é a responsável por tranformar um objeto em uma string
const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);
console.log(typeof clienteEmString)
          //o tipo do dado esta como string

console.log(clienteEmString.nome)

const objetoCliente = JSON.parse(clienteEmString)
//   parse: traduzir/adequar, ele vai ler uma string e tenta montar de volta um objeto a partir daquilo
console.log(objetoCliente)
