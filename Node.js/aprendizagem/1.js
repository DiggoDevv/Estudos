// Hoje em dia é praticamente impossível desenvolver programas sem depender de bibliotecas ou frameworks desenvolvidos por outras pessoas e empresas.
// Para facilitar o processo de baixar o código necessário e manter registros sobre quais códigos externos são usados em um projeto,
// são utilizados os package managers (gerenciadores de pacotes) como o NPM no caso do Node.js.

//Módulos
//Um módulo serve para encapsular uma determinada funcionalidade, normalmente uma ou mais funções,
//“escondendo” sua implementação do restante da aplicação e expondo somente o necessário para seu uso
// - por meio de uma função que pode ser exportada para outras partes do código, por exemplo.

//dependencia
//usamos este termo para especificar quais são os pacotes dos quais um programa depende para funcionar.
// Então, quando falamos de dependências, estamos falando especificamente dos pacotes de terceiros que são utilizados por um programa.

//promessas:
//Promessas podem ser concluídas de duas formas: fulfilled (realizada, completa) ou rejected (rejeitada), 
//o que equivale a duas situações possíveis, ou a promessa se concretizou (retornou os dados ou executou o código que deveria) ou não.

//Promessas que não estão fulfilled nem rejected estão pending (pendentes). 
//Ou seja, ainda não é possível saber o resultado final porque o processamento ainda não foi concluído.

//Após a finalização do processamento, a promessa passa para o estado de settled (concluída), independente do resultado.

//Uma vez que a promessa está settled seu resultado não se altera mais. 
//Ou seja, uma promessa que se concluiu como rejected não muda mais para o estado de fulfilled e vice-versa.

//erros: Try catch
//O Javascript (assim como muitas outras linguagens) utiliza o bloco try para envolver o trecho de código que pode gerar algum tipo de exceção e o bloco 
//catch é o responsável por capturar a exceção (caso ocorra) e permitir que seja “tratada”, retornando alguma mensagem informativa, executando alguma função específica, etc.

//finally:
//o finally, que é executado sempre, independentemente da execução do código ter sido resolvida no try ou gerado um erro passado para o catch.
//Tanto catch quanto finally são opcionais, mas o try deve sempre estar acompanhado de um ou outro.
