//Método sort() 
// O método sort() molda elementos de um array em strings e os ordena em ordem crescente.
//No caso do motor V8, utilizado pelo Chrome/NodeJS, o sort() tem em sua implementação os algoritmos quick sort - ordenação rápida
// e insertion sort - ordenação por inserção

//merge sort(funcionamento):
// O código está baseado na função -ordena- (que compara e monta o array final) e na função mergeSort que divide o array para ser ordenado.
// A função ordena percorre o array passado por parâmetro com um loop -while-, então podemos considerar que ela vai percorrer os arrays fornecidos de forma linear.
// A função mergeSort, a cada vez que é chamada, divide o array em 2 partes cada vez menores - ou seja, a cada chamada apenas uma parte cada vez menor do array original é percorrida.
// Unindo as operações feitas pelo algoritmo (linear e logarítmica) temos a expressão O(n log(n)).


//Exemplos de Big O(algoritmos e log's)
//O(1): notação de Big O que representa um algoritmo que é executado em tempo constante.
//O(n^2): algoritmo quadrático
//O(n): algoritmo que é executado em tempo linear
//O(n log(n)): representa um algoritmo que reduz pela metade uma lista a cada vez que é executado


//Como é representado os logaritmos no computador:
//Em computação sempre é utilizado o logaritmo com base 2
//Esta característica está ligada ao sistema numérico utilizado pelos computadores: o sistema binário
// onde todos os valores são representados pelos números 0 e 1.

//Método console.trace()
// JavaScript tem muito mais métodos do que o log().

// Ele também conta com um método chamado trace() que, além de imprimir
// mensagens, também fornece um stack trace, uma espécie de rastro de execução das funções executadas.

// De forma bem simples, o trace() vai mostrar o caminho percorrido
// pelo programa até chegar ao ponto em que a 
// função console.trace() é chamada
//Esse método funciona como ferramenta importante para encontrarmos bugs e atua de mãos dadas com o interpretador. 

//Recursão 
// a recursão cria níveis de “aninhamento” a cada chamada de função, utilizando os 
// valores retornados na chamada anterior como parâmetro, porém sem substituir estes valores.

//MergeSort
//mergeSort() que recebe um array e retorna este array ordenado;

//sistema de pivo, posição do pivo:
//o array original vai ser “fatiado” em pequenas partes, e sempre que isso acontece é definido um novo pivô a partir do meio do array.
// Para o algoritmo, não há diferença em posicionar o pivô entre qualquer posição


//passo a passo do que aprendi:
// A primeira coisa que a função -divideNoPivo()- faz é localizar o pivô no meio do array (no array que usamos na aula é a posição -listaLivros[5],- ou seja: -{ titulo: “Rust”, preco: 22 }.- Em seguida, chama a função -encontraMenores()- que vai contar quantos elementos com valor menor que -22- existem no array, para em seguida trocar o pivô de lugar com o elemento que está na posição seguinte à quantidade de elementos menores.

//Em seguida, é feito um loop para passar os elementos com valor menor que o pivô para a esquerda dele, e os de valor maior para a direita.
// A variável -atual- guarda o -objeto- referente ao elemento que será comparado com o valor do pivô, e é dessa variável que pegaremos a propriedade -preco-.

//a condicional if, que faz a comparação do preco entre o pivô e o atual. Caso o preço do elemento atual seja menor, chamamos a função trocaLugar para trocar a posição do elemento atual com o elemento na posição valoresMenores - lembrando que o valor inicial dessa variável é 0, o que corresponde ao índice do primeiro elemento do array.
//Em seguida, o valor da variável valoresMenores é incrementado.

//Destrinchando o intuito da variável valoresMenores: ela está controlando a posição onde serão inseridos os elementos com valores menores que o pivô - lembrando que nesse momento o pivô já está posicionado em seu índice correto.

//Por esse motivo valoresMenores é iniciada no índice 0: durante o laço for, cada elemento do array tem sua propriedade preco comparada com preco do elemento pivô. Quando é encontrado o primeiro elemento com valor menor (PHP no índice 3), o código entra no bloco if e chama a função trocaLugar() passando como parâmetros de troca a posição do elemento atual e a posição 0, 
//que é o valor da variável valoresMenores neste momento da execução.

//Isso vai fazer com que um elemento de valor menor que o pivô assuma o lugar de um elemento de valor maior.
//E quando o for chega no quarto elemento (índice 3), localiza pela primeira vez um elemento do array com valor menor que o pivô. Então o valor de valoresMenores é 0 e o elemento PHP de valor 15 trocará de lugar com Go de 45.

//Após a troca, valoresMenores é incrementada em 1 (com a linha valoresMenores++). Dessa forma, da próxima vez que o for localizar um elemento com valor menor que o pivô, ele será trocado pelo elemento que está no índice valoresMenores ou seja, 1.

//aprendi sobre:
// conceito de pivo
// funcionamento do algoritmo de ordenação quicksort
// paradigma "dividir para conquistar"
f


//Pilha de chamadas:
//uma pilha(stack) é uma estrutura de dados onde o último item adicionado é o primeiro a ser removido - como uma pilha de livros no mundo real,
// executar e finalizar os processos/funções que estão empilhados, ao atingir o limite o programa cai no chamado erro de estouro de pilha, também chamado de stack overflow 
