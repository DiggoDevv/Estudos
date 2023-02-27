const clientes = require("./clientess.json");

function ordenar(lista, propriedade){
                       //parametro que vamos alterar
//comparar dois objetos
                      //sort se uma for maior que a outra retorna o valor maior, e se as duas forem iguais retorna o valor 0
const resultado = lista.sort((a,b) => {
    // compara se a é maior que b acessando a propriedade
    if (a[propriedade] < b[propriedade]){
        return -1;
    }
    if (a[propriedade] > b[propriedade]){
        return 1;
    }
    return 0;
});
return resultado
}
const ordenadoNome = ordenar(clientes, "nome");
console.log(ordenadoNome);

//para ler em ordem reversa:
// if (ordem !== "crescente") {
//     resultado.reverse();
//   }


