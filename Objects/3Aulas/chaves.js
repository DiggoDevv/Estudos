//objetivo: validar a compra do cliente, e ver se ele tem o endereço cadastrado na hora da compra


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
// metodo para retorna um array com todas as chaves, nomes das propriedades que já foram inicializados
  const chavesDoObjeto = Object.keys(cliente)
                    //  lista todos objetos em chaves
  console.log(chavesDoObjeto)
  if (!chavesDoObjeto.includes("enderecos")) {
    console.error("Erro. É necessário ter um endereço cadastrado")
  }
