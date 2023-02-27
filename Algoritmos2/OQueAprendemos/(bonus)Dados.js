//O que são dados?
//Os dados (e seus diversos tipos) são os blocos básicos da programação. Eles representam uma unidade ou um elemento de informação que pode ser acessado através de um identificador - por exemplo, uma variável.


//Variaveis:
//INT ou número inteiro: valores numéricos inteiros (positivos ou negativos);
// FLOAT ou o chamado “ponto flutuante”: valores numéricos com casas após a vírgula (positivos ou negativos);
// BOOLEAN ou booleanos: representado apenas por dois valores, “verdadeiro” e “falso”. Também chamados de operadores lógicos;
// TEXT: sequências ou cadeias de caracteres, utilizados para manipular textos e/ou outros tipos de dados não numéricos ou booleanos, como hashes de criptografia.

//O JavaScript, por exemplo, tem como tipos primitivos embutidos na estrutura básica da linguagem: 
//number, string, boolean e symbol (de “nome simbólico”, usado entre outras coisas para criar propriedades únicas em objetos)

//As estruturas de dados podem ser:

// lineares (ex. arrays) ou não lineares (ex. grafos);
// homogêneas (todos os dados que compõe a estrutura são do mesmo tipo) ou heterogêneas (podem conter dados de vários tipos);
// estáticas (têm tamanho/capacidade de memória fixa) ou dinâmicas (podem expandir).

//Pilha
// Em um array, é possível utilizar funções próprias para manipular elementos em qualquer posição da lista. 
// Porém, há situações onde é desejável mais controle sobre as operações que podem ser feitas na estrutura.
//  Aí entra a implementação de estruturas de dados como a pilha (stack) e a fila (queue).

// A pilha é uma estrutura de dados que, assim como o array, é similar a uma lista. 
// O paradigma principal por trás da pilha é o LIFO - Last In, First Out, ou “o último a entrar é o primeiro a sair”

//Abstraindo este princípio para código, percebe-se que há apenas dois métodos possíveis para manipular os dados de uma pilha: 
//1) inserir um elemento no topo da pilha e 2) remover um elemento do topo da pilha.

//exemplo de uso do método pilha
//utiliza pilhas para funcionar é o mecanismo de “voltar” e “avançar” páginas dos navegadores (representado normalmente por setas para a esquerda e direita). 
//Os endereços visitados vão se empilhando; ao chamarmos a função de “voltar”, o último endereço visitado - ou seja, o que está no topo da pilha - é o primeiro a ser visualizado.

//Deque:
//A estrutura de dados deque (abreviação de double-ended queue ou “fila de duas pontas”) é uma variação da fila que aceita inserção e remoção de elementos tanto do início quanto do final da fila.
//Podemos comparar, novamente, com uma fila de pessoas em um guichê de atendimento: 
//uma pessoa idosa que chega é atendida antes (ou seja, não pode ser colocada no fim da fila), 
//ao mesmo tempo que uma pessoa que entrou no final da fila pode desistir de esperar e ir embora (nesse caso, não podemos esperar a pessoa chegar na frente da fila para retirá-la de lá).

//arrays(dicas):
//há três coisas importantes para sabermos sobre arrays: 1) na maior parte das linguagens de programação, os arrays têm tamanho fixo; 
//2) todos os elementos ocupam espaços sequenciais na memória e 
//3) inserir ou remover elementos do meio do array não é muito simples, pois exige que esses elementos sejam deslocados. 

//Dicionário ou hashmap
//Dicionário (também conhecido como mapa, map ou hashmap) é uma estrutura que guarda dados em pares de chave e valor e utiliza estas chaves para encontrar os elementos associados a elas
// diferentemente das estruturas que vimos até agora, que trabalham com listas (sequenciais ou não) apenas de valores.

//Árvore
// A árvore é uma estrutura não-sequencial, muito útil para armazenar dados de forma hierárquica e que podem ser acessados de forma rápida.
// Pode-se definir árvore como uma coleção de dados representados por nós e arranjados em níveis hierárquicos (ao invés de sequências como as estruturas vistas anteriormente).

//A estrutura mais comum é a árvore binária, que tem no máximo dois nós-filhos a partir do nó inicial (chamado de raiz ou root).
// Um nó pode ter pais, irmãos e filhos; nós que têm pelo menos um filho são chamados de nós internos, e nós sem filhos são chamados de externos ou folhas