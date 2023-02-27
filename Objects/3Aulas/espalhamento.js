//sintaxe de espalhamento/spread operator: dividi o array e passar cada um dos campos como se fosse um parametro diferente
const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
  };
  
  cliente.enderecos = [
    {
      rua: "R. Joseph Climber",
      numero: 1337,
      apartamento: true,
      complemento: "ap 934",
    },
  ];
  
  const chavesDoObjeto = Object.keys(cliente);
  
  console.log(chavesDoObjeto);
  
  if (!chavesDoObjeto.includes("enderecos")) {
    console.error("Erro. É necessário ter um endereço cadastrado.");
  }

  function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`ligando para ${telefoneComercial}`)
    console.log(`ligando para ${telefoneResidencial}`)
  }
  //chamar essa função e passar os valores do nosso cliente
 // ligaParaCliente(cliente.telefone[0], cliente.telefone[1]);

 //usando o espalhamento para juntar os objetos mas espalhar seus dados:
 ligaParaCliente(...cliente.telefone);
 // ela espalhou o array no momento da chamada e chamou os dois parametros

 //criar uma carta para entregar no endereco
 const encomenda = {
//     destinatario: cliente.nome,
//     rua: cliente.endereco[0].rua,
//     numero:cliente.endereco[0].numero,
//     endereco: cliente.enderecos[0],

//usando o espalhamento:
destinatario: cliente.nome,
...cliente.enderecos[0]
}
 console.log(encomenda)