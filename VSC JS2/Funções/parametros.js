// //parametros de função: serve para receber informações para a função ser executada corretamente
//               //2    //2
// // function soma(num1, num2){
// //     return num1 + num2;
// // }
// console.log(soma(2, 2))
// console.log(soma(245, 244))
// console.log(soma(500, 255))

// // parâmetros x argumentos

// //ordem dos parâmetros

// function nomeIdade(nome,idade){
//     return`meu nome é ${nome} e minha idade é ${idade}`;
// }
// //console.log(nomeIdade(40, "Juliana"))

function soma(num1, num2){
    return num1 + num2;
}

// function multiplica(num1, num2) {
//     return num1 * num2;
// }                          
                            //9         //6
// console.log(multiplica(soma(4, 5), soma(3,3)))   

//colocando parametros na multiplicacao
function multiplica(num1 = 1, num2 = 1) {
    return num1 * num2;
}   
                            //9     
console.log(multiplica(soma(4,5)))