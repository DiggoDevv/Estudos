criar arquivo .json = ir no terminal e digitar = npm init -y


para importar apenas uma função em um arquivo:
import soma from './caminho/arquivo.js';

Ou, no caso de mais funções exportadas a partir do mesmo módulo:

import { soma, multiplica } from...

para exportar apenas uma função em um arquivo:

export function soma(num1, num2) {
 return num1 + num2;
}

export function multiplica(num1, num2) {
 return soma(num1, num2) * 2;
}


// # = dado protegido, - = dado privado, + = dado público

Até recentemente, o JavaScript não tinha a opção de usar atributos privados com #. Ao invés disso, atributos privados tinham um _ como prefixo como convenção, indicando se tratar de atributos privados. Vamos ver alguns exemplos de como essa convenção funcionava.

Como “convenção”, podemos entender como um “acordo”; a comunidade dev adotou a sintaxe _variavel (com o _ antes do nome) como um aviso no código de que trata-se de uma propriedade ou método privado, que não deve ser chamado ou modificado fora da classe. Porém incluir o _ não produz nenhuma modificação sintática no código. Ou seja, os atributos na prática continuam se comportando como propriedade ou método normal (público) e ainda podem ser acessados livremente.

Lembrando que: propriedades e métodos públicos são aqueles que podem ser acessados a partir de qualquer parte do código; os privados são acessados apenas “por dentro” da classe.



Propriedades do tipo “apenas leitura” (read-only)
A partir do momento em que usamos getters ou setters em uma classe, as operações ficam dependentes entre si. Ou seja, uma classe que utiliza getters para acessar propriedades vai precisar necessariamente de setters para modificá-las.


É possível emular os getters e setters com funções. As funções são mais flexíveis do que get/set (podem aceitar argumentos diferentes, por exemplo).



conhecemos os chamados assessors, ou métodos que dão acesso a determinadas propriedades. Os getters retornam valores e os setters definem valores.

um getter pode ser utilizado para retornar um dado da classe de uma forma específica (juntando nome e sobrenome como vimos durante a aula, ou qualquer outro caso). Um setter é útil quando se deseja executar algum código sempre que alguma propriedade é definida ou sofre alguma modificação - por exemplo, códigos que façam validação de campos. 



o que aprendi:
O conceito de encapsulamento, que é a ação (ou ações) de “esconder” atributos de uma classe, para evitar acesso indevido a atributos importantes ou dados sensíveis, ou que métodos sejam utilizados de forma errada;
Como utilizar a sintaxe de atributos privados do JavaScript, através do prefixo #, para que a própria linguagem de programação faça a “segurança” da classe, impedindo o acesso externo a propriedades e métodos assinalados como privados com este prefixo;
A criar métodos assessors para “expôr” e permitir acesso e modificação de propriedades de forma controlada e restrita, através do uso das funções get para retornar dados específicos e set para definir dados específicos.


 Funções construtoras têm uma estrutura um pouco diferente das funções comuns (por exemplo, a sintaxe de atribuição de propriedades com =) e servem de modelo para criação de objetos através do operador new.