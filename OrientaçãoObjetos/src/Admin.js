import User from "./User.js";
          //extends = a classe "Admin" se exstende a partir de User 
          export default class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true){
        super(nome, email, nascimento, role, ativo)
    // super(super classe)= classe fornecedora dos parametros e metros para outra herdar
    } 

    criarCurso(nomeDoCurso, vagas){
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
    }
}

