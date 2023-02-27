//No markdown os links são marcados como: titulo do link entre colchtes [exemplo]
//url entre ()

//expressoões regulares:
//usam caracteres para assinalar os padrões que queremos
//comandos expressão regular: (utilizando o regx101)
//metacaracter: caracter usado como recurso da expressão regular

//para pegar vários carecteres separados, é utilizado as classes, representada por colchetes [];
//ver caracteres com exceção de algum selecionado, utliza o metachar, representada pelo ^(pode utilzar entre colchetes)
//pegar os caracteres de A até Z, C até O...[A-z] (A maiusculo e z minusculo para pegar as letras maiusculas e minusculas)
// para pegar tudo que não é considerado letra: [^A-z]
//pegar espaços em branco: [\s]
//para pegar espaços em branco e outros caracters: [\scaracter]

//para pegas os colchetes no texto: [\[\]] para pegar as palavras dentro dos colchetes: \[\w]*?\]
//\w para pegar todas as palavra dentro de um conjunto, como por exemplo pega todas palavra dentro dos colchetes
//mas, precisa passar para expressão regular quantas vezes é para ser pego para isso é usado:
//*?: encontrar o caracter que está sendo marcado, todas as vezes entre 0-ilimitado
//para pegar tudo que esta entre colchetes(até caracter especial e espaços): \[w\s]*?\]

//pegar http e https nos parenteses \(https? 
//é utilizado o ? para que o S seja visto como se occorre ou não, quantas vezes occorer
// resto do url: /\(https?:\/\/[^\s?#.].[^\s]*\)
                                 //1ºP/2ºP
//o . é utilizado para dividir classes(eu acho)

//Match = dá informações sobre os grupos, indices, caracteres que há neles e etc
//definir e separar grupos é utilizado os () no começo até onde quer definir

//flavor: cada linguagem de programação trata as expressões regulares de forma diferente
//o flavor serve para escolher qual é a linguagem que vai ser trabalhada a expressão regular
//No js é colocada a expressão regular em uma função exemplo: function extraiLinks(texto) {
//depois é criado uma const: const expressao =;
//nessa const é colocada a expressão com um / no começo e com gm no final ex:
//const regex = /expressao(depois da expressão fechar com/gm)