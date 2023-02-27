//var
// var altura =5;
// var comprimento =7;

// area = altura * comprimento;
// console.log(area);
// var area;


//vantagem da variavel var:
//quando o js começa a ser executado
//as variaveis do tipo var vao ser carregadas primeiro
//Desvantagem: ela é muito livre, mais facil de occorer algum bug;

//let

// let forma = 'retângulo';
// let altura =5;
// let comprimento = 7;
// let area;

// if(forma === 'retângulo') {
//     area = altura * comprimento;
// } else {
//     area = altura * comprimento / 2;
// }
// console.log(area)

// let= ela é atribuida dentro do bloco de código quando vazia
// a let ainda é um pouco mais solta comparada a const já que com ela
//da para fazer mais reatribuições e ela aceita troca dos valores

// let minhaLet;
// console.log(minhaLet); //undefined

// // atribuindo um valor com TIPO DE DADO STRING
// minhaLet = "eu sou um texto";
// console.log(minhaLet); // "eu sou um texto"

// // reatribuindo, desta vez com dado do TIPO NUMBER
// minhaLet = 100;
// console.log(minhaLet); //100

//const
//const como o nome diz é uma constante, entao uma fez que ela é colocada no programa a gente não consegue altera-la;
//normalmente usada para proteger, trancar o valor de uma variavel que a gente está trabalhando

const forma = 'triângulo'
const altura = 5;
const comprimento = 7;
let area
//quando a gente cria uma variavel 'const' ela tem que vir com valor fixo atrobuído, diferente da var e let, onde pode deixar a variavel sem valor;

if(forma === 'quadrado'){
    area = altura * comprimento;
} else {
    area = altura * comprimento  / 2;
}
console.log(area);

// hoje em dia não se usa a variavel "var"
