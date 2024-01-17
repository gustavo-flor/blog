- **Classificação**: Comportamental

O padrão de projeto **Strategy** permite definir o comportamento de um algoritmo durante a execução da aplicação, garantindo assim a legibilidade do código.

Em outras palavras, esse padrão possibilita desacoplar múltiplos comportamentos em uma única interface, encapsulando a lógica de negócio em classes apartadas e reutilizando-as através de composição.

## O problema

Imagine um cenário onde você deve tomar a decisão de executar um determinado algoritmo / comportamento de acordo com algumas condições; a opção lógica parece ser utilizar um bloco condicional como `if-else` ou `switch-case` e implementar cada comportamento. 

Porém, essa lista de comportamentos e condições que você precisa implementar é volátil e complexa. 

Nesse cenário, é fácil imaginar que a chance do seu código se transformar em uma grande confusão, diminuindo assim a manutenibilidade, confiabilidade e legibilidade do código é alta.

Como resolver este problema?

## A solução

A ideia aqui é conseguirmos separar nossos comportamentos em classes apartadas — chamadas de estratégias (*Strategies*).

Primeiro vamos criar uma interface comum a todos os comportamentos; essa interface deve disponibilizar um método de execução que se encaixe na necessidade de todos os seus comportamentos. 

Após isso, crie uma classe para cada comportamento e implemente sua interface.

No código principal, gerencie qual estratégia deve ser utilizada com base em suas condicionais.

## Para ir mais fundo

- <https://refactoring.guru/design-patterns/strategy>