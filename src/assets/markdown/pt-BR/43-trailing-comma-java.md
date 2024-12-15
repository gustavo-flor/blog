No Java, a vírgula no final de uma expressão multilinha pode ser utilizada em:

- **Arrays**

```java
final String[] heroes = {
	"Batman",
	"Wonder Woman",
	"Deadpool", /* <-- Aqui! */
};
```

- **Enums**

```java
public enum Role {
	MANAGER,
	REVIEWER,
	SUBSCRIBER, /* <-- Aqui! */
}
```

É possível que você já tenha encontrado essa abordagem em algum lugar, no entanto, você já se perguntou por que ela é utilizada?

Apesar de parecer um detalhe insignificante, essa prática pode trazer uma série de benefícios para a legibilidade, manutenção e organização do seu código. 

Neste texto, pretendo apresentar os motivos pelos quais a vírgula ao final de expressões multilinha é mais do que apenas uma convenção de estilo, mas sim uma prática que pode melhorar a qualidade do seu código.

## Em detalhes

Aqui estão alguns motivos pelos quais você pode querer optar por essa prática:

### 1. Facilita modificações

Ao colocar a vírgula no final de cada linha, você simplifica a adição ou remoção de itens. 

Você pode fazer alterações sem precisar ajustar a última linha, o que pode reduzir erros de formatação.

Abaixo está a comparação das alterações necessárias ao remover o último item da lista. 

#### Sem vírgula

Note como foi necessário alterar a linha 3 ao remover a linha 4:

![Exemplo sem vírgula](/trailing-comma-java/0-no-comma.png)

#### Com vírgula

Aqui apenas uma linha é alterada:

![Exemplo com vírgula](/trailing-comma-java/0-comma.png)

### 2. Controle de versão com diffs mais limpos

Em sistemas de controle de versão, como o Git, diffs mais limpos podem ser gerados quando você adiciona ou remove linhas de expressões multilinhas, pois a alteração se limita à linha que foi modificada, sem afetar as linhas anteriores.

Abaixo está a comparação do diff gerado ao adicionar um novo elemento ao final de um enum:

#### Sem vírgula

Neste exemplo podemos ver as múltiplas linhas sendo apresentadas no diff:

![Exemplo sem vírgula](/trailing-comma-java/1-no-comma.png)

#### Com vírgula

Aqui apenas uma linha apresentada no diff:

![Exemplo com vírgula](/trailing-comma-java/1-comma.png)

## Moral da história

É importante notar que a vírgula no final das expressões multilinhas não é estritamente necessária para o compilador Java.

Portanto, se os benefícios citados não apresentam valor suficiente para você e/ou sua equipe, você não é obrigado a utilizá-los.

Particularmente, se estou trabalhando com um código que pode ser modificado com frequência, sempre opto pela abordagem das vírgulas devido ao ponto descrito em **“Controle de versão com diffs mais limpos”**.

## Para ir mais fundo

Decidi escrever sobre esse tema porque, recentemente, fui questionado sobre essa abordagem e, ao buscar um material sobre Java que mencionasse esses benefícios, não encontrei nenhum texto em português sobre o tema.

A seguir, deixo alguns dos textos que utilizei como referência:

- <https://kariem.github.io/2016/05/04/trailing-comma-java/>
- <https://medium.com/@nikgraf/why-you-should-enforce-dangling-commas-for-multiline-statements-d034c98e36f8>