O que é o polimorfismo?

É a possibilidade de, por exemplo, uma subclasse de user, no caso do nosso projeto temos a classe user e ela tem duas subclasses que herdam dela, Admin e Docente. Então polimorfismo é a possibilidade dessas subclasses usarem um método, então, por exemplo, exibirInfos é um método que todas as subclasses trazem com ele. Então Admin pode usar exibirInfos, Docente também pode usar.

Então, eles podem utilizar essa classe com o mesmo nome, com a mesma assinatura, já vamos ver o que é uma assinatura de método, porém, internamente, esse método pode ter um comportamento diferente. Então, eu posso dizer que o método exibirInfos existe de certa forma em user, ele tem certo comportamento, porém, no caso de Admin, eu quero que exibirInfos tenha um comportamento um pouco diferente, no caso pode retornar somente nome.

SOLID:
SOLID, é um conjunto de design patterns, de padrão de design de código, desenvolvido para orientação a objeto, eles começaram a ser compilados nos anos 80 e foram definidos e centralizados pelos anos 2000. Vamos ver letra por letra desse acrônimo e o que elas significam.

 Então, a primeira letra é o S, de Single responsibility principle, princípio da responsabilidade única. O que isso significa? Significa que cada módulo, cada classe, cada método, só tem que ter um motivo para mudar, para sofrer alterações, para executar código.


  O, de SOLID, significa open/closed principle, ou seja, o princípio do aberto/fechado. É um nome meio esquisito, mas aberto e fechado nesse caso, significa que a classe tem que estar aberta para ser expandida, porém fechada, para ser modificada. Ou seja, a ideia nesse caso, é que seja possível adicionar funcionalidades em uma classe, mas não alterar métodos de uma classe que já existem e que já estão em funcionamento ou alterar essas classes mesmo.


 o terceiro princípio é o L, de Liskov substitution principle, o princípio da substituição de Liskov. Liskov é Barbara Liskov, uma cientista da computação, que foi quem pensou, quem primeiro formalizou isso que chamamos de princípio de substituição.

Então, isso significa que, se temos uma subclasse e uma superclasse, ou seja, uma classe que herda da outra, deveria ser possível sempre substituir uma pela outra, sem que nada deixe de funcionar. Como assim? Em outras palavras, se uma classe tem um atributo, a subclasse dela também tem que ter. Se algo funciona na superclasse, tem que funcionar na subclasse também. Ou seja, uma subclasse não pode fazer o que chamamos de quebrar contratos feitos pela superclasse. Ou seja, uma coisa que está estabelecida pela superclasse, não pode ser quebrada pela subclasse.


O I de SOLID é interface segregation principle, que é o princípio de segregação de interface. Então, esse princípio diz que clientes não devem ser forçados a depender de interfaces que eles não usam. Vamos dar uma explicada, sem utilizar interfaces. Basicamente, esse princípio diz que não podemos impor uma implementação de uma coisa que não vai ser necessária. Por exemplo, Juliana é vegetariana, então a classe Juliana não utilizaria métodos, por exemplo, que envolvam carne, todos os métodos que envolvem carne na classe Juliana são desnecessários.

Então, não podemos impor que a minha classe Juliana tenha um método que não vai usar. Como o JavaScript, novamente, não tem interfaces, esse princípio não tem como ser aplicado diretamente usando JavaScript


E o último, o D, é o dependency inversion principle, que é o princípio da inversão de dependência. Ou seja, digamos que módulos que estão em um nível mais acima da hierarquia de classes, não podem depender de nada que está abaixo deles, e também diz que nenhum deles podem depender de implementações, e sim, de abstrações. Exemplo:

 Quando falamos de abstração, estamos falando de esconder detalhes de como uma coisa funciona. Então, usamos um computador, utilizamos as interfaces do computador mesmo, o teclado é uma interface do computador, então a interface entre o computador e o ser humano, todas as entradas USB são interfaces por onde nos comunicamos com o computador, mas não vemos por dentro o funcionamento dele, o funcionamento dele, interno, teoricamente, para o usuário do computador, como ele funciona por dentro, não é uma coisa que ele precisa saber, uma coisa que interessa.



 Além disso, o JavaScript é uma linguagem fracamente tipada. Por conta disso, o JavaScript não possui suporte e não trabalha com interfaces, que é um conceito próprio da orientação a objetos e normalmente aplicado em linguagens compiladas e fortemente tipadas. Vamos entender melhor?

As interfaces possuem um papel muito importante na programação orientada a objetos, uma vez que esse paradigma é baseado na ideia de que os objetos apresentam uma interação entre si. Nesse sentido, as interfaces de um objeto funcionam como uma coleção de métodos pelos quais é possível realizar essas interações.

Imagine uma fôrma pré-definida/moldada para alguma coisa. As interfaces funcionam de forma similar, é como um “contrato de código”, onde você pode nomear, parametrizar ou descrever exatamente quais serão os tipos de objetos gerados a partir desse “molde”.

