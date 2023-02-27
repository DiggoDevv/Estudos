//Desafio - Acessar chaves
//consultar um objeto utilizando uma lista de chaves relativas a informações de clientes gerada pelo sistema e printar o resultado na tela.

const cliente = {
    nome:"Andre",
    idade: 36,
    cpf: "1234567821",
    email:"andre@email.com"
}

const chaves =["nome","idade","cpf","email"]
//console.log(cliente[chaves[0]])
// //           obj / nome / i
//utilizou a notação de colchetes para acessar a chaves vinda de outro lugar

//sempre que for acessar uma chave de um objeto utilizando uma variavel seja string ou uma posição em uma array, precisa ultilizar a notação de colchetes

//chaves.forEach(info=>console.log(cliente[info]))

//acessar campos que não necessariamente tenha:
//assumindo quando não se sabe o nome das chaves:
// chaves.forEach((chave) => {
// console.log(`A chave${chave} tem valor${cliente[chave]}`)
// })


//quando sabe exatamente o nome da chave que queremos pegar
// console.log(cliente["nome"])
