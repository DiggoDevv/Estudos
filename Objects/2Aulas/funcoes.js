const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo){
                 //"this(isso)" representa o objeto atual que estamos trabalhando 
   console.log("Saldo insuficiente") }else{
    this.saldo -=valor;
    console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
   }
    }
}
// cliente.efetuaPagamento(250); ////acima do valor do saldo
cliente.efetuaPagamento(25); ////pagamento vai ser realizado
