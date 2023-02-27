//quando queremos deletar um conjunto de chave/valor?

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }
   //Se quisermos, por exemplo, remover a propriedade aliado, podemos utilizar o operador delete:

// delete objPersonagem.aliado

// console.log(objPersonagem.aliado) //undefined

// Também é possível utilizar a notação de colchetes:
delete objPersonagem.aliado
delete objPersonagem["status"]

console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem.status) //undefined