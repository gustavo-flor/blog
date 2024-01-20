- **Classificação**: Estrutural

O Design Pattern **Proxy** provê uma camada de controle de acesso a um objeto. 

Essa camada pode ser utilizada para evitar gastos com recurso (memória, CPU, conexões, etc.), realizar validações de segurança, gerenciar a auditoria do acesso ao objeto, etc.

## O problema

Imagine um cenário onde você possui uma classe que possua um comportamento custoso, por exemplo, um método que toda vez que é chamado realiza o download de um arquivo. 

Você sabe que esse objeto pode ser utilizado diversas vezes na sua aplicação, porém, percebe que poderia em alguns momentos armazenar em cache a informação e reutilizar o resultado, ao invés de realizar sempre o download do arquivo.

Como resolver este problema?

## A solução

A ideia aqui é criar uma classe que irá servir como um invólucro (*wrapper*) do seu objeto custoso, essa classe será responsável por gerenciar o acesso aos métodos internos do seu objeto e realizar suas devidas operações.

Continuando o exemplo acima, a ideia seria criar a classe invólucro. 

Nessa classe, saberíamos quando fazer cache do resultado para então reutilizá-lo.

## Para ir mais fundo

- <https://refactoring.guru/design-patterns/proxy>