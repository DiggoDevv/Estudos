//aninhados = um estar dentro do outro, "um bloco aninhado", "um codigo aninhado",o if é um exemplo de aninhado
const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
  };

  cliente.endereco = {
   rua: "R. Joseph Climber",
   numero: 1337,
   apartamento: true,
   complemento: "ap 934", 
  };
  console.log(cliente.endereco)
  //concluimos que dá para guardar um objeto dentro de outro