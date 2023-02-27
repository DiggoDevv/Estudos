
formato Date
não o formato String ou Number, mas sim o formato Date.
Como o nome sugere, o Date é um objeto utilizado para trabalhar as datas e o tempo em JavaScript. No dia a dia de desenvolvimento é muito comum precisarmos utilizar a informação da data e hora para realizar alguma tarefa ou, especialmente, lidar com dados. No entanto, em JavaScript, essa mesma informação pode assumir diferentes tipos.

call()
O método call() executa a função passando valores e parâmetros específicos para serem usados como contexto do this. Ou seja, é possível atribuir um this diferente do contexto atual ao executar a função.

apply()
O método apply() funciona de forma semelhante ao call(), porém recebe a lista de argumentos em um array
Usando arrays, é possível passar os argumentos via variável ou até mesmo usando a propriedade arguments que existe internamente em todo objeto.

__proto__ é uma propriedade que todos os objetos têm e que aponta para o protótipo que foi definido para aquele objeto.

_proto__ será descontinuado
Esta é uma propriedade “assessor” que serve para “expor” o protótipo dos objetos e está em processo de ser descontinuada

prototype é uma propriedade da função que é definida como protótipo quando usamos new para criar novos objetos.

Não altere o prototype
Não é recomendável alterar diretamente o prototype, pois alterar diretamente as regras de herança de qualquer objeto afeta a performance do código em qualquer interpretador, seja o NodeJS ou navegadores. Vamos ver como criar objetos de acordo com as boas práticas do JavaScript em seguida.

Cuidado com a performance
Todas as propriedades de uma cadeia de protótipos são enumeradas e o tempo que o interpretador leva para pesquisar uma propriedade, desde o nível mais alto na cadeia, pode ser longo e impactar o desempenho. Além disso, se o código tentar acessar uma propriedade não existente, vai percorrer toda a cadeia durante a busca. Assim, não é uma boa prática criar longas cadeias de protótipos.