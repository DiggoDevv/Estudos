const user = {
    nome: "Juliana",
    email : "j@j.com",
    nascimento : "2021/01/01",
    role: "admin",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email)
    }
}

const admin  = {
    nome: "Mariana",
    email: "m@m.com",
    role: "admin",
    criarCurso(){
        console.log('curso criado!')
    }
}

//prototipos js: é a forma do js fazer com que os objetos herdem recursos uns dos outros.
                  //  1ºparametro : objeto que ceder as propriedade
Object.setPrototypeOf(admin, user)
                          //2ºpar : parametro herdado
    //setPrototypeOf= definir um prototipo
admin.criarCurso()
admin.exibirInfos()



//.binde = é usado para prender a execucação de uma função em um contexto específico
