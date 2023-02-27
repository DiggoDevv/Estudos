const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
  };
//agora ao inves de guardar somente um endereço, vamos guardar vário
//para isso deve tranformar os "{}"em"[]" para virar um array 
  cliente.enderecos = [
    {
   rua: "R. Joseph Climber",
   numero: 1337,
   apartamento: true,
   complemento: "ap 934",
},
];

//podemos utilizar os métodos do array mesmo com os objetos dentro dele
cliente.enderecos.push({
    rua: "R. Joseph Lader",
    numero: 404,
    apartamento: false,
});
//filtrando apenas apartamentos
const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
            //se endereco.apartamento for true, será incluido nessa nova lista
            //lembrando que o filter sempre retorna uma nova lista
            
);
console.log(listaApenasApartamentos);
