
o comando utilizado para imprimir algo na tela é o System.out.println, mas apenas ele não será suficiente para que o programa compile.

ara que nosso código compile, primeiramente envolva-o com uma classe, exemplo:

public class Programa{

    System.out.println("ola mundo");
}


Nosso programa ainda não compila, para funcionar, coloque o método main

public class Programa{

    public static void main(String[] args){

        System.out.println("ola mundo");
    }
}



Após feito isso, salve o arquivo como Programa.java em algum diretório. O nome deve ser exatamente igual ao nome da classe criada

Agora, compile o código utilizando o compilador de Java da Oracle, chamado de javac. Ele nos dará o bytecode:

javac Programa.java

 Após compilado, podemos ver que o bytecode foi gerado com o mesmo nome, mas com .class no final.

7) Execute o programa já compilado escrevendo:

java Programa

Quando escrevemos apenas java, estamos invocando a máquina virtual para interpretar nosso programa.

Após feito isso, teremos como saída a frase ola mundo.