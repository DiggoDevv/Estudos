//Um caminho é onde se localiza um arquivo ou diretório (que também chamamos de pasta) no sistema de arquivos de um sistema operacional.
//é importante diferenciar caminho relativo de caminho absoluto, além de como acessá-los.

// Caminho absoluto
// Chamamos de caminho absoluto quando a localização de um arquivo ou pasta é especificado a partir do diretório-raiz do sistema operacional.
//exemplo:
    // #caminho para um diretório (a última / é opcional)
    // /home/juliana/Documents/alura/projeto-js

    // #caminho para um arquivo dentro do diretório
    // /home/juliana/Documents/alura/projeto-js/index.js

// Um caminho relativo para um diretório ou arquivo é definido a partir de sua relação com o pwd, ou seja, o present working directory (diretório de trabalho atual).
// Na linha de comando, pwd também é o comando print working directory (imprimir o diretório de trabalho)
// que usamos justamente para saber onde na estrutura do sistema operacional se encontra o diretório em que estamos.

// representação em árvore de um diretório como o do curso em que estamos trabalhando
// /home/juliana/Desktop/curso-js
// .
// ├── curso-js
// │   ├── arquivos
// │   │   └── texto1.md
// │   ├── package.json
// │   ├── package-lock.json
// │   └── src
// │       ├── cli.js
// │       ├── http-validate.js
// │       └── index.js

//Na representação acima, consideramos como pwd o diretório curso-js.
//Então, o caminho relativo do arquivo texto1.md, por exemplo, seria ./arquivos/texto1.md,
// o caminho absoluto seria /home/juliana/Desktop/curso-js/arquivos/texto1.md.

//Na estrutura de diretórios, o "." representa “aqui”. Quando queremos sair do diretório atual e “voltar” um nível, utilizamos ".."

// O que aprendi alura aula 4:
// A utilizar a interface de linha de comando e como aplicamos a lib process do Node.js para capturar e utilizar os dados informados no terminal em nosso código;
// A organizar o código separando em arquivos as funções que lidam com entrada e saída de dados das funções que processam os links;
// Como fazer estes diversos arquivos conversarem entre si através da exportação e importação de módulos com import e export;
// Que scripts são instruções que usamos para automatizar tarefas e como escrever nossos próprios scripts, incluí-los no arquivo de configuração package.json e utilizá-los para executar comandos no terminal.

//ERROS DE CAMINHO:

// ENOTFOUND
// Error: not found - Retorna quando o Node.js tenta estabelecer uma conexão com um servidor e a tentativa falha no DNS lookup; ou seja, ou o host não existe ou há algum erro no endereço fornecido, que não consegue ser resolvido pelo DNS.

// Algumas das soluções possíveis: verifique se a URL fornecida realmente existe e se a string com a URL está sendo fornecida da forma correta para a função ou método que fará a conexão.

// ENOENT
// Error: no entity - muitas vezes acontece quando um caminho especificado, seja um diretório ou um arquivo, não existe no sistema de arquivos. Neste caso, temos que verificar se o caminho fornecido está correto.

// Importante: algumas operações com fs requerem o uso do caminho absoluto de um arquivo ou diretório. Para “montar” a string com estes caminhos, você pode utilizar uma das libs mais comuns do Node.js, a path.

// EISDIR
// Error: is a directory - O caminho fornecido é um diretório. Normalmente vemos este erro quando o programa esperava receber um caminho de um arquivo, mas ao invés disso recebeu um diretório.
// Novamente, devemos verificar a string recebida pela função ou método para conferir se está completa e montada da forma correta.

// EADDRINUSE
// Error: address already in use - Muitas vezes este erro acontece quando estamos iniciando ou reiniciando um servidor web. Ele indica que o servidor está tentando se conectar a uma porta lógica que já está sendo ocupada por outro programa.

// ECONNREFUSED
// Error: connection refused - Houve uma tentativa de envio de requisição a um endpoint, porém a conexão foi recusada. Normalmente é causada por inatividade do serviço que está sendo requisitado.

// ECONNRESET
// Error: connection reset - Uma conexão em andamento foi fechada durante o processo de requisição-resposta, antes que a resposta fosse recebida. Pode ser causada por um timeout ou reinício do servidor.