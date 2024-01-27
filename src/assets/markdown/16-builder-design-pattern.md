- **Classificação**: Criacional

**Builder** é o padrão de projeto que tem como objetivo principal permitir a criação de objetos complexos de maneira simplificada e estruturada.

## O problema

Imagine uma classe com múltiplas propriedades, por consequência os métodos construtores dessa classe vão possuir N argumentos. 

Portanto, criar esses objetos em tempo de execução pode se tornar uma tarefa difícil. 

Além disso a evolução dessas classes também é complexa, pois a cada nova propriedade adicionada todos os construtores serão afetados. 

Como resolver este problema?

## A solução

O **Builder** sugere que a responsabilidade de construção dessa classe seja extraída para outra classe especializada, por isso o nome **Builder** (Construtor). 

Essa classe especializada deve disponibilizar métodos que preparem a criação do objeto de forma separada (passo a passo) e, por fim, disponibilizar um método que realize a construção de nossa classe.

> [Código Fonte](https://github.com/gustavo-flor/design-patterns-hands-on/tree/1ebb1acd4972a5a3a53c508d53f302968ff9ec09/src/main/java/com/github/gustavoflor/dpho/creational/builder)

## Para ir mais fundo

- <https://refactoring.guru/design-patterns/builder>