- **Classificação**: Criacional

O **Abstract** **Factory** é um padrão de projeto que permite desacoplar a criação de famílias de objetos relacionados e/ou dependentes sem especificar suas classes concretas. 

Permitindo assim maior flexibilidade e modularidade da sua aplicação, adotando configurações que definem quais os tipos dos objetos que devem ser instanciados.

## O problema

A criação de novos objetos pode causar grande acoplamento entre suas classes. 

Imagine um cenário onde você possui diferentes famílias herdadas de uma interface em comum.

Seu caso de uso precisa criar os objetos de uma família em específico de acordo com alguma regra de negócio em específico. 

Como isso pode ser feito sem criar um acoplamento entre seu caso de uso e a criação de cada uma dessas *N* famílias?

## A solução

A ideia aqui seria passar a responsabilidade da criação dos seus objetos para *factories* (fábricas), o **Abstract** **Factory** propõe a criação de uma interface comum que irá representar essa fábrica abstrata — 🕵️‍♂️ — essa interface deve disponibilizar os métodos responsáveis  pela criação de cada objeto de uma família. 

Após isso, basta implementar cada fábrica concreta para uma família em específico.

Com as classes implementadas, sua aplicação deve apenas configurar qual classe concreta pretende usar de acordo suas regras e problema resolvido.

## Para ir mais fundo

- <https://refactoring.guru/design-patterns/abstract-factory>
- <https://sourcemaking.com/design_patterns/abstract_factory>