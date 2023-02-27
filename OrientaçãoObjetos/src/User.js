export default class User {
    #nome
    #email
    #nascimento 
    #role
    #ativo

// # = propriedade protegida, propriedade não pode ser acessada nem modificada por fora da classe
// para método, é diferente, privado
// # = dado protegido, -(ou _ n entendi)= dado privado, + = dado público

    // para que #nome seja uma propriedade privada
    // ela é declarada antes como do constructor e dentro dele quando for chamada
// as classes meio que são uma "capa" (com algumas melhorias de perfomace) por cima das funções como se fosse uma camada
// que deixa o código mais paladavel(açucar-sintatico), mais facil
constructor(nome, email, nascimento, role, ativo = true){
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }
// ↑propriedades iniciadas a partir do construtor

//objeto para ter acesso as propriedades privadas que estão dentro da classe
   
//funções acessoras: (acessar propriedade pricvada) getters(pegar, mas apenas por leitura)
//setters: mudar propriedades privadas

//pode ter lógica de condicional (if)
get nome() {
    return this.#nome
}

get email(){
    return this.#email
}

get nascimento(){
    return this.#nascimento
}

get role(){
    return this.#role
}

get ativo(){
    return this.#ativo
}

set nome(novoNome){
    if (novoNome === ''){
        throw new Error('formato não válido')
    }
    this.#nome = novoNome
}


    // sintaxe de classe não é iniciado por function
    //(lembrando que métodos são funções que são executada no contexto de um objeto)
    exibirInfos(){
        //chamando o método privado
        return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`
    }
}