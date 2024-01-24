- **Classificação**: Comportamental

O Design Pattern **Visitor** permite separar o comportamento do objeto em que é executado, aumentando assim a modularidade e adaptabilidade da sua aplicação.

## O problema

Imagine um cenário onde você precisa adicionar um comportamento novo a uma classe *core* da sua aplicação, porém, esse novo comportamento não está associado diretamente ao escopo da sua classe. 

Por exemplo, um caso de uso onde você precisa exportar sua classe para um determinado arquivo, enviar métricas para um sistema de observabilidade, auditar as mudanças do seu objeto, etc.

Como fazer isso sem quebrar o encapsulamento da sua classe? Como evitar quebrar um fluxo *core* ao mexer nessa classe tão importante? Como manter o escopo da sua classe alinhado com suas responsabilidades?

## A solução

A ideia aqui é bem simples e contém 2 elementos essenciais, são eles:

- **Visitor**: Este elemento representa uma interface no seu sistema. Essa interface deve conter os métodos em que seus novos comportamentos “não *core*” serão implementados.
- **Element**: Este elemento representa seu objeto *core* e deve disponibilizar um método que recebe um **Visitor**. A ideia aqui é permitir delegar ao objeto principal a responsabilidade de definir qual método do visitante deve ser chamado.

Note que o elemento principal foi alterado — pois foi necessário criar o método que aceita um **Visitor**. No entanto, todo o comportamento está na classe concreta do **Visitor** e não no seu objeto principal, garantindo assim a separação dos contextos e responsabilidades.

## Para ir mais fundo

- <https://refactoring.guru/design-patterns/visitor>