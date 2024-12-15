- **Classificação**: Comportamental

O **Template** **Method** é o padrão de projeto que propõe que subclasses possam sobrescrever etapas de um comportamento da superclasse de forma estruturada e adaptável.

## O problema

Imagine um cenário onde você possui um caso de uso com uma sequência de etapas, porém, cada uma dessas etapas pode ter um comportamento diferente de acordo com alguma necessidade.

Vamos a um exemplo, um caso de uso com as seguintes etapas:

1. Consultar dados
2. Tratar dados
3. Analisar dados
4. Exportar dados

Agora, pense nas inúmeras possibilidades para esse caso de uso, posso consultar dados de diferentes fontes, posso exportar dados para diferentes lugares e em alguns casos vou tratar e analisar os dados da forma convencional, porém em outros não. 

Como resolver esse problema respeitando o conceito de **DRY** (**D**on’t **R**epeat **Y**ourself) e mantendo seu código adaptável para receber novas etapas?

## A solução

A ideia aqui é simples, precisamos disponibilizar na superclasse métodos apartados que representam cada etapa do fluxo principal, dessa forma, permitimos que as etapas sejam sobrescritas por suas classes filhas, sem alterar o fluxo principal de execução. 

Além disso, a superclasse deve conter um método público que execute todos os passos em conjunto, assim, suas classes filhas receberão esse comportamento por herança.

## Para ir mais fundo

- <https://refactoring.guru/design-patterns/template-method>
- <https://sourcemaking.com/design_patterns/template_method>
