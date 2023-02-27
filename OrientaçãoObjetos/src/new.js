// function User(nome, email){
//     this.nome = nome
//     this.email = email

//     this.exibirInfos = function(){
//         return `${this.nome}, ${this.email}`
//     }
// }

//forma de criar objetos usando construtor
// const novoUser = new User ('juliana', 'j@j.com')
// console.log(novoUser.exibirInfos())
       //quando trabalhamos com classes, inicialmos o nome da função, variavel com letra maiuscula

// function admin(role) {
//     User.call(this, 'Juliana', 'j@j.com')
//     this.role = role || 'estudante'
//                 //   || = ou
// }

// admin.prototype = Object.create(User.prototype)
// const novoUser = new admin('admin')
// console.log(novoUser.exibirInfos())
// console.log(novoUser.role)

//explicando  , estamos passando para dentro do prototype de admin as propriedade de user
// criando um objeto e passando as propriedades do prototipo de User, sendo eles passados como base para dentro do admin


//Criando User no formato de objeto
const user = {
    init: function(nome,email){
        this.nome = nome
        this.email = email
    },
    //↑↑padrão de construtor↑↑
    exibirInfos: function(){
        return this.nome
    }
}

const novoUser = Object.create(user)
novoUser.init('Juliana', 'j@j.com')
console.log(novoUser.exibirInfos('Juliana'))
// console.log(user.isPrototypeOf(novoUser))
//↑ metodo para testar se user esta sendo como prototipo de novoUser

//Object.create é mais usado na vida rela do que o .prototype