- **Classificação**: Comportamental

O **Chain of Responsibility** é um padrão de projeto que permite desacoplar o controle do fluxo de código do receptor (_entrypoint_) repassando a responsabilidade para uma cadeia de _handlers_ que podem decidir o que fazer com a requisição e se devem ou não repassar para o próximo _handler_ da corrente.

## O problema

Imagine que você tem uma sequência de passos e condições complexas para serem executadas e que esses passos evoluem semanalmente, com novas instruções e comportamentos.

Por exemplo, a validação de um formulário, de acordo com alguns campos devemos realizar diferentes tipos de comportamento e condição, concorda que facilmente essa sequência de passos pode se tornar complexa e o código se transformar em um "_spaghetti code_"?

Como resolver este problema?

## A solução

A ideia aqui é criar uma interface comum a todos os passos, onde seja possível repassar o _input_ dos dados através de um de seus métodos.

Com a interface criada, cada passo deve ser dividido em uma classe específica que recebe o passo seguinte (se existir).

Após a implementação, basta conectar todas as classes na ordem esperada e executar o seu código.

## Para ir mais fundo

- <https://refactoring.guru/design-patterns/chain-of-responsibility>