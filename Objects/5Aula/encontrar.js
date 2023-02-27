const clientes = require("./clientess.json");

function encontrar(lista, chave, valor){
    return lista.find((item) => item[chave].includes(valor));
               //find: é dado um item para ele, se a chamada for verdadeira, ele retorna o item
}

const encontrado = encontrar(clientes, "nome", "Kirby");
                           // lista  // chave  //valor
const encontrado2 = encontrar(clientes, "telefone","1918820860");
//undefined, pois tem duas strings envolvendo o numero de telefone da pessoa
                        //o includes serve para ver se o telefone buscado está incluido no array, se for uma string faz o mesmo processo
console.log(encontrado2)