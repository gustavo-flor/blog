- **Classificação**: Comportamental

O padrão de projeto **State** permite que seu objeto mude os comportamentos quando altera seu estado interno, dando a impressão que sua classe mudou.

## O problema

Imagine que você precisa gerenciar uma classe que tenha diferentes comportamentos com base em algum estado interno, seus métodos facilmente irão possuir  diversas condicionais e comportamentos sendo compartilhados em uma mesma classe, dificultando assim a manutenção e escalabilidade do código.

Como resolver este problema?

## A solução

Basicamente, esse padrão encapsula seus comportamentos específicos de cada estado em classes apartadas, e delega a execução para cada uma dessas classes de acordo com seu estado interno.

Em outras palavras, a ideia aqui é disponibilizar uma interface que contenha os comportamentos esperados para cada estado, após isso, implemente classes concretas que implementam essa interface e execução seu comportamento.

Com as classes prontas, basta gerenciar o estado interno do seu objeto utilizando composição com a implementação de uma de suas classes, quando o estado do seu objeto mudar, mude também o objeto que representa o seu estado.

## Para ir mais fundo

- <https://refactoring.guru/design-patterns/state>