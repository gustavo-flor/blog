- **Classificação**: Estrutural

O padrão de projeto **Bridge** propõe a separação das responsabilidades de uma classe em duas camadas: abstração e implementação. 

Estas camadas representam, respectivamente, os casos de uso (métodos de alto nível) e seus sub-comportamentos (métodos de baixo nível)

## O problema

Imagine um cenário onde seu caso de uso pode conter diferentes tipos de sub-comportamentos. Por exemplo, ao alterar a senha de um usuário, você pode enviar uma notificação por e-mail, SMS, WhatsApp, etc.

Como você faria isso?

Uma opção é criar múltiplas classes para cada caso de uso e seus sub-comportamentos possíveis. Porém, note que a cada novo sub-comportamento, será necessário criar uma nova classe com todo o seu caso de uso. Que acaba gerando duplicação de código e diminuindo a manutenibilidade da sua aplicação.

Como resolver este problema?

## A solução

Como mencionado anteriormente, a ideia aqui é separar sua classe em duas camadas, sendo elas:

- **Implementação**: Esta camada representa um sub-comportamento que pode ter diferentes implementações. A ideia é criar uma interface comum e implementar cada tipo de comportamento.
- **Abstração**: Esta camada representa um caso de uso. É a classe concreta em que devemos adicionar o relacionamento de composição com uma *implementação*.

Por fim, a ideia central do padrão de projeto **Bridge** é optar pelo uso de composição ao invés de extensão (herança).

> [Código Fonte](https://github.com/gustavo-flor/design-patterns-hands-on/tree/main/src/main/java/com/github/gustavoflor/dpho/structural/bridge)

## Para ir mais fundo

- <https://refactoring.guru/design-patterns/bridge>
- <https://sourcemaking.com/design_patterns/bridge>
